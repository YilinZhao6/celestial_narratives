import { create } from 'zustand';

interface TimeState {
  currentTime: Date;
  setTime: (time: Date) => void;
}

export const useTimeStore = create<TimeState>((set) => ({
  currentTime: new Date(),
  setTime: (time: Date) => set({ currentTime: time }),
}));