import  { atom } from 'jotai'

interface shopInterface {
    id: number,
    shop: string,
    average_spicy: number,
    category_id: number,
    latitude: number,
    longitude: number,
}

export const shopsAtom = atom<shopInterface[]>([
    {
        id: 1,
        shop: "韓国食堂",
        average_spicy: 3.2,
        category_id: 1,
        latitude: 35.17,
        longitude: 136.86,
    },
    {
        id: 2,
        shop: "味仙",
        average_spicy: 2,
        category_id: 1,
        latitude: 35.17,
        longitude: 136.87,
    },
    {
        id: 3,
        shop: "激辛ラーメン",
        average_spicy: 5,
        category_id: 1,
        latitude: 43.21,
        longitude: 137.13,
    },
    {
        id: 4,
        shop: "CoCo一番",
        average_spicy: 3.2,
        category_id: 1,
        latitude: 40.123,
        longitude: 140.123,
    },
    {
        id: 5,
        shop: "赤から",
        average_spicy: 3.8,
        category_id: 2,
        latitude: 34.254,
        longitude: 138.1234,
    },
])
export const selectShopAtom = atom<shopInterface[]>([])
// export const menusAtom = atom<object[]>([])
// export const commentsAtom = atom<object[]>([])
// export const categoriesAtom = atom<object[]>([])