// UserApp.js
import React, { useState } from 'react';
import Navbar from './NavBar';
import UserGrid from './UserGrid';
import Home from './Home';

const UserApp = () => {
  const [showUsers, setShowUsers] = useState(false);

  const handleGetUsers = () => {
    setShowUsers(true);
  };

  return (
    <div className="App">
      <Navbar onGetUsers={handleGetUsers} />
      <Home/>
      {showUsers && <UserGrid />}
    </div>
  );
};

export default UserApp;
