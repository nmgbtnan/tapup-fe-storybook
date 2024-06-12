'use client'

import { create } from 'zustand'

interface Social {
  name: string;
  icon: JSX.Element;
  link: string;
  iconColor: string;
  iconBgColor: string;
}

interface state {
  socials: Social[];
}

interface action {
  addSocial(name: string, icon: JSX.Element, link: string, iconColor: string, iconBgColor: string): void;
  removeSocial(name: string): void;
}

export const useBuilderSocial = create<state & action>((set) => ({
  socials: [  ],
  addSocial: (name: string, icon: JSX.Element, link: string, iconColor: string, iconBgColor: string) => set((state) => ({
    socials: [...state.socials, { name, icon, link, iconColor, iconBgColor }]
  })),
  removeSocial: (name: string) => set((state) => ({
    socials: state.socials.filter((social) => social.name !== name)
  }))
}))