import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { UserListQuery } from "./__generated__/UserListQuery.graphql";
import UsersByGender from "./UsersByGender";

import { User } from "./types/User";
import { Filter } from "./types/Filter";

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
          dob {
            age
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

  console.log(data)

  return (
    <UsersByGender
      users={(data?.users ?? []).filter((u): u is User => u != null)}
    />
  );
};

export default UserList;
