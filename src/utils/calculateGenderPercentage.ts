// utils/calculateGenderPercentage.ts
import { User } from "../types/User";

export function calculateGenderPercentage(users: User[]) {
  const genderCounts: Record<string, number> = {};

  users.forEach((user) => {
    const gender = user.gender ?? "unknown";
    genderCounts[gender] = (genderCounts[gender] || 0) + 1;
  });

  const total = users.length;
  const percentages: Record<string, number> = {};

  for (const [gender, count] of Object.entries(genderCounts)) {
    percentages[gender] = Math.round((count / total) * 100);
  }

  return percentages;
}
