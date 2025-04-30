import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { UserListQuery } from "./__generated__/UserListQuery.graphql";

type Filter = {
  results: number;
  nat: string;
};

type Props = {
  filters: Filter;
};

const UserList: React.FC<Props> = ({ filters }) => {
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
      results: filters.results,
      nat: filters.nat,
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
