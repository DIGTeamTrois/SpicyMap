// import {useAtom} from "jotai";
// import {selectShopAtom} from "./atom.tsx";
import {Text} from "@yamada-ui/react"
import {useEffect, useState,} from "react";
// import {useEffect} from "react";

export function ShopMenuView() {
  //ここに選択されたショップのidが入っている？
  // const [selectShop] = useAtom(selectShopAtom)
  const [shopMenuArr, setShopMenuArr] = useState<ShopMenuInterface[]>([])

  const selectShopId = 1;

  interface ShopMenuInterface {
    id: number;
    shop_id: number;
    menu: string;
    spicy_judge: number;
  }
  useEffect(()=>{
    const getShopMenu = async () => {
      await fetch("/menus")
        .then(async (shopMenuJson) => await shopMenuJson.json())
        // .then(data => console.log(data))
        .then((shopMenu) => shopMenu.filter((shopMenuObj:ShopMenuInterface)=>shopMenuObj.shop_id ===selectShopId))
        .then((selectShopMenu) => {setShopMenuArr(selectShopMenu)})
    }

    getShopMenu();
  },[setShopMenuArr])

  return(
    <>
      <Text>選択中のお店のメニューの辛さを表示</Text>
      <Text>{"辛さレベル：5:辛い>>>4>>>3>>>2>>>1:普通"}</Text>
      {shopMenuArr.map((menuObj) =>
          <Text >{menuObj.menu} : レベル{menuObj.spicy_judge}</Text>)
      }
    </>
  )
}