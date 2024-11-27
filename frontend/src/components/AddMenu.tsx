import {
  Select,SelectItem,
  FormControl, Input,
  VStack,
  Tag, Button,
  Wrap,
} from "@yamada-ui/react"
import {useState} from "react";

export function AddMenu() {
  // const spicyLevel = "";
  const [menuName, setMenuName] = useState("");
  const [spicyLevel, setSpicyLevel] = useState<string>("");
  const [comment, setComment] = useState("");

  const items: SelectItem[] = [
    { label: "辛い", value:"5"},
    { label: "少し辛い", value:"4"},
    { label: "あまり辛くない", value:"3"},
    { label: "普通", value:"2"},
    { label: "あま〜〜〜い", value:"1"},
  ]

  const dataUpdate = async ()=>{
    console.log(comment)
    await fetch("/menus",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shop_id: 18,
        menu: menuName,
        spicy_judge: spicyLevel
      }),
    })
  }

  return(
    <>
      <Wrap gap="md">
        <text>コメントを書く</text>
        <VStack>
          <FormControl
            isRequired
            label="メニュー名"
            requiredIndicator={
              <Tag size="sm" colorScheme="red" ms={2}>
                required
              </Tag>
            }
          >
            <Input type="menu" placeholder="メニュー名を記入" onBlur={(e)=>{
              setMenuName(e.target.value)
            }}/>
          </FormControl>
          <FormControl
            isRequired
            label="辛さを選択"
            requiredIndicator={
              <Tag size="sm" colorScheme="red" ms={2}>
                required
              </Tag>
            }
          >
            <Select placeholder="辛さを選択" items={items} onChange={(selectValue)=>{
              setSpicyLevel(selectValue)
            }}
            />
          </FormControl>
          <FormControl
            isRequired
            label="コメント"
            requiredIndicator={
              <Tag size="sm" colorScheme="red" ms={2}>
                required
              </Tag>
            }
          >
            <Input type="comment" placeholder="コメントを記入" onBlur={(e)=>{
              setComment(e.target.value)
            }}/>
          </FormControl>
        </VStack>
        <Button onClick={() => {
          dataUpdate();
        }}>登録</Button>
      </Wrap>
    </>
  )
}