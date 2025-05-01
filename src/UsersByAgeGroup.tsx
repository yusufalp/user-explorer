import React from "react";
import { User } from "./types/User";
import { calculateAgeGroupPercentage } from "./utils/calculateAgeGroupPercentage";

type Props = {
  users: User[];
};

const UsersByAgeGroup: React.FC<Props> = ({ users }) => {
  const ageGroups = calculateAgeGroupPercentage(users);

  return (
    <div>
      <h2>By Age Group</h2>
      <ul>
        {Object.entries(ageGroups).map(([group, percentage]) => (
          <li key={group}>
            {group}: {percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersByAgeGroup;
