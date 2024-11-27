import {
  Text, Select, Option, OptionGroup, SelectItem,
  FormControl, Label, HelperMessage, ErrorMessage, Input,
  VStack,
  Tag, Button,
} from "@yamada-ui/react"

export function WriteMenu() {
  const spicyLevel = "";

  const items: SelectItem[] = [
    { label: "辛い", value:"5"},
    { label: "少し辛い", value:"4"},
    { label: "普通", value:"3"},
    { label: "あまり辛くない", value:"2"},
    { label: "あま〜〜〜い", value:"1"},
  ]

  return(
    <>
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
          <Input type="menu" placeholder="メニュー名を記入" />
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
          <Select placeholder="辛さを選択" items={items} />
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
          <Input type="comment" placeholder="コメントを記入" />
        </FormControl>
      </VStack>
      <Button onClick={() => {

      }}>登録</Button>
    </>
  )
}