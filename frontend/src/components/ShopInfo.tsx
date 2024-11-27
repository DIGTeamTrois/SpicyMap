// import { useAtom } from "jotai";
// import { selectShopAtom } from "./atom.tsx";
//
// export function ShopInfo() {
//   const [selectShop] = useAtom(selectShopAtom);
//
//   let shopInfoView = <h1>お店を選択</h1>;
//
//   if (selectShop.length > 0) {
//     shopInfoView = (
//       <>
//         <h1> {selectShop[0].shop_name}</h1>
//         <p>辛さレベル🌶️ {selectShop[0].average_spicy}</p>
//       </>
//     );
//   }
//
//   return <div className={"info"}>{shopInfoView}</div>;
// }
