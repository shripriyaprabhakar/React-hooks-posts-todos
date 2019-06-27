import React from "react";

import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");
  return (
    <div>
      <ul>
        {users.map(record => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
