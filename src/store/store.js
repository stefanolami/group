import { create } from 'zustand'

export const useStore = create((set) => ({
	pillar: '',
	product: '',
	project: '',
	setPillar: (newPillar) => set((state) => ({ pillar: newPillar })),
	setProduct: (newProduct) => set((state) => ({ product: newProduct })),
	setProject: (newProject) => set((state) => ({ project: newProject })),
}))
