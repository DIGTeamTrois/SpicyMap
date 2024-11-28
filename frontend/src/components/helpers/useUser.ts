import { useState, useEffect } from 'react';

function useUser() {
    const [user, setUser] = useState<string|null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/user', { credentials: 'include' });
                if (response.ok) {
                    const data = await response.json();
                    console.log("data;",data);
                    setUser(data.user.user_name); // user_nameだけフロントで扱う
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

    return { user, setUser, loading };
}

export default useUser;
