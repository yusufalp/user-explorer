import React from "react";

import { nationalities } from "./constants/nationalities";
import { Filter } from "./types/Filter";

type Props = {
  filters: Filter;
  handleFiltersChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const UserListForm: React.FC<Props> = ({ filters, handleFiltersChange }) => {
  return (
    <form>
      <label htmlFor="results">Results</label>
      <input
        type="number"
        name="results"
        id="results"
        value={filters.results}
        onChange={handleFiltersChange}
      />
      <label htmlFor="nat">Nationality</label>
      <select
        name="nat"
        id="nat"
        defaultValue={filters.nat}
        onChange={handleFiltersChange}
      >
        {nationalities.map((nat) => (
          <option key={nat} value={nat}>
            {nat}
          </option>
        ))}
      </select>
    </form>
  );
};

export default UserListForm;
