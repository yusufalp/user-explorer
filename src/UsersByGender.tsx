import React from "react";
import { User } from "./types/User";
import { calculateGenderPercentage } from "./utils/calculateGenderPercentage";

type Props = {
  users: User[];
};

const UsersByGender: React.FC<Props> = ({ users }) => {
  const genders = calculateGenderPercentage(users);

  return (
    <div>
      <h2>By Gender</h2>
      <ul>
        {Object.entries(genders).map(([gender, percentage]) => (
          <li key={gender}>
            {gender.charAt(0).toUpperCase() + gender.slice(1)}: {percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersByGender;
