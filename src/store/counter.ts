import { create } from 'zustand'

interface Counter {
  counter: number
  setCounter: (count: number) => void
}

export const useCounterStore = create<Counter>()(set => ({
  counter: 0,
  setCounter: payload => set({ counter: payload }),
}))
