import {useAtom} from "jotai";
import {selectShopAtom} from "./atom.tsx";
import "./ShopInfo.css"

export function ShopInfo() {

const [selectShop] = useAtom(selectShopAtom)

    return (
        <div className={"info"}>
            <h1>{selectShop[0].shop}</h1>
            <p>辛さレベル🌶️ {selectShop[0].average_spicy}</p>
        </div>
    )}