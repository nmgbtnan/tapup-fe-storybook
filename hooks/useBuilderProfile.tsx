'use client'

import { create } from 'zustand';


interface state {
  name: string;
  position: string;
  bio: string;
  profilePhoto?: string;
  coverPhoto?: string;
}

interface action {
  changeName(newName: string): void;
  changePosition(newPosition: string): void;
  changeBio(newBio: string): void;
  changeProfilePhoto(newProfilePhoto: string): void;
  changeCoverPhoto(newCoverPhoto: string): void;
}

const INITIAL_STATE = {
  name: '',
  position: 'Software Engineer',
  bio: 'Saving the world one suit at a time. Founder of Stark Industries and the Avengers. #IronMan #TechGuru #HeroLife',
  profilePhoto: ''
};


export const useBuilderProfile = create<state & action>((set) => ({
  ...INITIAL_STATE,
  changeName: (newName: string) => set(() => ({ name: newName })),
  changePosition: (newPosition: string) => set(() => ({ position: newPosition })),
  changeBio: (newBio: string) => set(() => ({ bio: newBio })),
  changeProfilePhoto: (newProfilePhoto: string) => set(() => ({ profilePhoto: newProfilePhoto })),
  changeCoverPhoto: (newCoverPhoto: string) => set(() => ({ coverPhoto: newCoverPhoto })),
}))

