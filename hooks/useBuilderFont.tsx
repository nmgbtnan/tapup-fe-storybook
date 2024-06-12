'use client'

import { create } from 'zustand'

interface state {
  nameFontFamily: string;
  fontFamily: string;
  nameSize: string;
  infoSize: string;
}

interface action {
  changeNameFontFamily(newFont: string): void;
  changeFontFamily(newFont: string): void;
  changeNameSize(newSize: string): void;
  changeInfoSize(newSize: string): void;
}

const INITIAL_STATE = {
  nameFontFamily: 'font-inter',
  fontFamily: 'font-inter',
  nameSize: '18px',
  infoSize: '14px',
};

export const useBuilderFont = create<state & action>((set) => ({
  ...INITIAL_STATE,
  changeNameFontFamily: (newFont: string) => set(() => ({ nameFontFamily: newFont })),
  changeFontFamily: (newFont: string) => set(() => ({ fontFamily: newFont })),
  changeNameSize: (newSize: string) => set(() => ({ nameSize: newSize })),
  changeInfoSize: (newSize: string) => set(() => ({ infoSize: newSize })),
}))