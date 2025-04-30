/**
 * @generated SignedSource<<4e71baf8fa61a2168756b442f891232d>>
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
    "cacheID": "6dbdae72ef6603bf792848a77f6c387a",
    "id": null,
    "metadata": {},
    "name": "UserListQuery",
    "operationKind": "query",
    "text": "query UserListQuery(\n  $results: Int\n  $nat: String\n) {\n  users(results: $results, nat: $nat) {\n    gender\n    name {\n      first\n      last\n    }\n    location {\n      state\n    }\n    login {\n      uuid\n    }\n    nat\n  }\n}\n"
  }
};
})();

(node as any).hash = "c030cf8193ad2c442673cbe7d1c8e8c3";

export default node;
