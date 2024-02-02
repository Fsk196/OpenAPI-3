import React from "react";

const Card = ({ user }) => {
  return (
    <div className="border-2 px-4 py-3 my-2 rounded-md">
      <div>
        <li className="text-lg sm:text-xl" key={user.id}>
          <span className="text-xl sm:text-2xl font-medium pr-2">Name:</span>
          {user.name}
        </li>
      </div>
      <div>
        <li className="text-lg sm:text-xl" key={user.id}>
          <span className="text-xl sm:text-2xl font-medium pr-2">
            UserName:
          </span>
          {user.username}
        </li>
      </div>
      <div>
        <li className="text-lg sm:text-xl" key={user.id}>
          <span className="text-xl sm:text-2xl font-medium pr-2">Email:</span>
          {user.email}
        </li>
      </div>

      <div>
        <li className="text-lg sm:text-xl" key={user.id}>
          <span className="text-xl sm:text-2xl font-medium pr-2">Street:</span>
          {user.address.street}
        </li>
      </div>

      <div>
        <li className="text-lg sm:text-xl" key={user.id}>
          <span className="text-xl sm:text-2xl font-medium pr-2">City:</span>
          {user.address.city}
        </li>
      </div>

      <div>
        <li className="text-lg sm:text-xl" key={user.id}>
          <span className="text-xl sm:text-2xl font-medium pr-2">
            Phone No.:
          </span>
          {user.phone}
        </li>
      </div>
    </div>
  );
};

export default Card;
