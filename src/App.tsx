import { Suspense, useState } from "react";

import UserList from "./UserList";
import { nationalities } from "./constants/nationalities";

function App() {
  const [filters, setFilters] = useState({
    results: 200,
    nat: "US",
  });

  const handleFiltersChange = (e) => {
    const { name, value } = e.target;

    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  console.log("filters :>> ", filters);
  return (
    <>
      <h1>Users</h1>

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

      <Suspense fallback="Loading...">
        <UserList filters={filters}/>
      </Suspense>
    </>
  );
}

export default App;
