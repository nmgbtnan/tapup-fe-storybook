'use client'

import { create } from 'zustand'

interface state {
  activeForm: string
  overlayOpen: boolean
}

interface action {
  changeActiveForm: (activeForm: string) => void
  changeOverlayOpen: (overlayOpen: boolean) => void
}

export const useMenuState = create<state & action>((set) => ({
  activeForm: '',
  overlayOpen: false,
  changeActiveForm: (activeForm: string) => set((state) => ({activeForm})),
  changeOverlayOpen: (overlayOpen: boolean) => set((state) => ({overlayOpen}))
}))