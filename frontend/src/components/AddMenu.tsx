import {
  Select,
  SelectItem,
  FormControl,
  Input,
  Tag,
  Button,
  HStack,
} from "@yamada-ui/react";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { selectShopAtom, menusAtom } from "./atom.tsx";
import { addShopMenu } from "./helpers/getShopMenu.ts";

export function AddMenu() {
  const [menuName, setMenuName] = useState("");
  const [spicyLevel, setSpicyLevel] = useState<string>("");
  const selectShop = useAtomValue(selectShopAtom);
  const setMenus = useSetAtom(menusAtom);

  const items: SelectItem[] = [
    { label: "辛い", value: "5" },
    { label: "少し辛い", value: "4" },
    { label: "あまり辛くない", value: "3" },
    { label: "普通", value: "2" },
    { label: "あま〜〜〜い", value: "1" },
  ];

  const dataUpdate = async () => {
    console.log(selectShop?.id);

    await fetch("/menus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shop_id: selectShop?.id,
        menu: menuName,
        spicy_judge: spicyLevel,
      }),
    });
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      borderColor="gray.200"
      py={4}
      // key={index}
    >
      <FormControl
        isRequired
        requiredIndicator={
          <Tag size="sm" colorScheme="red" ms={2}>
            required
          </Tag>
        }
      >
        <Input
          type="text"
          placeholder="メニュー名を記入"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
        />
      </FormControl>
      <FormControl
        isRequired
        requiredIndicator={
          <Tag size="sm" colorScheme="red" ms={2}>
            required
          </Tag>
        }
      >
        <Select
          placeholder="辛さを選択"
          items={items}
          value={spicyLevel}
          onChange={(value: string) => setSpicyLevel(value)} // 修正箇所
        />
      </FormControl>
      <Button
        onClick={async () => {
          await dataUpdate();
          await addShopMenu(selectShop, setMenus);
          console.log("登録されました");
          setMenuName("");
          setSpicyLevel("");
        }}
      >
        登録
      </Button>
    </HStack>
  );
}
