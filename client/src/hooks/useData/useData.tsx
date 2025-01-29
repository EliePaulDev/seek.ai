import { useState, useEffect } from 'react';

export function useData(url: string, options?: RequestInit) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const newUrl = new URL(url);
            const response = await fetch(newUrl, options);
            const data = await response.json();
            if (response.ok) {
                setData(data);
            } else {
                setError(data);
            }
            setLoading(false);            
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
}