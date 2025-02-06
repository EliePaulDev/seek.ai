import { useState, useEffect } from 'react';

type data<T> = {
    data: T | undefined;
    loading: boolean;
    error: any;
}

export function useData<T>(url: string, options?: RequestInit) : data<T> {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, options);
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