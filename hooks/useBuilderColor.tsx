'use client'

import { create } from 'zustand'

interface state {
  nameColor: string;
  fontColor: string;
  bgColor: string;
}

interface action {
  changeNameColor(newColor: string): void;
  changeFontColor(newColor: string): void;
  changeBgColor(newColor: string): void;
}

const INITIAL_STATE = {
  nameColor: '#000000',
  fontColor: '#000000',
  bgColor: '#ffffff',
};

export const useBuilderColor = create<state & action>((set) => ({
  ...INITIAL_STATE,
  changeNameColor: (newColor: string) => set(() => ({ nameColor: newColor })),
  changeFontColor: (newColor: string) => set(() => ({ fontColor: newColor })),
  changeBgColor: (newColor: string) => set(() => ({ bgColor: newColor })),
}))