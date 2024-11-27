interface ShopMenuInterface {
  id: number;
  shop_id: number;
  menu: string;
  spicy_judge: number;
}

export const addShopMenu = async (selectShop: any, setMenus: any) => {
  if (!selectShop) return;

  const responce = await fetch("/menus");
  const shopMenu = await responce.json();

  const filteredMenu = shopMenu.filter(
    (shopMenuObj: ShopMenuInterface) => shopMenuObj.shop_id === selectShop?.id,
  );
  setMenus(filteredMenu);
};
