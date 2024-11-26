// import {useAtom} from "jotai";
// import {selectShopAtom} from "./atom.tsx";
import {Text} from "@yamada-ui/react"
// import {useEffect} from "react";

export function ShopMenuView() {
  //ここに選択されたショップのidが入っている？
  // const [selectShop] = useAtom(selectShopAtom)

  //動作確認用の配列
  //本来であればuseEffectで取得する
  const shopMenuArr = [
    { id: 1, shop_id: 1, menu: "台湾ラーメン", spicy_judge: 5 },
    { id: 2, shop_id: 1, menu: "台湾混ぜそば", spicy_judge: 4 },
    { id: 3, shop_id: 1, menu: "塩台湾ラーメン", spicy_judge: 3 },
    { id: 4, shop_id: 2, menu: "チゲスープ", spicy_judge: 3 },
    { id: 5, shop_id: 2, menu: "チヂミ", spicy_judge: 1 },
  ]
  const selectShopId = 1;

  // interface ShopMenuInterface {
  //   id: number;
  //   shop_id: string;
  //   menu: string;
  //   spicy_judge: number;

  // }
  // useEffect(()=>{
  //   const ashopMenuArr = async () => {
  //     await fetch("/menus")
  //       .then(async (shopMenuJson) => await shopMenuJson.json())
  //       .then((shopMenu) => shopMenu.filter((shopMenuObj:ShopMenuInterface[])=>shopMenuObj.shop_id===selectShopId))
  //   }
  // })

  return(
    <>
      {shopMenuArr
        .filter((menuObj) => menuObj.shop_id===selectShopId)
        .map((menuObj) =>
          <Text >{menuObj.menu} : 辛さ{menuObj.spicy_judge}</Text>)
      }
    </>
  )
}