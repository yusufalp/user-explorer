import { Suspense } from "react";
import UserList from "./UserList";

function App() {
  return (
    <>
      <h1>Users</h1>
      <Suspense fallback="Loading...">
        <UserList />
      </Suspense>
    </>
  );
}

export default App;
