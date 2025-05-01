import { User } from "../types/User";

export function calculateAgeGroupPercentage(users: User[]) {
  const ageGroups: Record<string, number> = {
    "0-20": 0,
    "21-40": 0,
    "41-60": 0,
    "61-80": 0,
    "81-100": 0,
    "100+": 0,
  };

  users.forEach((user) => {
    const age = user.dob?.age;
    if (typeof age !== "number") return;

    if (age <= 20) ageGroups["0-20"]++;
    else if (age <= 40) ageGroups["21-40"]++;
    else if (age <= 60) ageGroups["41-60"]++;
    else if (age <= 80) ageGroups["61-80"]++;
    else if (age <= 100) ageGroups["81-100"]++;
    else ageGroups["100+"]++;
  });

  const total = users.length;
  const percentages: Record<string, number> = {};

  for (const [range, count] of Object.entries(ageGroups)) {
    percentages[range] = total > 0 ? Math.round((count / total) * 100) : 0;
  }

  return percentages;
}
