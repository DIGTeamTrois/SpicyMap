import { atom } from "jotai";

interface originInterface {
  latitude: number;
  longitude: number;
}

interface destinationInterface {
  id: number;
  shop: string;
  average_spicy: number;
  category_id: number;
  latitude: number;
  longitude: number;
}

interface shopInterface {
  id: number;
  shop_name: string;
  average_spicy: number;
  category_id: number;
  latitude: number;
  longitude: number;
}

interface menuInterface {
  id: number;
  shop_id: number;
  menu: string;
  spicy_judge: number;
}

interface commentsInterface {
  id: number;
  shop_id: number;
  menu_id: number;
  user_id: number;
  spicy_judge: number;
  post_datetime: Date;
  post_contents: string;
}

interface categoriesInterface {
  id: number;
  category: string;
}

interface newLocationInterface {
  latitude: number;
  longitude: number;
}

export const originAtom = atom<originInterface>();
export const destinationAtom = atom<destinationInterface>();

export const shopsAtom = atom<shopInterface[]>([]);
export const selectShopAtom = atom<shopInterface | undefined>();
export const menusAtom = atom<menuInterface[]>([]);
export const commentsAtom = atom<commentsInterface[]>([]);
export const categoriesAtom = atom<categoriesInterface[]>([]);
export const newLocationAtom = atom<newLocationInterface | undefined>()
