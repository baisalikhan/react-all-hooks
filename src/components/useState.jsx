import React, { useState } from "react";

/*
1. useState Purpose: 
    Adds local state to functional components.
    
Example: 
    Toggle a dark mode UI. 
    const [isDark, setIsDark] = useState(false);
*/

const UseState = () => {
  const [users, setUsers] = useState([]);

  console.log(users);
  return (
    <div>
      <button onClick={() => setUsers([...users, "John"])}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseState;
