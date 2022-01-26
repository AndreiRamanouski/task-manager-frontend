import React from 'react';

const AssignedUsers = ({userName, userId, email, lastName}) => {
  return (
      <div>
      <h3>{userName} {lastName}</h3>
      <h3>Email {email}</h3>
    </div>
    )
};

export default AssignedUsers;
