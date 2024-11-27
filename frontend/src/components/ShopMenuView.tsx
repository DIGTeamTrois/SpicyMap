import { Box, Heading, HStack, Text } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { selectShopAtom } from "./atom.tsx";

export function ShopMenuView() {
  const [selectShop] = useAtom(selectShopAtom);
  const [shopMenuArr, setShopMenuArr] = useState<ShopMenuInterface[]>([]);

  interface ShopMenuInterface {
    id: number;
    shop_id: number;
    menu: string;
    spicy_judge: number;
  }

  useEffect(() => {
    const getShopMenu = async () => {
      if (!selectShop) return;

      const responce = await fetch("/menus");
      const shopMenu = await responce.json();

      const filteredMenu = shopMenu.filter(
        (shopMenuObj: ShopMenuInterface) =>
          shopMenuObj.shop_id === selectShop?.id,
      );
      setShopMenuArr(filteredMenu);
    };
    console.log("selectShop変更されました");

    getShopMenu();
  }, [selectShop]);

  if (!selectShop) {
    return <Text>お店が選択されていません。</Text>;
  }

  return (
    <Box
      bg="#FFF9E6"
      p={6}
      borderRadius="md"
      boxShadow="lg"
      minWidth="400px"
      maxWidth="500px"
      mx="auto"
    >
      <Heading as="h2" size="sm" textAlign="center" mb={6}>
        {selectShop.shop_name} メニュー表
      </Heading>
      {shopMenuArr.map((menuObj, index) => (
        <HStack
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="gray.200"
          py={4}
          key={index}
        >
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              {menuObj.menu}
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" color="red.500">
              {"🔥".repeat(menuObj.spicy_judge)}
            </Text>
          </Box>
        </HStack>
      ))}
    </Box>
  );
}
