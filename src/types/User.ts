export type User = {
  gender: "female" | "male" | null | undefined;
  name:
    | {
        first: string | null | undefined;
        last: string | null | undefined;
      }
    | null
    | undefined;
  location:
    | {
        state: string | null | undefined;
      }
    | null
    | undefined;
  dob:
    | {
        age: number | null | undefined;
      }
    | null
    | undefined;
  login:
    | {
        uuid: string | null | undefined;
      }
    | null
    | undefined;
  nat: string | null | undefined;
};
