import  { atom } from 'jotai'

interface shopInterface {
    id: number,
    shop: string,
    average_spicy: number,
    category_id: number,
    latitude: number,
    longitude: number,
}

export const shopsAtom = atom<shopInterface[]>([])
export const selectShopAtom = atom<shopInterface[]>([])
// export const menusAtom = atom<object[]>([])
// export const commentsAtom = atom<object[]>([])
// export const categoriesAtom = atom<object[]>([])