import {useAtom} from "jotai";
import {selectShopAtom} from "./atom.tsx";
import {Box, SimpleGrid, GridItem } from "@yamada-ui/react"

export function ShopMenuView() {
  const [selectShop] = useAtom(selectShopAtom)
  const shopMenuArr = [
    { id: 1, shop_id: 1, menu: "台湾ラーメン", spicy_judge: 5 },
    { id: 2, shop_id: 1, menu: "台湾混ぜそば", spicy_judge: 4 },
    { id: 3, shop_id: 1, menu: "塩台湾ラーメン", spicy_judge: 3 }
  ]
  return(
    <>
      <Box maxWidth="500px">
        <SimpleGrid w="full" columns={{ base: 2, md: 1 }} gap="md">
          <GridItem w="full" h="1xs" rounded="md" bg="gray.50" color="black" maxWidth="200px">メニュー</GridItem>
          <GridItem w="full" h="1xs" rounded="md" bg="secondary"maxWidth="200px">辛さ</GridItem>
          <GridItem w="full" h="1xs" rounded="md" bg="warning" />
          <GridItem w="full" h="1xs" rounded="md" bg="danger" />
        </SimpleGrid>
      </Box>
    </>
  )
}