import { User } from "../types/User";

export function calculateTopStatesPercentage(
  users: User[]
): Record<string, number> {
  const stateCounts: Record<string, number> = {};

  users.forEach((user) => {
    const state = user.location?.state;
    if (state) {
      stateCounts[state] = (stateCounts[state] || 0) + 1;
    }
  });

  const totalUsers = users.length;

  const statePercentages: Record<string, number> = {};
  for (const state in stateCounts) {
    statePercentages[state] = Math.round((stateCounts[state] / totalUsers) * 100);
  }

  const topStates = Object.entries(statePercentages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const topStatesPercentages: Record<string, number> = {};
  topStates.forEach(([state, percentage]) => {
    topStatesPercentages[state] = percentage;
  });

  return topStatesPercentages;
}
