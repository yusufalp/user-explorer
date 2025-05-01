import React from "react";
import { User } from "./types/User";
import { calculateCountByLastNameLength } from "./utils/calculateCountByLastNameLength";

type Props = {
  users: User[];
};

const UsersByLastNameLength: React.FC<Props> = ({ users }) => {
  const lastNameCounts = calculateCountByLastNameLength(users);

  return (
    <div>
      <h2>Users by Last Name Length</h2>
      <ul>
        {Object.entries(lastNameCounts).map(([length, count]) => (
          <li key={length}>
            <strong>{length}-letter</strong> last name: {count} {count === 1 ? "user" : "users"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersByLastNameLength;
