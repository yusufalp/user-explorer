import React from "react";

import { User } from "./types/User";

import { calculateGenderPercentage } from "./utils/calculateGenderPercentage";

type Props = {
  users: User[];
};

const UsersByGender: React.FC<Props> = ({ users }) => {
  const percentages = calculateGenderPercentage(users);

  return (
    <div>
      <p>By Gender</p>
      <ul>
        <li>Male: {percentages.male || 0}%</li>
        <li>Female: {percentages.female || 0}%</li>
      </ul>
    </div>
  );
};

export default UsersByGender;
