export type SetupResult = {
  id: string;
  date: string;
  strategy: string;
  answers: Record<string, any>;
  score: number;
  status: "Excellent" | "Good" | "Wait" | "Avoid";
};

export type JournalEntry = {
  id: string;
  setupId: string;
  date: string;
  pair: string;
  direction: "Long" | "Short";
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
  result: "Win" | "Loss" | "BE";
  notes?: string;
  pnl?: number;
};

const STORAGE_KEYS = {
  SETUPS: "tradeguard_setups",
  JOURNALS: "tradeguard_journals",
};

export const storage = {
  getSetups: (): SetupResult[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEYS.SETUPS);
    return data ? JSON.parse(data) : [];
  },

  saveSetup: (setup: SetupResult) => {
    const setups = storage.getSetups();
    const updated = [setup, ...setups];
    localStorage.setItem(STORAGE_KEYS.SETUPS, JSON.stringify(updated));
  },

  getJournals: (): JournalEntry[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEYS.JOURNALS);
    return data ? JSON.parse(data) : [];
  },

  saveJournal: (journal: JournalEntry) => {
    const journals = storage.getJournals();
    const updated = [journal, ...journals];
    localStorage.setItem(STORAGE_KEYS.JOURNALS, JSON.stringify(updated));
  },

  getSetupById: (id: string): SetupResult | undefined => {
    const setups = storage.getSetups();
    return setups.find((s) => s.id === id);
  },
};
