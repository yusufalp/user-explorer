import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

import { UserListQuery } from "./__generated__/UserListQuery.graphql";
import UsersByGender from "./UsersByGender";

import { User } from "./types/User";
import { Filter } from "./types/Filter";
import UsersByAgeGroup from "./UsersByAgeGroup";
import UsersByLastNameLength from "./UsersByLastNameLength";
import UsersByState from "./UsersByState";

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

  const users: User[] = (data?.users ?? []).filter((u): u is User => u != null);

  if (users.length === 0) return <p>No users found.</p>;

  return (
    <>
      <UsersByGender users={users} />

      <UsersByAgeGroup users={users} />

      <UsersByLastNameLength users={users} />

      <UsersByState users={users} />
    </>
  );
};

export default UserList;
