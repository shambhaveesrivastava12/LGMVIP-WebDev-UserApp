// UserGrid.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-grid">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        users.map(user => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserGrid;
