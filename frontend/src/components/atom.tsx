import  { atom } from 'jotai'

interface shopInterface {
    id: number,
    shop: string,
    average_spicy: number,
    category_id: number,
    latitude: number,
    longitude: number,
}

interface menuInterface {
    id: number,
    shop_id: number,
    menu: string,
    spicy_judge: number,
}

interface commentsInterface {
    id: number,
    shop_id: number,
    menu_id: number,
    user_id: number,
    spicy_judge: number,
    post_datetime: Date,
    post_contents: string,
}

interface categoriesInterface {
    id: number,
    category: string,
}



export const shopsAtom = atom<shopInterface[]>([])
export const selectShopAtom = atom<shopInterface[]>([])
export const menusAtom = atom<menuInterface[]>([])
export const commentsAtom = atom<commentsInterface[]>([])
export const categoriesAtom = atom<categoriesInterface[]>([])