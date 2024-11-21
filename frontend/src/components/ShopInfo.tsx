import {useAtom} from "jotai";
import {selectShopAtom} from "./atom.tsx";

export function ShopInfo() {

    const [selectShop] = useAtom(selectShopAtom)

    return (selectShop.length > 0 &&
        <>
            <h1>{selectShop[0].shop}</h1>
            <p>辛さレベル🌶️ {selectShop[0].average_spicy}</p>
        </>
    )}