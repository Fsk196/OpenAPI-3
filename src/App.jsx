// src/App.js
import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="flex justify-center w-full items-center h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="bg-white sm:px-10 px-3 py-5 my-10 rounded-md drop-shadow-md">
        <h1 className="sm:text-3xl text-xl font-medium text-center">
          JSONPlaceholder
        </h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
