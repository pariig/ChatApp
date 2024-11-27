import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get('jwt');
                const response = await axios.get('/api/user/getUserProfile', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('Response Data:', response.data);  
                // Make sure to set the filteredUsers array
                setAllUsers(response.data.filteredUsers || []);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            } finally {
                setLoading(false);
            }
        };
    
        getUsers();
    }, []);
    
    

    return [allUsers, loading];
}

export default useGetAllUsers;
