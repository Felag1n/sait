import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
    songUrl: null,

    setSong: (newSongUrl) => set((state) => ({ songUrl: newSongUrl })),
    clearSong: () => set((state) => ({ songUrl: null })),
}))