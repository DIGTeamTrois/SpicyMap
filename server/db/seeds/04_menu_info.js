/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("menu_info").del();
  await knex("menu_info").insert([
    { shop_id: 1, menu: "麻婆豆腐", spicy_judge: 5 },
    { shop_id: 1, menu: "坦々麺", spicy_judge: 4 },
    { shop_id: 1, menu: "エビチリ", spicy_judge: 3 },
    { shop_id: 2, menu: "辛麺（中辛）", spicy_judge: 4 },
    { shop_id: 2, menu: "辛麺（激辛）", spicy_judge: 5 },
    { shop_id: 2, menu: "トマト辛麺", spicy_judge: 3 },
    { shop_id: 3, menu: "蒙古タンメン", spicy_judge: 5 },
    { shop_id: 3, menu: "北極ラーメン", spicy_judge: 6 },
    { shop_id: 3, menu: "冷し味噌ラーメン", spicy_judge: 4 },
    { shop_id: 4, menu: "赤から鍋（3番）", spicy_judge: 3 },
    { shop_id: 4, menu: "赤から鍋（5番）", spicy_judge: 4 },
    { shop_id: 4, menu: "味噌煮込みうどん", spicy_judge: 2 },
    { shop_id: 5, menu: "台湾ラーメン", spicy_judge: 5 },
    { shop_id: 5, menu: "台湾混ぜそば", spicy_judge: 4 },
    { shop_id: 5, menu: "手羽先", spicy_judge: 2 },
    { shop_id: 6, menu: "陳麻婆豆腐", spicy_judge: 5 },
    { shop_id: 6, menu: "四川炒飯", spicy_judge: 3 },
    { shop_id: 6, menu: "海鮮ラーメン", spicy_judge: 4 },
    { shop_id: 7, menu: "四川火鍋（麻辣味）", spicy_judge: 5 },
    { shop_id: 7, menu: "四川火鍋（白湯味）", spicy_judge: 2 },
    { shop_id: 7, menu: "棒棒鶏", spicy_judge: 1 },
    { shop_id: 8, menu: "スープカレー（チキン）", spicy_judge: 4 },
    { shop_id: 8, menu: "スープカレー（シーフード）", spicy_judge: 3 },
    { shop_id: 8, menu: "スープカレー（ベジタブル）", spicy_judge: 2 },
    { shop_id: 9, menu: "麻婆豆腐", spicy_judge: 5 },
    { shop_id: 9, menu: "四川風焼きそば", spicy_judge: 3 },
    { shop_id: 9, menu: "エビチリ", spicy_judge: 3 },
    { shop_id: 10, menu: "ラーメン（醤油）", spicy_judge: 2 },
    { shop_id: 10, menu: "辛味噌ラーメン", spicy_judge: 4 },
    { shop_id: 10, menu: "冷し中華", spicy_judge: 1 },
    { shop_id: 11, menu: "チキンカレー", spicy_judge: 4 },
    { shop_id: 11, menu: "マトンカレー", spicy_judge: 5 },
    { shop_id: 11, menu: "ナン", spicy_judge: 1 },
    { shop_id: 12, menu: "火鍋（辛味噌）", spicy_judge: 5 },
    { shop_id: 12, menu: "火鍋（白湯）", spicy_judge: 2 },
    { shop_id: 12, menu: "蒸し餃子", spicy_judge: 1 },
    { shop_id: 13, menu: "トルコライス", spicy_judge: 2 },
    { shop_id: 13, menu: "シシカバブ", spicy_judge: 3 },
    { shop_id: 13, menu: "トルティーヤ", spicy_judge: 1 },
    { shop_id: 14, menu: "麻婆春雨", spicy_judge: 4 },
    { shop_id: 14, menu: "四川チャーハン", spicy_judge: 3 },
    { shop_id: 14, menu: "坦々麺", spicy_judge: 4 },
    { shop_id: 15, menu: "味噌ラーメン", spicy_judge: 3 },
    { shop_id: 15, menu: "醤油ラーメン", spicy_judge: 2 },
    { shop_id: 15, menu: "塩ラーメン", spicy_judge: 1 },
    { shop_id: 16, menu: "台湾ラーメン", spicy_judge: 5 },
    { shop_id: 16, menu: "チャーハン", spicy_judge: 2 },
    { shop_id: 16, menu: "唐揚げ", spicy_judge: 1 },
    { shop_id: 17, menu: "熊本ラーメン", spicy_judge: 3 },
    { shop_id: 17, menu: "高菜ラーメン", spicy_judge: 2 },
    { shop_id: 17, menu: "明太子ご飯", spicy_judge: 2 },
    { shop_id: 18, menu: "つけ麺（辛味）", spicy_judge: 5 },
    { shop_id: 18, menu: "つけ麺（普通）", spicy_judge: 3 },
    { shop_id: 18, menu: "つけ麺（冷し）", spicy_judge: 2 },
    { shop_id: 19, menu: "麻婆茄子", spicy_judge: 4 },
    { shop_id: 19, menu: "棒棒鶏", spicy_judge: 1 },
    { shop_id: 19, menu: "蒸し鶏サラダ", spicy_judge: 1 },
    { shop_id: 20, menu: "和歌山ラーメン", spicy_judge: 2 },
    { shop_id: 20, menu: "特製つけ麺", spicy_judge: 3 },
    { shop_id: 20, menu: "鶏塩ラーメン", spicy_judge: 2 },
  ]);
};
