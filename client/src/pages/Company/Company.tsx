import { useParams } from 'react-router';
import { useData } from '../../hooks/useData/useData';
import { useEffect } from 'react';
import './Company.css';

export default function Company() {
    const { id } = useParams();
    const { data, loading, error } = useData(`${import.meta.env.VITE_API_URL}/company/${id}`);

    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div className='company'>
         { loading ? <p>Loading...</p> : 
                error ? <p>{error}</p> : data &&  
                    (
                        <div className="company-layout">
                                <aside>
                                    <header>
                                        <img src={data.cards.fields.image_url} width={150} height={150} alt={data.properties.name} />
                                        <h1>{data.properties.name}</h1>
                                    </header>
                                    <div>
                                        <h3>Company Information</h3>
                                        <p>{data.cards.fields.short_description}</p>
                                        <p><strong>Website:</strong> <a href={data.cards.fields.website_url} target='_blank'>{data.cards.fields.website_url}</a></p>
                                        <p><strong>Headquarters:</strong> {data.cards.fields.location_identifiers[0].value}, {data.cards.fields.location_identifiers[1].value}, {data.cards.fields.location_identifiers[2].value}</p>
                                        <p><strong>Stock Symbol:</strong> {data.cards.fields.listed_stock_symbol}</p>
                                    </div>
                                </aside>
                                <main>
                                    <h2>Chat about {data.properties.name}</h2>
                                    <div className="chat">
                                        <textarea></textarea>
                                        <button className="btn">Send</button>
                                    </div>
                                </main>
                                <aside>
                                    <h2>{data.properties.name} News</h2>
                                    <p><em>The latest news on {data.properties.name}</em></p>
                                </aside>
                        </div>
                    )
            }
        </div>
    )
}