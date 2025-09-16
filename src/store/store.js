import { create } from 'zustand'

export const useStore = create((set) => ({
	pillar: '',
	product: '',
	project: '',
	setPillar: (newPillar) => set(() => ({ pillar: newPillar })),
	setProduct: (newProduct) => set(() => ({ product: newProduct })),
	setProject: (newProject) => set(() => ({ project: newProject })),
}))
