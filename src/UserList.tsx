import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

const UserList: React.FC = () => {
  const data = useLazyLoadQuery(
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
    {}
  );

  return (
    <ul>
      {data?.users?.map((user) => (
        <li key={user.login.uuid}>
          {user?.name?.first} {user?.name?.last}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
