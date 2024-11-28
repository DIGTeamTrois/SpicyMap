import {Box, Button, FormControl, Heading, Input, Select, SelectItem, Tag} from "@yamada-ui/react";
import {useState} from "react";
import { useAtomValue } from "jotai";
import { newLocationAtom} from "./atom.tsx";

export function AddShop () {
  const [shopName, setShopName] = useState("")
  const [shopCategory, setShopCategory] = useState("")
  const newLocation = useAtomValue(newLocationAtom)

  const items: SelectItem[] = [
    { label: "韓国料理", value: "1" },
    { label: "ラーメン", value: "2" },
    { label: "カレー", value: "3" },
    { label: "中華料理", value: "4" },
    { label: "インド料理", value: "5" },
    { label: "その他", value: "6" },
  ];

  const dataUpdate = async () => {
    await fetch("/shops", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shop_name: shopName,
        average_spicy: 3.1,
        category_id: shopCategory,
        latitude:newLocation?.latitude,
        longitude:newLocation?.longitude,
      }),
    })
  }

  return(
    <>
      <Box
        bg="pink.50"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        minWidth="400px"
        maxWidth="500px"
        // mx="auto"
      >
        <Heading as="h2" size="sm" textAlign="center" mb={6}>
          お店を登録する
        </Heading>
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
            placeholder="お店の名前を記入"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
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
            placeholder="お店のカテゴリーを記入"
            items={items}
            value={shopCategory}
            onChange={(value: string) => setShopCategory(value)} // 修正箇所
          />
        </FormControl>

        <Button
          onClick={ async() => {
            await dataUpdate();
          }}
        >
          登録
        </Button>
      </Box>
    </>
  )
}