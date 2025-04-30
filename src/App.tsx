import { Suspense } from "react";

import UserList from "./UserList";
import { nationalities } from "./constants/nationalities";

function App() {
  return (
    <>
      <h1>Users</h1>

      <form>
        <label htmlFor="results">Results</label>
        <input type="number" name="results" id="results" value="200" />
        <label htmlFor="nat">Nationality</label>
        <select name="nat" id="nat" defaultValue="US">
          {nationalities.map((nat) => (
            <option value={nat}>{nat}</option>
          ))}
        </select>
      </form>
      
      <Suspense fallback="Loading...">
        <UserList />
      </Suspense>
    </>
  );
}

export default App;
