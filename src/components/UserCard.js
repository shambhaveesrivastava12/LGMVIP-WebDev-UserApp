// UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt="User Avatar" />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.email}</p>
      <p>User id:{user.id}</p>
    </div>
  );
};

export default UserCard;
