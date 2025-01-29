import { useState, useEffect } from 'react';

export function useData(url: string) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                setData(data);
            } else {
                setError(data);
            }
            setLoading(false);            
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}