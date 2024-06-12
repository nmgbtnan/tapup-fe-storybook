'use client'

import { FaFacebook } from 'react-icons/fa';
import { create } from 'zustand'

export interface Social {
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
  updateSocial(name: string, icon: JSX.Element, link: string, iconColor: string, iconBgColor: string): void;
}

export const useBuilderSocial = create<state & action>((set) => ({
  socials: [],
  addSocial: (name: string, icon: JSX.Element, link: string, iconColor: string, iconBgColor: string) => set((state) => ({
    socials: [...state.socials, { name, icon, link, iconColor, iconBgColor }]
  })),
  updateSocial: (name: string, icon: JSX.Element, link: string, iconColor: string, iconBgColor: string) => set((state) => ({
    socials: state.socials.map((social) => {
      if (social.name === name) {
        return { ...social, icon, link, iconColor, iconBgColor }
      }
      return social
    })
  })),
  removeSocial: (name: string) => set((state) => ({
    socials: state.socials.filter((social) => social.name !== name)
  }))
}))