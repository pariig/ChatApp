import React from 'react';
import User from './User';
import useGetAllUsers from '../../context/userGetAllUsers';

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className="py-2 flex-ankit overflow-y-auto" style={{ maxHeight: "calc(84vh - 1vh)" }}>
      {allUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}

export default Users;
