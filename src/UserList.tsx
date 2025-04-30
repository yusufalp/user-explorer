import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { UserListQuery } from "./__generated__/UserListQuery.graphql";

const UserList: React.FC = () => {
  const data = useLazyLoadQuery<UserListQuery>(
    graphql`
      query UserListQuery($results: Int, $nat: String) {
        users(results: $results, nat: $nat) {
          gender
          name {
            first
            last
          }
          location {
            state
          }
          login {
            uuid
          }
          nat
        }
      }
    `,
    {
      results: 200,
      nat: "US",
    }
  );

  return (
    <ul>
      {data?.users?.map((user) => (
        <li key={user?.login?.uuid}>
          {user?.name?.first} {user?.name?.last}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
