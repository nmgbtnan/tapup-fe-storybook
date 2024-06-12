'use client'
import { create } from 'zustand';

interface state {
  name: string;
  position: string;
  bio: string;
}

interface action {
  changeName(newName: string): void;
  changePosition(newPosition: string): void;
  changeBio(newBio: string): void;
}

const INITIAL_STATE = {
  name: 'Tony Stark',
  position: 'Software Engineer',
  bio: 'Saving the world one suit at a time. Founder of Stark Industries and the Avengers. #IronMan #TechGuru #HeroLife',
};

export const useBuilderProfile = create<state & action>((set) => ({
  ...INITIAL_STATE,
  changeName: (newName: string) => set(() => ({ name: newName })),
  changePosition: (newPosition: string) => set(() => ({ position: newPosition })),
  changeBio: (newBio: string) => set(() => ({ bio: newBio })),
}))