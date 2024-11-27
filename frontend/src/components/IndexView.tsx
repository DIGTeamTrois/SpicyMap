import { HStack } from "@yamada-ui/react";
import { HereMap } from "./HereMap.tsx";
import { ShopMenuView } from "./ShopMenuView.tsx";
import { AddMenu } from "./AddMenu.tsx";

export default function IndexView() {
  return (
    <>
      <h1>HERE Map</h1>
      <HStack>
        <HereMap />
        <ShopMenuView />
      </HStack>
      <AddMenu />
    </>
  );
}
