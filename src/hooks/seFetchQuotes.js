import { useState, useEffect } from 'react';

// Mock data
const mockQuotes = [
  { id: 1, text: "Open source is changing the world.", author: "John Doe", title: "Developer" },
  { id: 2, text: "Collaboration is the key to innovation.", author: "Jane Smith", title: "Project Manager" },
  { id: 3, text: "GitHub has revolutionized software development.", author: "Bob Johnson", title: "CTO" },
];

export const useFetchQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        const fetchQuotes = () => {
            setTimeout(() => {
                setQuotes(mockQuotes);
                setIsLoading(false);
            }, 1000); 
        };

        fetchQuotes();
    }, []);

    return { quotes, isLoading, error };
};