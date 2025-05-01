import { User } from "../types/User";

export function calculateCountByLastNameLength(
  users: User[]
): Record<number, number> {
  const counts: Record<number, number> = {};

  users.forEach((user) => {
    const length = user.name?.last?.length ?? 0;
    if (!counts[length]) {
      counts[length] = 0;
    }
    counts[length]++;
  });

  return counts;
}
