import React, { useEffect, useState } from "react";
import Dummy from "./HelpingComponents/dummy";

/*
2. useEffect Purpose: 
    Runs side effects like data fetching, subscriptions, or DOM updates. 
Example: 
    Fetch data on mount. 
    useEffect(() => { fetchData(); }, []);
*/

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [isToggle, setIsToggle] = useState(false); // for useEffect clean up function example

  useEffect(() => {
    console.log("Rerendering only on mount (first component render)");
  }, []);

  useEffect(() => {
    console.log("Rerendering on mount and 'users' change");
  }, [users]);

  return (
    <div>
      <button onClick={() => setUsers([...users, "John"])}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      {/* clean up function example */}
      <button onClick={() => setIsToggle(!isToggle)}>Toggle</button>
      {isToggle && <Dummy />}
    </div>
  );
};

export default UseEffect;
