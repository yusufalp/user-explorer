import { Suspense, useState } from "react";

import UserList from "./UserList";
import UserListForm from "./UserListForm";
import { nationalities } from "./constants/nationalities";

function App() {
  const [filters, setFilters] = useState({
    results: 200,
    nat: "US",
  });

  const handleFiltersChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "results") {
      const parsed = parseInt(value, 10);

      if (!isNaN(parsed) && parsed >= 1 && parsed <= 5000) {
        setFilters((prevFilters) => ({ ...prevFilters, [name]: parsed }));
      }
    } else if (name === "nat") {
      if (nationalities.includes(value)) {
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
      }
    }
  };

  return (
    <>
      <h1>Users</h1>

      <UserListForm
        filters={filters}
        handleFiltersChange={handleFiltersChange}
      />

      <Suspense fallback="Loading...">
        <UserList filters={filters} />
      </Suspense>
    </>
  );
}

export default App;
