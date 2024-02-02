import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <div>
        <h2 className="text-center text-xl sm:text-2xl font-medium my-4  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white py-1 rounded-md">
          User List
        </h2>
        <ul>
          {users.map((user) => (
            <div className="">
              <Card user={user} className="my-5" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
