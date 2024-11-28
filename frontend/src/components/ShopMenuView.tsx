import { Box, Heading, HStack, Text } from "@yamada-ui/react";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { selectShopAtom, menusAtom } from "./atom.tsx";
import { addShopMenu } from "./helpers/getShopMenu.ts";

export function ShopMenuView() {
  const [selectShop] = useAtom(selectShopAtom);
  // const [shopMenuArr, setShopMenuArr] = useState<ShopMenuInterface[]>([]);
  const [menus, setMenus] = useAtom(menusAtom);

  useEffect(() => {
    addShopMenu(selectShop, setMenus);
    console.log("selectShop変更されました");
  }, [selectShop, setMenus]);

  if (!selectShop) {
    // return <Text size="sm">お店が選択されていません。</Text>;
    return <div></div>;
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
      {menus.map((menuObj, index) => (
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
