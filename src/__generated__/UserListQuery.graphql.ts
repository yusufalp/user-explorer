/**
 * @generated SignedSource<<2362000792074dead0ba66052683a1be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type Gender = "female" | "male" | "%future added value";
export type UserListQuery$variables = {
  nat?: string | null | undefined;
  results?: number | null | undefined;
};
export type UserListQuery$data = {
  readonly users: ReadonlyArray<{
    readonly dob: {
      readonly age: number | null | undefined;
    } | null | undefined;
    readonly gender: Gender | null | undefined;
    readonly location: {
      readonly state: string | null | undefined;
    } | null | undefined;
    readonly login: {
      readonly uuid: any | null | undefined;
    } | null | undefined;
    readonly name: {
      readonly first: string | null | undefined;
      readonly last: string | null | undefined;
    } | null | undefined;
    readonly nat: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type UserListQuery = {
  response: UserListQuery$data;
  variables: UserListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nat"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "results"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "nat",
        "variableName": "nat"
      },
      {
        "kind": "Variable",
        "name": "results",
        "variableName": "results"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gender",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserName",
        "kind": "LinkedField",
        "name": "name",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "first",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "last",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserLocation",
        "kind": "LinkedField",
        "name": "location",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserDob",
        "kind": "LinkedField",
        "name": "dob",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "age",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserLogin",
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uuid",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nat",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d69c7a9552024353e5fe1027ac62fc2b",
    "id": null,
    "metadata": {},
    "name": "UserListQuery",
    "operationKind": "query",
    "text": "query UserListQuery(\n  $results: Int\n  $nat: String\n) {\n  users(results: $results, nat: $nat) {\n    gender\n    name {\n      first\n      last\n    }\n    location {\n      state\n    }\n    dob {\n      age\n    }\n    login {\n      uuid\n    }\n    nat\n  }\n}\n"
  }
};
})();

(node as any).hash = "f26cb8e995e9108331b03651d474a0ad";

export default node;
