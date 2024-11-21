import  { atom } from 'jotai'

interface shopInterface {
    id: number,
    shop: string,
    average_spicy: number,
    category_id: number,
    latitude: number,
    longitude: number,
}

export const shopsAtom = atom<shopInterface[]>([{
    id: 1,
    shop: "韓国食堂",
    average_spicy: 3.2,
    category_id: 1,
    latitude: 35.17,
    longitude: 136.86,
}])
// export const menusAtom = atom<object[]>([])
// export const commentsAtom = atom<object[]>([])
// export const categoriesAtom = atom<object[]>([])