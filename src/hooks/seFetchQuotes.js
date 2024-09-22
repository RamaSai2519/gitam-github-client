import { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed

export const useFetchQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
                const response = await axios.get('YOUR_API_ENDPOINT');
                setQuotes(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
                setError(err);
                setIsLoading(false);
            }
        };

        fetchQuotes();
    }, []);

    return { quotes, isLoading, error };
};