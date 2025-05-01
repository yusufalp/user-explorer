import React from "react";
import { User } from "./types/User";
import { calculateTopStatesPercentage } from "./utils/calculateTopStatesPercentage";

type Props = {
  users: User[];
};

const UsersByState: React.FC<Props> = ({ users }) => {
  const topStates = calculateTopStatesPercentage(users);

  return (
    <div>
      <h2>Top 10 States by User Percentage</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.entries(topStates).map(([state, percentage]) => (
          <li key={state}>
            <strong>{state}</strong>: {percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersByState;
