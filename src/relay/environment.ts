import {
  Environment,
  Store,
  RecordSource,
  Network,
  FetchFunction,
} from "relay-runtime";

const HTTP_ENDPOINT =
  "https://nextjs-randomuser-graphql.vercel.app/api/graphql";

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const response = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error("Response failed.");
  }

  return await response.json();
};

export const environment = new Environment({
  store: new Store(new RecordSource({})),
  network: Network.create(fetchGraphQL),
});
