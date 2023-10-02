import {create} from 'zustand';

interface ITestStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const ServiceStoreWithZustand = create<ITestStore>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));
