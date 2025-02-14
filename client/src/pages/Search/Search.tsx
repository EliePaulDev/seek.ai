import { useSearchParams } from 'react-router';
import { useData } from '../../hooks/useData/useData';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import './Search.css';

type Entity = Partial<{
    uuid: string;
    properties: {
        name: string;
        short_description: string;
        image_url: string;
        [key: string]: any;
    }
}>

type crunchbaseData = {
    count: number;
    entities: Entity[];
}


export default function Search() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('company');
    const options = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"  
            }
    }
    const { data, loading, error } = useData<crunchbaseData>(`${import.meta.env.VITE_API_URL}/search?company=${searchQuery}`, options);
  

    return(
        <div className='search'>
            <div className='search-sidebar'>
                <h3>Search</h3>
                <p> term searched: {searchQuery}</p>
                {data?.count && <p> {data.count} result{data.count > 1 && 's'}</p>}
            </div>
           <div className="company-results">
            {loading ? <p>Loading...</p> : (
                error ? <p>{error}</p> : (
                    data?.entities.map((entity) => (
                        <CompanyCard 
                            key={entity.uuid}
                            name={entity.properties?.name || ''}
                            website={entity.properties?.website_url}
                            shortDescription={entity.properties?.short_description}
                            imageUrl={entity.properties?.image_url}
                            facebook={entity.properties?.facebook?.value}
                            linkedin={entity.properties?.linkedin?.value}
                            twitter={entity.properties?.twitter?.value}
                            location={`${entity.properties?.location_identifiers?.[0].value}, ${entity.properties?.location_identifiers?.[1].value}, ${entity.properties?.location_identifiers?.[2]?.value}`}
                            listedStock={entity.properties?.listed_stock_symbol}
                        />
                    ))
                ))}
                </div>
        </div>
    )
}