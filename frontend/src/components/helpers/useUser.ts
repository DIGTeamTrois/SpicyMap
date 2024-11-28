import { useState, useEffect } from 'react';

function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/user', { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setUser(data.user);
                } else {
                    setUser(null); // 未認証の場合
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
}

export default useUser;
