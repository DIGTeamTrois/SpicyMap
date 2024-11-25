# SpicyMap

## DB名
spicy_map

```mermaid
erDiagram
shop_info {
    increments id PK "主キー"
    string shop "店名"
    decimal(32) average_spicy "平均辛さ"
    integer category_id FK "カテゴリーID" 
    decimal(18)  latitude "緯度"
    decimal(18) longitude "経度"
}

menu_info {
    increments id PK "id 主キー"
    integer shop_id FK "お店id"
    string menu "メニュー名"
    integer spicy_judge "辛さ評価"
}


comment_info {
    increments id PK "主キー"
    integer shop_id FK "お店id"
    integer menu_id FK "メニューID"
    integer user_id FK "投稿者ID"
    integer spicy_judge "辛さ評価"
    timestamp post_datetime "投稿日時" 
    string post_contents "投稿内容"
}

user_info {
    increments id PK "id 主キー"
    string user_name "ユーザ名"
    string login_name "ログイン名"
    string password "password"
}

category_info {
    increments id PK "id 主キー"
    string category "カテゴリー"
}

shop_info ||--o{ menu_info : "1つのshop_infoは、0以上のmenu_infoを持つ"
menu_info ||--o{ comment_info : "1つのmenu_infoは、0以上のcomment_infoを持つ"
user_info ||--o{ comment_info : "1つのuser_infoは、0以上のcomment_infoを持つ"
category_info ||--o{ shop_info : "1つのcategory_infoは、0以上のshop_infoを持つ"
```

# ローカル環境構築手順
1. このリポジトリをクローン
2. spicy_mapテーブルを構築
3. frontendディレクトリ直下に.envファイルを作成
4. backendディレクトリ直下に.envファイルを作成
5. プロジェクトルートで npm run build

## frontendディレクトリ直下の.envファイル
```
VITE_API_KEY=GoogleマップのAPIキーを取得してください
VITE_API_URL=http://localhost:8080
```

## GoogleマップAPIのキーについて
GoogleマップAPIのキーは、Google Cloud Platformで取得してください。
https://qiita.com/Haruka-Ogawa/items/997401a2edcd20e61037

## backendディレクトリ直下の.envファイル
```
DB_NAME=spicy_map
DB_USER=user
DB_PASSWORD=
NODE_ENV=development
PORT=8080
```