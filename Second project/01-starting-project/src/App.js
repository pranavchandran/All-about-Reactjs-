import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const onAddUser = (user) => {
    setUsersList((prevusersList) => {
      return [...prevusersList, user];
    }
    );
  }

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
