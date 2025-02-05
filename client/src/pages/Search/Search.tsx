import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { useData } from '../../hooks/useData/useData';
import './Search.css';

export default function Search() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('company');
    const options = useMemo(() => ({
        method: 'POST',
        headers: {
            "X-Cb-user-key": import.meta.env.VITE_CRUNCHBASE_API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "field_ids": ["name", "linkedin", "twitter", "facebook", "short_description", "image_url", "identifier"],
            "query": [{
                "type": "predicate",
                "field_id": "identifier",
                "operator_id": "contains",
                "values": [searchQuery]
            }]
})
    }), [searchQuery]);
    const { data, loading, error } = useData("/crunchbase", options);
    return(
        <div className='search'>
            <h3>Search</h3>
        </div>
    )
}