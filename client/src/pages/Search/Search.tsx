import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { useData } from '../../hooks/useData/useData';
import './Search.css';

export default function Search() {
    const [searchParams] = useSearchParams();
    const options = {
        method: 'POST',
        headers: {
            "X-Cb-user-key": import.meta.env.VITE_CRUNCHBASE_API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            field_ids: ["name", "domain", "linkedin", "twitter", "facebook", "instagram_url", "company_type", "short_description", "image_url", "description", "founded_date", "location", "employee_count", "tags", "website", "status"],
            query: [{
                field_id: "identifier",
                operator: "contains",
                values: [searchParams.get('company')]
            }]
        })
    }
    const { data, loading, error } = useData("/api/crunchbase", options);
    return(
        <div className='search'>
            <h3>Search</h3>
        </div>
    )
}