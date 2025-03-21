import { useSyncedPref } from './useSyncedPref';

export function useBudgetMode() {
  const [isBudgetModeEnabled] = useSyncedPref('isBudgetModeEnabled');
  return String(isBudgetModeEnabled) === 'true';
}
