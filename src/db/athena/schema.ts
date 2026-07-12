import { sql } from "drizzle-orm";
import {
  bigint,
  blob,
  boolean,
  date,
  datetime,
  char as dbchar,
  index,
  int,
  longtext,
  mediumint,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  smallint,
  text,
  tinyint,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

export const accRegNum = mysqlTable(
  "acc_reg_num",
  {
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    key: varchar({ length: 32 })
      .default("")
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: bigint({ mode: "number" }).default(0).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.accountId, table.key, table.index] }),
    index("account_id").on(table.accountId),
  ],
);

export const accRegStr = mysqlTable(
  "acc_reg_str",
  {
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    key: varchar({ length: 32 })
      .default("")
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: varchar({ length: 254 }).default("0").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.accountId, table.key, table.index] }),
    index("account_id").on(table.accountId),
  ],
);

export const achievement = mysqlTable(
  "achievement",
  {
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    id: bigint({ unsigned: true, mode: "number" }).notNull(),
    count1: int({ unsigned: true }).default(0).notNull(),
    count2: int({ unsigned: true }).default(0).notNull(),
    count3: int({ unsigned: true }).default(0).notNull(),
    count4: int({ unsigned: true }).default(0).notNull(),
    count5: int({ unsigned: true }).default(0).notNull(),
    count6: int({ unsigned: true }).default(0).notNull(),
    count7: int({ unsigned: true }).default(0).notNull(),
    count8: int({ unsigned: true }).default(0).notNull(),
    count9: int({ unsigned: true }).default(0).notNull(),
    count10: int({ unsigned: true }).default(0).notNull(),
    completed: datetime().default(new Date("NULLZ")),
    rewarded: datetime().default(new Date("NULLZ")),
  },
  (table) => [
    primaryKey({ columns: [table.charId, table.id] }),
    index("char_id").on(table.charId),
  ],
);

export const atcommandlog = mysqlTable(
  "atcommandlog",
  {
    atcommandId: mediumint("atcommand_id", { unsigned: true })
      .autoincrement()
      .primaryKey(),
    atcommandDate: datetime("atcommand_date").notNull(),
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    charName: varchar("char_name", { length: 25 }).default("").notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
    command: varchar({ length: 255 }).default("").notNull(),
  },
  (table) => [
    index("char_id").on(table.charId),
    index("account_id").on(table.accountId),
  ],
);

export const auction = mysqlTable("auction", {
  auctionId: bigint("auction_id", { unsigned: true, mode: "number" })
    .autoincrement()
    .primaryKey(),
  sellerId: int("seller_id", { unsigned: true }).default(0).notNull(),
  sellerName: varchar("seller_name", { length: 30 }).default("").notNull(),
  buyerId: int("buyer_id", { unsigned: true }).default(0).notNull(),
  buyerName: varchar("buyer_name", { length: 30 }).default("").notNull(),
  price: int({ unsigned: true }).default(0).notNull(),
  buynow: int({ unsigned: true }).default(0).notNull(),
  hours: smallint().default(0).notNull(),
  timestamp: int({ unsigned: true }).default(0).notNull(),
  nameid: int({ unsigned: true }).default(0).notNull(),
  itemName: varchar("item_name", { length: 50 }).default("").notNull(),
  type: smallint().default(0).notNull(),
  refine: tinyint({ unsigned: true }).default(0).notNull(),
  attribute: tinyint({ unsigned: true }).default(0).notNull(),
  card0: int({ unsigned: true }).default(0).notNull(),
  card1: int({ unsigned: true }).default(0).notNull(),
  card2: int({ unsigned: true }).default(0).notNull(),
  card3: int({ unsigned: true }).default(0).notNull(),
  optionId0: smallint("option_id0").default(0).notNull(),
  optionVal0: smallint("option_val0").default(0).notNull(),
  optionParm0: tinyint("option_parm0").default(0).notNull(),
  optionId1: smallint("option_id1").default(0).notNull(),
  optionVal1: smallint("option_val1").default(0).notNull(),
  optionParm1: tinyint("option_parm1").default(0).notNull(),
  optionId2: smallint("option_id2").default(0).notNull(),
  optionVal2: smallint("option_val2").default(0).notNull(),
  optionParm2: tinyint("option_parm2").default(0).notNull(),
  optionId3: smallint("option_id3").default(0).notNull(),
  optionVal3: smallint("option_val3").default(0).notNull(),
  optionParm3: tinyint("option_parm3").default(0).notNull(),
  optionId4: smallint("option_id4").default(0).notNull(),
  optionVal4: smallint("option_val4").default(0).notNull(),
  optionParm4: tinyint("option_parm4").default(0).notNull(),
  uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
    .default(0)
    .notNull(),
  enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
});

export const barter = mysqlTable(
  "barter",
  {
    name: varchar({ length: 50 }).default("").notNull(),
    index: smallint({ unsigned: true }).notNull(),
    amount: smallint({ unsigned: true }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.name, table.index] })],
);

export const bonusScript = mysqlTable(
  "bonus_script",
  {
    charId: int("char_id", { unsigned: true }).notNull(),
    script: text().notNull(),
    tick: bigint({ mode: "number" }).default(0).notNull(),
    flag: smallint({ unsigned: true }).default(0).notNull(),
    type: tinyint({ unsigned: true }).default(0).notNull(),
    icon: smallint().default(-1).notNull(),
  },
  (table) => [index("char_id").on(table.charId)],
);

export const branchlog = mysqlTable(
  "branchlog",
  {
    branchId: mediumint("branch_id", { unsigned: true })
      .autoincrement()
      .primaryKey(),
    branchDate: datetime("branch_date").notNull(),
    accountId: int("account_id").default(0).notNull(),
    charId: int("char_id").default(0).notNull(),
    charName: varchar("char_name", { length: 25 }).default("").notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
  },
  (table) => [
    index("char_id").on(table.charId),
    index("account_id").on(table.accountId),
  ],
);

export const buyingstores = mysqlTable("buyingstores", {
  id: int({ unsigned: true }).primaryKey(),
  accountId: int("account_id", { unsigned: true }).notNull(),
  charId: int("char_id", { unsigned: true }).notNull(),
  sex: mysqlEnum(["F", "M"]).default("M").notNull(),
  map: varchar({ length: 20 }).notNull(),
  x: smallint({ unsigned: true }).notNull(),
  y: smallint({ unsigned: true }).notNull(),
  title: varchar({ length: 80 }).notNull(),
  limit: int({ unsigned: true }).notNull(),
  bodyDirection: dbchar("body_direction", { length: 1 }).default("4").notNull(),
  headDirection: dbchar("head_direction", { length: 1 }).default("0").notNull(),
  sit: dbchar({ length: 1 }).default("1").notNull(),
  autotrade: tinyint().notNull(),
});

export const buyingstoreItems = mysqlTable(
  "buyingstore_items",
  {
    buyingstoreId: int("buyingstore_id", { unsigned: true }).notNull(),
    index: smallint({ unsigned: true }).notNull(),
    itemId: int("item_id", { unsigned: true }).notNull(),
    amount: smallint({ unsigned: true }).notNull(),
    price: int({ unsigned: true }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.buyingstoreId, table.index] })],
);

export const cartInventory = mysqlTable(
  "cart_inventory",
  {
    id: int().autoincrement().primaryKey(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: int().default(0).notNull(),
    equip: int({ unsigned: true }).default(0).notNull(),
    identify: smallint().default(0).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    attribute: tinyint().default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    expireTime: int("expire_time", { unsigned: true }).default(0).notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("char_id").on(table.charId)],
);

export const cashlog = mysqlTable(
  "cashlog",
  {
    id: int().autoincrement().primaryKey(),
    time: datetime().notNull(),
    charId: int("char_id").default(0).notNull(),
    type: mysqlEnum([
      "T",
      "V",
      "P",
      "M",
      "S",
      "N",
      "D",
      "C",
      "A",
      "E",
      "I",
      "B",
      "$",
    ])
      .default("S")
      .notNull(),
    cashType: mysqlEnum("cash_type", ["O", "K", "C"]).default("O").notNull(),
    amount: int().default(0).notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
  },
  (table) => [index("type").on(table.type)],
);

export const char = mysqlTable(
  "char",
  {
    charId: int("char_id", { unsigned: true }).autoincrement().primaryKey(),
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    charNum: boolean("char_num").default(false).notNull(),
    name: varchar({ length: 30 }).default("").notNull(),
    class: smallint({ unsigned: true }).default(0).notNull(),
    baseLevel: smallint("base_level", { unsigned: true }).default(1).notNull(),
    jobLevel: smallint("job_level", { unsigned: true }).default(1).notNull(),
    baseExp: bigint("base_exp", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    jobExp: bigint("job_exp", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    zeny: int({ unsigned: true }).default(0).notNull(),
    str: smallint({ unsigned: true }).default(0).notNull(),
    agi: smallint({ unsigned: true }).default(0).notNull(),
    vit: smallint({ unsigned: true }).default(0).notNull(),
    int: smallint({ unsigned: true }).default(0).notNull(),
    dex: smallint({ unsigned: true }).default(0).notNull(),
    luk: smallint({ unsigned: true }).default(0).notNull(),
    pow: smallint({ unsigned: true }).default(0).notNull(),
    sta: smallint({ unsigned: true }).default(0).notNull(),
    wis: smallint({ unsigned: true }).default(0).notNull(),
    spl: smallint({ unsigned: true }).default(0).notNull(),
    con: smallint({ unsigned: true }).default(0).notNull(),
    crt: smallint({ unsigned: true }).default(0).notNull(),
    maxHp: int("max_hp", { unsigned: true }).default(0).notNull(),
    hp: int({ unsigned: true }).default(0).notNull(),
    maxSp: int("max_sp", { unsigned: true }).default(0).notNull(),
    sp: int({ unsigned: true }).default(0).notNull(),
    maxAp: int("max_ap", { unsigned: true }).default(0).notNull(),
    ap: int({ unsigned: true }).default(0).notNull(),
    statusPoint: int("status_point", { unsigned: true }).default(0).notNull(),
    skillPoint: int("skill_point", { unsigned: true }).default(0).notNull(),
    traitPoint: int("trait_point", { unsigned: true }).default(0).notNull(),
    option: int().default(0).notNull(),
    karma: tinyint().default(0).notNull(),
    manner: smallint().default(0).notNull(),
    partyId: int("party_id", { unsigned: true }).default(0).notNull(),
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    petId: int("pet_id", { unsigned: true }).default(0).notNull(),
    homunId: int("homun_id", { unsigned: true }).default(0).notNull(),
    elementalId: int("elemental_id", { unsigned: true }).default(0).notNull(),
    hair: tinyint({ unsigned: true }).default(0).notNull(),
    hairColor: smallint("hair_color", { unsigned: true }).default(0).notNull(),
    clothesColor: smallint("clothes_color", { unsigned: true })
      .default(0)
      .notNull(),
    body: smallint({ unsigned: true }).default(0).notNull(),
    weapon: smallint({ unsigned: true }).default(0).notNull(),
    shield: smallint({ unsigned: true }).default(0).notNull(),
    headTop: smallint("head_top", { unsigned: true }).default(0).notNull(),
    headMid: smallint("head_mid", { unsigned: true }).default(0).notNull(),
    headBottom: smallint("head_bottom", { unsigned: true })
      .default(0)
      .notNull(),
    robe: smallint({ unsigned: true }).default(0).notNull(),
    lastMap: varchar("last_map", { length: 11 }).default("").notNull(),
    lastX: smallint("last_x", { unsigned: true }).default(53).notNull(),
    lastY: smallint("last_y", { unsigned: true }).default(111).notNull(),
    lastInstanceid: int("last_instanceid", { unsigned: true })
      .default(0)
      .notNull(),
    saveMap: varchar("save_map", { length: 11 }).default("").notNull(),
    saveX: smallint("save_x", { unsigned: true }).default(53).notNull(),
    saveY: smallint("save_y", { unsigned: true }).default(111).notNull(),
    partnerId: int("partner_id", { unsigned: true }).default(0).notNull(),
    online: tinyint().default(0).notNull(),
    father: int({ unsigned: true }).default(0).notNull(),
    mother: int({ unsigned: true }).default(0).notNull(),
    child: int({ unsigned: true }).default(0).notNull(),
    fame: int({ unsigned: true }).default(0).notNull(),
    rename: smallint({ unsigned: true }).default(0).notNull(),
    deleteDate: int("delete_date", { unsigned: true }).default(0).notNull(),
    moves: int({ unsigned: true }).default(0).notNull(),
    unbanTime: int("unban_time", { unsigned: true }).default(0).notNull(),
    font: tinyint({ unsigned: true }).default(0).notNull(),
    uniqueitemCounter: int("uniqueitem_counter", { unsigned: true })
      .default(0)
      .notNull(),
    sex: mysqlEnum(["M", "F"]).notNull(),
    hotkeyRowshift: tinyint("hotkey_rowshift", { unsigned: true })
      .default(0)
      .notNull(),
    hotkeyRowshift2: tinyint("hotkey_rowshift2", { unsigned: true })
      .default(0)
      .notNull(),
    clanId: int("clan_id", { unsigned: true }).default(0).notNull(),
    lastLogin: datetime("last_login").default(new Date("NULLZ")),
    titleId: int("title_id", { unsigned: true }).default(0).notNull(),
    showEquip: tinyint("show_equip", { unsigned: true }).default(0).notNull(),
    inventorySlots: smallint("inventory_slots").default(100).notNull(),
    bodyDirection: tinyint("body_direction", { unsigned: true })
      .default(0)
      .notNull(),
    disableCall: tinyint("disable_call", { unsigned: true })
      .default(0)
      .notNull(),
    disablePartyinvite: tinyint("disable_partyinvite", { unsigned: true })
      .default(0)
      .notNull(),
    disableShowcostumes: tinyint("disable_showcostumes", { unsigned: true })
      .default(0)
      .notNull(),
  },
  (table) => [
    index("account_id").on(table.accountId),
    index("guild_id").on(table.guildId),
    uniqueIndex("name_key").on(table.name),
    index("party_id").on(table.partyId),
    index("online").on(table.online),
  ],
);

export const charlog = mysqlTable(
  "charlog",
  {
    id: bigint({ unsigned: true, mode: "number" }).autoincrement().primaryKey(),
    time: datetime().notNull(),
    charMsg: varchar("char_msg", { length: 255 })
      .default("char select")
      .notNull(),
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    charNum: tinyint("char_num").default(0).notNull(),
    name: varchar({ length: 23 }).default("").notNull(),
    str: int({ unsigned: true }).default(0).notNull(),
    agi: int({ unsigned: true }).default(0).notNull(),
    vit: int({ unsigned: true }).default(0).notNull(),
    int: int({ unsigned: true }).default(0).notNull(),
    dex: int({ unsigned: true }).default(0).notNull(),
    luk: int({ unsigned: true }).default(0).notNull(),
    hair: tinyint().default(0).notNull(),
    hairColor: int("hair_color").default(0).notNull(),
  },
  (table) => [index("account_id").on(table.accountId)],
);

export const charConfigs = mysqlTable(
  "char_configs",
  {
    worldName: varchar("world_name", { length: 32 }).notNull(),
    accountId: int("account_id", { unsigned: true }).notNull(),
    charId: int("char_id", { unsigned: true }).notNull(),
    data: longtext().notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.worldName, table.accountId, table.charId] }),
  ],
);

export const charRegNum = mysqlTable(
  "char_reg_num",
  {
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    key: varchar({ length: 32 })
      .default("")
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: bigint({ mode: "number" }).default(0).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.charId, table.key, table.index] }),
    index("char_id").on(table.charId),
  ],
);

export const charRegStr = mysqlTable(
  "char_reg_str",
  {
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    key: varchar({ length: 32 })
      .default("")
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: varchar({ length: 254 }).default("0").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.charId, table.key, table.index] }),
    index("char_id").on(table.charId),
  ],
);

export const chatlog = mysqlTable(
  "chatlog",
  {
    id: bigint({ mode: "number" }).autoincrement().primaryKey(),
    time: datetime().notNull(),
    type: mysqlEnum(["O", "W", "P", "G", "M", "C"]).default("O").notNull(),
    typeId: int("type_id").default(0).notNull(),
    srcCharid: int("src_charid").default(0).notNull(),
    srcAccountid: int("src_accountid").default(0).notNull(),
    srcMap: varchar("src_map", { length: 11 }).default("").notNull(),
    srcMapX: smallint("src_map_x").default(0).notNull(),
    srcMapY: smallint("src_map_y").default(0).notNull(),
    dstCharname: varchar("dst_charname", { length: 25 }).default("").notNull(),
    message: varchar({ length: 150 }).default("").notNull(),
  },
  (table) => [
    index("src_accountid").on(table.srcAccountid),
    index("src_charid").on(table.srcCharid),
  ],
);

export const clan = mysqlTable("clan", {
  clanId: int("clan_id", { unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 24 }).default("").notNull(),
  master: varchar({ length: 24 }).default("").notNull(),
  mapname: varchar({ length: 24 }).default("").notNull(),
  maxMember: smallint("max_member", { unsigned: true }).default(0).notNull(),
});

export const clanAlliance = mysqlTable(
  "clan_alliance",
  {
    clanId: int("clan_id", { unsigned: true }).default(0).notNull(),
    opposition: int({ unsigned: true }).default(0).notNull(),
    allianceId: int("alliance_id", { unsigned: true }).default(0).notNull(),
    name: varchar({ length: 24 }).default("").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.clanId, table.allianceId] }),
    index("alliance_id").on(table.allianceId),
  ],
);

export const dbRoulette = mysqlTable("db_roulette", {
  index: int().default(0).primaryKey(),
  level: smallint({ unsigned: true }).notNull(),
  itemId: int("item_id", { unsigned: true }).notNull(),
  amount: smallint({ unsigned: true }).default(1).notNull(),
  flag: smallint({ unsigned: true }).default(1).notNull(),
});

export const elemental = mysqlTable("elemental", {
  eleId: int("ele_id", { unsigned: true }).autoincrement().primaryKey(),
  charId: int("char_id", { unsigned: true }).notNull(),
  class: mediumint({ unsigned: true }).default(0).notNull(),
  mode: int({ unsigned: true }).default(1).notNull(),
  hp: int({ unsigned: true }).default(0).notNull(),
  sp: int({ unsigned: true }).default(0).notNull(),
  maxHp: int("max_hp", { unsigned: true }).default(0).notNull(),
  maxSp: int("max_sp", { unsigned: true }).default(0).notNull(),
  atk1: mediumint({ unsigned: true }).default(0).notNull(),
  atk2: mediumint({ unsigned: true }).default(0).notNull(),
  matk: mediumint({ unsigned: true }).default(0).notNull(),
  aspd: smallint({ unsigned: true }).default(0).notNull(),
  def: smallint({ unsigned: true }).default(0).notNull(),
  mdef: smallint({ unsigned: true }).default(0).notNull(),
  flee: smallint({ unsigned: true }).default(0).notNull(),
  hit: smallint({ unsigned: true }).default(0).notNull(),
  lifeTime: bigint("life_time", { mode: "number" }).default(0).notNull(),
});

export const feedinglog = mysqlTable("feedinglog", {
  id: int().autoincrement().primaryKey(),
  time: datetime().notNull(),
  charId: int("char_id").notNull(),
  targetId: int("target_id").notNull(),
  targetClass: smallint("target_class").notNull(),
  type: mysqlEnum(["P", "H", "O"]).notNull(),
  intimacy: int({ unsigned: true }).notNull(),
  itemId: int("item_id", { unsigned: true }).notNull(),
  map: varchar({ length: 11 }).notNull(),
  x: smallint({ unsigned: true }).notNull(),
  y: smallint({ unsigned: true }).notNull(),
});

export const friends = mysqlTable(
  "friends",
  {
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    friendId: int("friend_id", { unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.charId, table.friendId] })],
);

export const globalAccRegNum = mysqlTable(
  "global_acc_reg_num",
  {
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    key: varchar({ length: 32 })
      .default("")
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: bigint({ mode: "number" }).default(0).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.accountId, table.key, table.index] }),
    index("account_id").on(table.accountId),
  ],
);

export const globalAccRegStr = mysqlTable(
  "global_acc_reg_str",
  {
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    key: varchar({ length: 32 })
      .default("")
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: varchar({ length: 254 }).default("0").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.accountId, table.key, table.index] }),
    index("account_id").on(table.accountId),
  ],
);

export const guild = mysqlTable(
  "guild",
  {
    guildId: int("guild_id", { unsigned: true }).autoincrement().notNull(),
    name: varchar({ length: 24 }).default("").notNull(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    master: varchar({ length: 24 }).default("").notNull(),
    guildLv: tinyint("guild_lv", { unsigned: true }).default(0).notNull(),
    connectMember: tinyint("connect_member", { unsigned: true })
      .default(0)
      .notNull(),
    maxMember: tinyint("max_member", { unsigned: true }).default(0).notNull(),
    averageLv: smallint("average_lv", { unsigned: true }).default(1).notNull(),
    exp: bigint({ unsigned: true, mode: "number" }).default(0).notNull(),
    nextExp: bigint("next_exp", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    skillPoint: tinyint("skill_point", { unsigned: true }).default(0).notNull(),
    mes1: varchar({ length: 60 }).default("").notNull(),
    mes2: varchar({ length: 120 }).default("").notNull(),
    emblemLen: int("emblem_len", { unsigned: true }).default(0).notNull(),
    emblemId: int("emblem_id", { unsigned: true }).default(0).notNull(),
    emblemData: blob("emblem_data", { mode: "string" }).default(sql`NULL`),
    lastMasterChange: datetime("last_master_change").default(new Date("NULLZ")),
  },
  (table) => [
    primaryKey({ columns: [table.guildId, table.charId] }),
    index("char_id").on(table.charId),
    uniqueIndex("guild_id").on(table.guildId),
  ],
);

export const guildAlliance = mysqlTable(
  "guild_alliance",
  {
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    opposition: int({ unsigned: true }).default(0).notNull(),
    allianceId: int("alliance_id", { unsigned: true }).default(0).notNull(),
    name: varchar({ length: 24 }).default("").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.guildId, table.allianceId] }),
    index("alliance_id").on(table.allianceId),
  ],
);

export const guildCastle = mysqlTable(
  "guild_castle",
  {
    castleId: int("castle_id", { unsigned: true }).default(0).primaryKey(),
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    economy: int({ unsigned: true }).default(0).notNull(),
    defense: int({ unsigned: true }).default(0).notNull(),
    triggerE: int({ unsigned: true }).default(0).notNull(),
    triggerD: int({ unsigned: true }).default(0).notNull(),
    nextTime: int({ unsigned: true }).default(0).notNull(),
    payTime: int({ unsigned: true }).default(0).notNull(),
    createTime: int({ unsigned: true }).default(0).notNull(),
    visibleC: int({ unsigned: true }).default(0).notNull(),
    visibleG0: int({ unsigned: true }).default(0).notNull(),
    visibleG1: int({ unsigned: true }).default(0).notNull(),
    visibleG2: int({ unsigned: true }).default(0).notNull(),
    visibleG3: int({ unsigned: true }).default(0).notNull(),
    visibleG4: int({ unsigned: true }).default(0).notNull(),
    visibleG5: int({ unsigned: true }).default(0).notNull(),
    visibleG6: int({ unsigned: true }).default(0).notNull(),
    visibleG7: int({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("guild_id").on(table.guildId)],
);

export const guildEmblems = mysqlTable(
  "guild_emblems",
  {
    worldName: varchar("world_name", { length: 32 }).notNull(),
    guildId: int("guild_id", { unsigned: true }).notNull(),
    fileType: varchar("file_type", { length: 255 }).notNull(),
    fileData: blob("file_data", { mode: "string" }).default(sql`NULL`),
    version: int({ unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.worldName, table.guildId] })],
);

export const guildExpulsion = mysqlTable(
  "guild_expulsion",
  {
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    name: varchar({ length: 24 }).default("").notNull(),
    mes: varchar({ length: 40 }).default("").notNull(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.guildId, table.name] })],
);

export const guildMember = mysqlTable(
  "guild_member",
  {
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    exp: bigint({ unsigned: true, mode: "number" }).default(0).notNull(),
    position: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.guildId, table.charId] }),
    index("char_id").on(table.charId),
  ],
);

export const guildPosition = mysqlTable(
  "guild_position",
  {
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    position: tinyint({ unsigned: true }).default(0).notNull(),
    name: varchar({ length: 24 }).default("").notNull(),
    mode: smallint({ unsigned: true }).default(0).notNull(),
    expMode: tinyint("exp_mode", { unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.guildId, table.position] })],
);

export const guildSkill = mysqlTable(
  "guild_skill",
  {
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    id: smallint({ unsigned: true }).default(0).notNull(),
    lv: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.guildId, table.id] })],
);

export const guildStorage = mysqlTable(
  "guild_storage",
  {
    id: int({ unsigned: true }).autoincrement().primaryKey(),
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: int({ unsigned: true }).default(0).notNull(),
    equip: int({ unsigned: true }).default(0).notNull(),
    identify: smallint({ unsigned: true }).default(0).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    attribute: tinyint({ unsigned: true }).default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    expireTime: int("expire_time", { unsigned: true }).default(0).notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("guild_id").on(table.guildId)],
);

export const guildStorageLog = mysqlTable(
  "guild_storage_log",
  {
    id: int().autoincrement().primaryKey(),
    guildId: int("guild_id", { unsigned: true }).default(0).notNull(),
    time: datetime().notNull(),
    charId: int("char_id").default(0).notNull(),
    name: varchar({ length: 24 }).default("").notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: int().default(1).notNull(),
    identify: smallint().default(0).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    attribute: tinyint({ unsigned: true }).default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    expireTime: int("expire_time", { unsigned: true }).default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("guild_id").on(table.guildId)],
);

export const homunculus = mysqlTable("homunculus", {
  homunId: int("homun_id").autoincrement().primaryKey(),
  charId: int("char_id", { unsigned: true }).notNull(),
  class: mediumint({ unsigned: true }).default(0).notNull(),
  prevClass: mediumint("prev_class").default(0).notNull(),
  name: varchar({ length: 24 }).default("").notNull(),
  level: smallint().default(0).notNull(),
  exp: bigint({ unsigned: true, mode: "number" }).default(0).notNull(),
  intimacy: int().default(0).notNull(),
  hunger: smallint().default(0).notNull(),
  str: smallint({ unsigned: true }).default(0).notNull(),
  agi: smallint({ unsigned: true }).default(0).notNull(),
  vit: smallint({ unsigned: true }).default(0).notNull(),
  int: smallint({ unsigned: true }).default(0).notNull(),
  dex: smallint({ unsigned: true }).default(0).notNull(),
  luk: smallint({ unsigned: true }).default(0).notNull(),
  hp: int({ unsigned: true }).default(0).notNull(),
  maxHp: int("max_hp", { unsigned: true }).default(0).notNull(),
  sp: int({ unsigned: true }).default(0).notNull(),
  maxSp: int("max_sp", { unsigned: true }).default(0).notNull(),
  skillPoint: smallint("skill_point", { unsigned: true }).default(0).notNull(),
  alive: tinyint().default(1).notNull(),
  renameFlag: tinyint("rename_flag").default(0).notNull(),
  vaporize: tinyint().default(0).notNull(),
  autofeed: tinyint().default(0).notNull(),
});

export const hotkey = mysqlTable(
  "hotkey",
  {
    charId: int("char_id", { unsigned: true }).notNull(),
    hotkey: tinyint({ unsigned: true }).notNull(),
    type: tinyint({ unsigned: true }).default(0).notNull(),
    itemskillId: int("itemskill_id", { unsigned: true }).default(0).notNull(),
    skillLvl: tinyint("skill_lvl", { unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.charId, table.hotkey] })],
);

export const interlog = mysqlTable(
  "interlog",
  {
    id: int().autoincrement().primaryKey(),
    time: datetime().notNull(),
    log: varchar({ length: 255 }).default("").notNull(),
  },
  (table) => [index("time").on(table.time)],
);

export const inventory = mysqlTable(
  "inventory",
  {
    id: int({ unsigned: true }).autoincrement().primaryKey(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: int({ unsigned: true }).default(0).notNull(),
    equip: int({ unsigned: true }).default(0).notNull(),
    identify: smallint().default(0).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    attribute: tinyint({ unsigned: true }).default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    expireTime: int("expire_time", { unsigned: true }).default(0).notNull(),
    favorite: tinyint({ unsigned: true }).default(0).notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    equipSwitch: int("equip_switch", { unsigned: true }).default(0).notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("char_id").on(table.charId)],
);

export const ipbanlist = mysqlTable(
  "ipbanlist",
  {
    list: varchar({ length: 15 }).default("").notNull(),
    btime: datetime().notNull(),
    rtime: datetime().notNull(),
    reason: varchar({ length: 255 }).default("").notNull(),
  },
  (table) => [primaryKey({ columns: [table.list, table.btime] })],
);

export const itemDb = mysqlTable(
  "item_db",
  {
    id: int({ unsigned: true }).default(0).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 50 }).default("").notNull(),
    nameEnglish: varchar("name_english", { length: 100 }).default("").notNull(),
    type: varchar({ length: 20 }).default("NULL"),
    subtype: varchar({ length: 20 }).default("NULL"),
    priceBuy: mediumint("price_buy", { unsigned: true }).default(sql`NULL`),
    priceSell: mediumint("price_sell", { unsigned: true }).default(sql`NULL`),
    weight: smallint({ unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    range: tinyint({ unsigned: true }).default(sql`NULL`),
    slots: tinyint({ unsigned: true }).default(sql`NULL`),
    jobAll: tinyint("job_all", { unsigned: true }).default(sql`NULL`),
    jobAcolyte: tinyint("job_acolyte", { unsigned: true }).default(sql`NULL`),
    jobAlchemist: tinyint("job_alchemist", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobArcher: tinyint("job_archer", { unsigned: true }).default(sql`NULL`),
    jobAssassin: tinyint("job_assassin", { unsigned: true }).default(sql`NULL`),
    jobBarddancer: tinyint("job_barddancer", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobBlacksmith: tinyint("job_blacksmith", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobCrusader: tinyint("job_crusader", { unsigned: true }).default(sql`NULL`),
    jobGunslinger: tinyint("job_gunslinger", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobHunter: tinyint("job_hunter", { unsigned: true }).default(sql`NULL`),
    jobKnight: tinyint("job_knight", { unsigned: true }).default(sql`NULL`),
    jobMage: tinyint("job_mage", { unsigned: true }).default(sql`NULL`),
    jobMerchant: tinyint("job_merchant", { unsigned: true }).default(sql`NULL`),
    jobMonk: tinyint("job_monk", { unsigned: true }).default(sql`NULL`),
    jobNinja: tinyint("job_ninja", { unsigned: true }).default(sql`NULL`),
    jobNovice: tinyint("job_novice", { unsigned: true }).default(sql`NULL`),
    jobPriest: tinyint("job_priest", { unsigned: true }).default(sql`NULL`),
    jobRogue: tinyint("job_rogue", { unsigned: true }).default(sql`NULL`),
    jobSage: tinyint("job_sage", { unsigned: true }).default(sql`NULL`),
    jobSoullinker: tinyint("job_soullinker", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobStargladiator: tinyint("job_stargladiator", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSupernovice: tinyint("job_supernovice", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSwordman: tinyint("job_swordman", { unsigned: true }).default(sql`NULL`),
    jobTaekwon: tinyint("job_taekwon", { unsigned: true }).default(sql`NULL`),
    jobThief: tinyint("job_thief", { unsigned: true }).default(sql`NULL`),
    jobWizard: tinyint("job_wizard", { unsigned: true }).default(sql`NULL`),
    classAll: tinyint("class_all", { unsigned: true }).default(sql`NULL`),
    classNormal: tinyint("class_normal", { unsigned: true }).default(sql`NULL`),
    classUpper: tinyint("class_upper", { unsigned: true }).default(sql`NULL`),
    classBaby: tinyint("class_baby", { unsigned: true }).default(sql`NULL`),
    gender: varchar({ length: 10 }).default("NULL"),
    locationHeadTop: tinyint("location_head_top", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadMid: tinyint("location_head_mid", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadLow: tinyint("location_head_low", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationArmor: tinyint("location_armor", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightHand: tinyint("location_right_hand", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftHand: tinyint("location_left_hand", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationGarment: tinyint("location_garment", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShoes: tinyint("location_shoes", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightAccessory: tinyint("location_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftAccessory: tinyint("location_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadTop: tinyint("location_costume_head_top", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadMid: tinyint("location_costume_head_mid", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadLow: tinyint("location_costume_head_low", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeGarment: tinyint("location_costume_garment", {
      unsigned: true,
    }).default(sql`NULL`),
    locationAmmo: tinyint("location_ammo", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShadowArmor: tinyint("location_shadow_armor", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowWeapon: tinyint("location_shadow_weapon", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShield: tinyint("location_shadow_shield", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShoes: tinyint("location_shadow_shoes", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowRightAccessory: tinyint("location_shadow_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowLeftAccessory: tinyint("location_shadow_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    weaponLevel: tinyint("weapon_level", { unsigned: true }).default(sql`NULL`),
    armorLevel: tinyint("armor_level", { unsigned: true }).default(sql`NULL`),
    equipLevelMin: smallint("equip_level_min", { unsigned: true }).default(
      sql`NULL`,
    ),
    equipLevelMax: smallint("equip_level_max", { unsigned: true }).default(
      sql`NULL`,
    ),
    refineable: tinyint({ unsigned: true }).default(sql`NULL`),
    view: smallint({ unsigned: true }).default(sql`NULL`),
    aliasName: varchar("alias_name", { length: 50 }).default("NULL"),
    flagBuyingstore: tinyint("flag_buyingstore", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDeadbranch: tinyint("flag_deadbranch", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagContainer: tinyint("flag_container", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagUniqueid: tinyint("flag_uniqueid", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagBindonequip: tinyint("flag_bindonequip", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropannounce: tinyint("flag_dropannounce", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagNoconsume: tinyint("flag_noconsume", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropeffect: varchar("flag_dropeffect", { length: 20 }).default("NULL"),
    delayDuration: bigint("delay_duration", {
      unsigned: true,
      mode: "number",
    }).default(sql`NULL`),
    delayStatus: varchar("delay_status", { length: 30 }).default("NULL"),
    stackAmount: smallint("stack_amount", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackInventory: tinyint("stack_inventory", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackCart: tinyint("stack_cart", { unsigned: true }).default(sql`NULL`),
    stackStorage: tinyint("stack_storage", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackGuildstorage: tinyint("stack_guildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    nouseOverride: smallint("nouse_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    nouseSitting: tinyint("nouse_sitting", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeOverride: smallint("trade_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNodrop: tinyint("trade_nodrop", { unsigned: true }).default(sql`NULL`),
    tradeNotrade: tinyint("trade_notrade", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeTradepartner: tinyint("trade_tradepartner", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNosell: tinyint("trade_nosell", { unsigned: true }).default(sql`NULL`),
    tradeNocart: tinyint("trade_nocart", { unsigned: true }).default(sql`NULL`),
    tradeNostorage: tinyint("trade_nostorage", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNoguildstorage: tinyint("trade_noguildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNomail: tinyint("trade_nomail", { unsigned: true }).default(sql`NULL`),
    tradeNoauction: tinyint("trade_noauction", { unsigned: true }).default(
      sql`NULL`,
    ),
    script: text().default(sql`NULL`),
    equipScript: text("equip_script").default(sql`NULL`),
    unequipScript: text("unequip_script").default(sql`NULL`),
  },
  (table) => [uniqueIndex("UniqueAegisName").on(table.nameAegis)],
);

export const itemDb2 = mysqlTable(
  "item_db2",
  {
    id: int({ unsigned: true }).default(0).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 50 }).default("NULL"),
    nameEnglish: varchar("name_english", { length: 100 }).default("NULL"),
    type: varchar({ length: 20 }).default("NULL"),
    subtype: varchar({ length: 20 }).default("NULL"),
    priceBuy: mediumint("price_buy", { unsigned: true }).default(sql`NULL`),
    priceSell: mediumint("price_sell", { unsigned: true }).default(sql`NULL`),
    weight: smallint({ unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    range: tinyint({ unsigned: true }).default(sql`NULL`),
    slots: tinyint({ unsigned: true }).default(sql`NULL`),
    jobAll: tinyint("job_all", { unsigned: true }).default(sql`NULL`),
    jobAcolyte: tinyint("job_acolyte", { unsigned: true }).default(sql`NULL`),
    jobAlchemist: tinyint("job_alchemist", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobArcher: tinyint("job_archer", { unsigned: true }).default(sql`NULL`),
    jobAssassin: tinyint("job_assassin", { unsigned: true }).default(sql`NULL`),
    jobBarddancer: tinyint("job_barddancer", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobBlacksmith: tinyint("job_blacksmith", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobCrusader: tinyint("job_crusader", { unsigned: true }).default(sql`NULL`),
    jobGunslinger: tinyint("job_gunslinger", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobHunter: tinyint("job_hunter", { unsigned: true }).default(sql`NULL`),
    jobKnight: tinyint("job_knight", { unsigned: true }).default(sql`NULL`),
    jobMage: tinyint("job_mage", { unsigned: true }).default(sql`NULL`),
    jobMerchant: tinyint("job_merchant", { unsigned: true }).default(sql`NULL`),
    jobMonk: tinyint("job_monk", { unsigned: true }).default(sql`NULL`),
    jobNinja: tinyint("job_ninja", { unsigned: true }).default(sql`NULL`),
    jobNovice: tinyint("job_novice", { unsigned: true }).default(sql`NULL`),
    jobPriest: tinyint("job_priest", { unsigned: true }).default(sql`NULL`),
    jobRogue: tinyint("job_rogue", { unsigned: true }).default(sql`NULL`),
    jobSage: tinyint("job_sage", { unsigned: true }).default(sql`NULL`),
    jobSoullinker: tinyint("job_soullinker", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobStargladiator: tinyint("job_stargladiator", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSupernovice: tinyint("job_supernovice", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSwordman: tinyint("job_swordman", { unsigned: true }).default(sql`NULL`),
    jobTaekwon: tinyint("job_taekwon", { unsigned: true }).default(sql`NULL`),
    jobThief: tinyint("job_thief", { unsigned: true }).default(sql`NULL`),
    jobWizard: tinyint("job_wizard", { unsigned: true }).default(sql`NULL`),
    classAll: tinyint("class_all", { unsigned: true }).default(sql`NULL`),
    classNormal: tinyint("class_normal", { unsigned: true }).default(sql`NULL`),
    classUpper: tinyint("class_upper", { unsigned: true }).default(sql`NULL`),
    classBaby: tinyint("class_baby", { unsigned: true }).default(sql`NULL`),
    gender: varchar({ length: 10 }).default("NULL"),
    locationHeadTop: tinyint("location_head_top", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadMid: tinyint("location_head_mid", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadLow: tinyint("location_head_low", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationArmor: tinyint("location_armor", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightHand: tinyint("location_right_hand", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftHand: tinyint("location_left_hand", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationGarment: tinyint("location_garment", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShoes: tinyint("location_shoes", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightAccessory: tinyint("location_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftAccessory: tinyint("location_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadTop: tinyint("location_costume_head_top", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadMid: tinyint("location_costume_head_mid", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadLow: tinyint("location_costume_head_low", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeGarment: tinyint("location_costume_garment", {
      unsigned: true,
    }).default(sql`NULL`),
    locationAmmo: tinyint("location_ammo", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShadowArmor: tinyint("location_shadow_armor", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowWeapon: tinyint("location_shadow_weapon", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShield: tinyint("location_shadow_shield", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShoes: tinyint("location_shadow_shoes", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowRightAccessory: tinyint("location_shadow_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowLeftAccessory: tinyint("location_shadow_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    weaponLevel: tinyint("weapon_level", { unsigned: true }).default(sql`NULL`),
    armorLevel: tinyint("armor_level", { unsigned: true }).default(sql`NULL`),
    equipLevelMin: smallint("equip_level_min", { unsigned: true }).default(
      sql`NULL`,
    ),
    equipLevelMax: smallint("equip_level_max", { unsigned: true }).default(
      sql`NULL`,
    ),
    refineable: tinyint({ unsigned: true }).default(sql`NULL`),
    view: smallint({ unsigned: true }).default(sql`NULL`),
    aliasName: varchar("alias_name", { length: 50 }).default("NULL"),
    flagBuyingstore: tinyint("flag_buyingstore", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDeadbranch: tinyint("flag_deadbranch", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagContainer: tinyint("flag_container", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagUniqueid: tinyint("flag_uniqueid", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagBindonequip: tinyint("flag_bindonequip", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropannounce: tinyint("flag_dropannounce", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagNoconsume: tinyint("flag_noconsume", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropeffect: varchar("flag_dropeffect", { length: 20 }).default("NULL"),
    delayDuration: bigint("delay_duration", {
      unsigned: true,
      mode: "number",
    }).default(sql`NULL`),
    delayStatus: varchar("delay_status", { length: 30 }).default("NULL"),
    stackAmount: smallint("stack_amount", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackInventory: tinyint("stack_inventory", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackCart: tinyint("stack_cart", { unsigned: true }).default(sql`NULL`),
    stackStorage: tinyint("stack_storage", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackGuildstorage: tinyint("stack_guildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    nouseOverride: smallint("nouse_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    nouseSitting: tinyint("nouse_sitting", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeOverride: smallint("trade_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNodrop: tinyint("trade_nodrop", { unsigned: true }).default(sql`NULL`),
    tradeNotrade: tinyint("trade_notrade", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeTradepartner: tinyint("trade_tradepartner", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNosell: tinyint("trade_nosell", { unsigned: true }).default(sql`NULL`),
    tradeNocart: tinyint("trade_nocart", { unsigned: true }).default(sql`NULL`),
    tradeNostorage: tinyint("trade_nostorage", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNoguildstorage: tinyint("trade_noguildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNomail: tinyint("trade_nomail", { unsigned: true }).default(sql`NULL`),
    tradeNoauction: tinyint("trade_noauction", { unsigned: true }).default(
      sql`NULL`,
    ),
    script: text().default(sql`NULL`),
    equipScript: text("equip_script").default(sql`NULL`),
    unequipScript: text("unequip_script").default(sql`NULL`),
  },
  (table) => [uniqueIndex("UniqueAegisName").on(table.nameAegis)],
);

export const itemDb2Re = mysqlTable(
  "item_db2_re",
  {
    id: int({ unsigned: true }).default(0).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 50 }).default("NULL"),
    nameEnglish: varchar("name_english", { length: 100 }).default("NULL"),
    type: varchar({ length: 20 }).default("NULL"),
    subtype: varchar({ length: 20 }).default("NULL"),
    priceBuy: mediumint("price_buy", { unsigned: true }).default(sql`NULL`),
    priceSell: mediumint("price_sell", { unsigned: true }).default(sql`NULL`),
    weight: smallint({ unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    magicAttack: smallint("magic_attack", { unsigned: true }).default(
      sql`NULL`,
    ),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    range: tinyint({ unsigned: true }).default(sql`NULL`),
    slots: tinyint({ unsigned: true }).default(sql`NULL`),
    jobAll: tinyint("job_all", { unsigned: true }).default(sql`NULL`),
    jobAcolyte: tinyint("job_acolyte", { unsigned: true }).default(sql`NULL`),
    jobAlchemist: tinyint("job_alchemist", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobArcher: tinyint("job_archer", { unsigned: true }).default(sql`NULL`),
    jobAssassin: tinyint("job_assassin", { unsigned: true }).default(sql`NULL`),
    jobBarddancer: tinyint("job_barddancer", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobBlacksmith: tinyint("job_blacksmith", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobCrusader: tinyint("job_crusader", { unsigned: true }).default(sql`NULL`),
    jobGunslinger: tinyint("job_gunslinger", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobHunter: tinyint("job_hunter", { unsigned: true }).default(sql`NULL`),
    jobKagerouoboro: tinyint("job_kagerouoboro", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobKnight: tinyint("job_knight", { unsigned: true }).default(sql`NULL`),
    jobMage: tinyint("job_mage", { unsigned: true }).default(sql`NULL`),
    jobMerchant: tinyint("job_merchant", { unsigned: true }).default(sql`NULL`),
    jobMonk: tinyint("job_monk", { unsigned: true }).default(sql`NULL`),
    jobNinja: tinyint("job_ninja", { unsigned: true }).default(sql`NULL`),
    jobNovice: tinyint("job_novice", { unsigned: true }).default(sql`NULL`),
    jobPriest: tinyint("job_priest", { unsigned: true }).default(sql`NULL`),
    jobRebellion: tinyint("job_rebellion", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobRogue: tinyint("job_rogue", { unsigned: true }).default(sql`NULL`),
    jobSage: tinyint("job_sage", { unsigned: true }).default(sql`NULL`),
    jobSoullinker: tinyint("job_soullinker", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSpiritHandler: tinyint("job_spirit_handler", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobStargladiator: tinyint("job_stargladiator", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSummoner: tinyint("job_summoner", { unsigned: true }).default(sql`NULL`),
    jobSupernovice: tinyint("job_supernovice", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSwordman: tinyint("job_swordman", { unsigned: true }).default(sql`NULL`),
    jobTaekwon: tinyint("job_taekwon", { unsigned: true }).default(sql`NULL`),
    jobThief: tinyint("job_thief", { unsigned: true }).default(sql`NULL`),
    jobWizard: tinyint("job_wizard", { unsigned: true }).default(sql`NULL`),
    classAll: tinyint("class_all", { unsigned: true }).default(sql`NULL`),
    classNormal: tinyint("class_normal", { unsigned: true }).default(sql`NULL`),
    classUpper: tinyint("class_upper", { unsigned: true }).default(sql`NULL`),
    classBaby: tinyint("class_baby", { unsigned: true }).default(sql`NULL`),
    classThird: tinyint("class_third", { unsigned: true }).default(sql`NULL`),
    classThirdUpper: tinyint("class_third_upper", { unsigned: true }).default(
      sql`NULL`,
    ),
    classThirdBaby: tinyint("class_third_baby", { unsigned: true }).default(
      sql`NULL`,
    ),
    classFourth: tinyint("class_fourth", { unsigned: true }).default(sql`NULL`),
    gender: varchar({ length: 10 }).default("NULL"),
    locationHeadTop: tinyint("location_head_top", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadMid: tinyint("location_head_mid", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadLow: tinyint("location_head_low", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationArmor: tinyint("location_armor", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightHand: tinyint("location_right_hand", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftHand: tinyint("location_left_hand", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationGarment: tinyint("location_garment", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShoes: tinyint("location_shoes", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightAccessory: tinyint("location_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftAccessory: tinyint("location_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadTop: tinyint("location_costume_head_top", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadMid: tinyint("location_costume_head_mid", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadLow: tinyint("location_costume_head_low", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeGarment: tinyint("location_costume_garment", {
      unsigned: true,
    }).default(sql`NULL`),
    locationAmmo: tinyint("location_ammo", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShadowArmor: tinyint("location_shadow_armor", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowWeapon: tinyint("location_shadow_weapon", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShield: tinyint("location_shadow_shield", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShoes: tinyint("location_shadow_shoes", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowRightAccessory: tinyint("location_shadow_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowLeftAccessory: tinyint("location_shadow_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    weaponLevel: tinyint("weapon_level", { unsigned: true }).default(sql`NULL`),
    armorLevel: tinyint("armor_level", { unsigned: true }).default(sql`NULL`),
    equipLevelMin: smallint("equip_level_min", { unsigned: true }).default(
      sql`NULL`,
    ),
    equipLevelMax: smallint("equip_level_max", { unsigned: true }).default(
      sql`NULL`,
    ),
    refineable: tinyint({ unsigned: true }).default(sql`NULL`),
    gradable: tinyint({ unsigned: true }).default(sql`NULL`),
    view: smallint({ unsigned: true }).default(sql`NULL`),
    aliasName: varchar("alias_name", { length: 50 }).default("NULL"),
    flagBuyingstore: tinyint("flag_buyingstore", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDeadbranch: tinyint("flag_deadbranch", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagContainer: tinyint("flag_container", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagUniqueid: tinyint("flag_uniqueid", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagBindonequip: tinyint("flag_bindonequip", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropannounce: tinyint("flag_dropannounce", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagNoconsume: tinyint("flag_noconsume", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropeffect: varchar("flag_dropeffect", { length: 20 }).default("NULL"),
    delayDuration: bigint("delay_duration", {
      unsigned: true,
      mode: "number",
    }).default(sql`NULL`),
    delayStatus: varchar("delay_status", { length: 30 }).default("NULL"),
    stackAmount: smallint("stack_amount", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackInventory: tinyint("stack_inventory", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackCart: tinyint("stack_cart", { unsigned: true }).default(sql`NULL`),
    stackStorage: tinyint("stack_storage", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackGuildstorage: tinyint("stack_guildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    nouseOverride: smallint("nouse_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    nouseSitting: tinyint("nouse_sitting", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeOverride: smallint("trade_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNodrop: tinyint("trade_nodrop", { unsigned: true }).default(sql`NULL`),
    tradeNotrade: tinyint("trade_notrade", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeTradepartner: tinyint("trade_tradepartner", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNosell: tinyint("trade_nosell", { unsigned: true }).default(sql`NULL`),
    tradeNocart: tinyint("trade_nocart", { unsigned: true }).default(sql`NULL`),
    tradeNostorage: tinyint("trade_nostorage", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNoguildstorage: tinyint("trade_noguildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNomail: tinyint("trade_nomail", { unsigned: true }).default(sql`NULL`),
    tradeNoauction: tinyint("trade_noauction", { unsigned: true }).default(
      sql`NULL`,
    ),
    script: text().default(sql`NULL`),
    equipScript: text("equip_script").default(sql`NULL`),
    unequipScript: text("unequip_script").default(sql`NULL`),
  },
  (table) => [uniqueIndex("UniqueAegisName").on(table.nameAegis)],
);

export const itemDbRe = mysqlTable(
  "item_db_re",
  {
    id: int({ unsigned: true }).default(0).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 50 }).default("").notNull(),
    nameEnglish: varchar("name_english", { length: 100 }).default("").notNull(),
    type: varchar({ length: 20 }).default("NULL"),
    subtype: varchar({ length: 20 }).default("NULL"),
    priceBuy: mediumint("price_buy", { unsigned: true }).default(sql`NULL`),
    priceSell: mediumint("price_sell", { unsigned: true }).default(sql`NULL`),
    weight: smallint({ unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    magicAttack: smallint("magic_attack", { unsigned: true }).default(
      sql`NULL`,
    ),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    range: tinyint({ unsigned: true }).default(sql`NULL`),
    slots: tinyint({ unsigned: true }).default(sql`NULL`),
    jobAll: tinyint("job_all", { unsigned: true }).default(sql`NULL`),
    jobAcolyte: tinyint("job_acolyte", { unsigned: true }).default(sql`NULL`),
    jobAlchemist: tinyint("job_alchemist", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobArcher: tinyint("job_archer", { unsigned: true }).default(sql`NULL`),
    jobAssassin: tinyint("job_assassin", { unsigned: true }).default(sql`NULL`),
    jobBarddancer: tinyint("job_barddancer", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobBlacksmith: tinyint("job_blacksmith", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobCrusader: tinyint("job_crusader", { unsigned: true }).default(sql`NULL`),
    jobGunslinger: tinyint("job_gunslinger", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobHunter: tinyint("job_hunter", { unsigned: true }).default(sql`NULL`),
    jobKagerouoboro: tinyint("job_kagerouoboro", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobKnight: tinyint("job_knight", { unsigned: true }).default(sql`NULL`),
    jobMage: tinyint("job_mage", { unsigned: true }).default(sql`NULL`),
    jobMerchant: tinyint("job_merchant", { unsigned: true }).default(sql`NULL`),
    jobMonk: tinyint("job_monk", { unsigned: true }).default(sql`NULL`),
    jobNinja: tinyint("job_ninja", { unsigned: true }).default(sql`NULL`),
    jobNovice: tinyint("job_novice", { unsigned: true }).default(sql`NULL`),
    jobPriest: tinyint("job_priest", { unsigned: true }).default(sql`NULL`),
    jobRebellion: tinyint("job_rebellion", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobRogue: tinyint("job_rogue", { unsigned: true }).default(sql`NULL`),
    jobSage: tinyint("job_sage", { unsigned: true }).default(sql`NULL`),
    jobSoullinker: tinyint("job_soullinker", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSpiritHandler: tinyint("job_spirit_handler", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobStargladiator: tinyint("job_stargladiator", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSummoner: tinyint("job_summoner", { unsigned: true }).default(sql`NULL`),
    jobSupernovice: tinyint("job_supernovice", { unsigned: true }).default(
      sql`NULL`,
    ),
    jobSwordman: tinyint("job_swordman", { unsigned: true }).default(sql`NULL`),
    jobTaekwon: tinyint("job_taekwon", { unsigned: true }).default(sql`NULL`),
    jobThief: tinyint("job_thief", { unsigned: true }).default(sql`NULL`),
    jobWizard: tinyint("job_wizard", { unsigned: true }).default(sql`NULL`),
    classAll: tinyint("class_all", { unsigned: true }).default(sql`NULL`),
    classNormal: tinyint("class_normal", { unsigned: true }).default(sql`NULL`),
    classUpper: tinyint("class_upper", { unsigned: true }).default(sql`NULL`),
    classBaby: tinyint("class_baby", { unsigned: true }).default(sql`NULL`),
    classThird: tinyint("class_third", { unsigned: true }).default(sql`NULL`),
    classThirdUpper: tinyint("class_third_upper", { unsigned: true }).default(
      sql`NULL`,
    ),
    classThirdBaby: tinyint("class_third_baby", { unsigned: true }).default(
      sql`NULL`,
    ),
    classFourth: tinyint("class_fourth", { unsigned: true }).default(sql`NULL`),
    gender: varchar({ length: 10 }).default("NULL"),
    locationHeadTop: tinyint("location_head_top", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadMid: tinyint("location_head_mid", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationHeadLow: tinyint("location_head_low", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationArmor: tinyint("location_armor", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightHand: tinyint("location_right_hand", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftHand: tinyint("location_left_hand", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationGarment: tinyint("location_garment", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShoes: tinyint("location_shoes", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationRightAccessory: tinyint("location_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationLeftAccessory: tinyint("location_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadTop: tinyint("location_costume_head_top", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadMid: tinyint("location_costume_head_mid", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeHeadLow: tinyint("location_costume_head_low", {
      unsigned: true,
    }).default(sql`NULL`),
    locationCostumeGarment: tinyint("location_costume_garment", {
      unsigned: true,
    }).default(sql`NULL`),
    locationAmmo: tinyint("location_ammo", { unsigned: true }).default(
      sql`NULL`,
    ),
    locationShadowArmor: tinyint("location_shadow_armor", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowWeapon: tinyint("location_shadow_weapon", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShield: tinyint("location_shadow_shield", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowShoes: tinyint("location_shadow_shoes", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowRightAccessory: tinyint("location_shadow_right_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    locationShadowLeftAccessory: tinyint("location_shadow_left_accessory", {
      unsigned: true,
    }).default(sql`NULL`),
    weaponLevel: tinyint("weapon_level", { unsigned: true }).default(sql`NULL`),
    armorLevel: tinyint("armor_level", { unsigned: true }).default(sql`NULL`),
    equipLevelMin: smallint("equip_level_min", { unsigned: true }).default(
      sql`NULL`,
    ),
    equipLevelMax: smallint("equip_level_max", { unsigned: true }).default(
      sql`NULL`,
    ),
    refineable: tinyint({ unsigned: true }).default(sql`NULL`),
    gradable: tinyint({ unsigned: true }).default(sql`NULL`),
    view: smallint({ unsigned: true }).default(sql`NULL`),
    aliasName: varchar("alias_name", { length: 50 }).default("NULL"),
    flagBuyingstore: tinyint("flag_buyingstore", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDeadbranch: tinyint("flag_deadbranch", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagContainer: tinyint("flag_container", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagUniqueid: tinyint("flag_uniqueid", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagBindonequip: tinyint("flag_bindonequip", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropannounce: tinyint("flag_dropannounce", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagNoconsume: tinyint("flag_noconsume", { unsigned: true }).default(
      sql`NULL`,
    ),
    flagDropeffect: varchar("flag_dropeffect", { length: 20 }).default("NULL"),
    delayDuration: bigint("delay_duration", {
      unsigned: true,
      mode: "number",
    }).default(sql`NULL`),
    delayStatus: varchar("delay_status", { length: 30 }).default("NULL"),
    stackAmount: smallint("stack_amount", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackInventory: tinyint("stack_inventory", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackCart: tinyint("stack_cart", { unsigned: true }).default(sql`NULL`),
    stackStorage: tinyint("stack_storage", { unsigned: true }).default(
      sql`NULL`,
    ),
    stackGuildstorage: tinyint("stack_guildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    nouseOverride: smallint("nouse_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    nouseSitting: tinyint("nouse_sitting", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeOverride: smallint("trade_override", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNodrop: tinyint("trade_nodrop", { unsigned: true }).default(sql`NULL`),
    tradeNotrade: tinyint("trade_notrade", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeTradepartner: tinyint("trade_tradepartner", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNosell: tinyint("trade_nosell", { unsigned: true }).default(sql`NULL`),
    tradeNocart: tinyint("trade_nocart", { unsigned: true }).default(sql`NULL`),
    tradeNostorage: tinyint("trade_nostorage", { unsigned: true }).default(
      sql`NULL`,
    ),
    tradeNoguildstorage: tinyint("trade_noguildstorage", {
      unsigned: true,
    }).default(sql`NULL`),
    tradeNomail: tinyint("trade_nomail", { unsigned: true }).default(sql`NULL`),
    tradeNoauction: tinyint("trade_noauction", { unsigned: true }).default(
      sql`NULL`,
    ),
    script: text().default(sql`NULL`),
    equipScript: text("equip_script").default(sql`NULL`),
    unequipScript: text("unequip_script").default(sql`NULL`),
  },
  (table) => [uniqueIndex("UniqueAegisName").on(table.nameAegis)],
);

export const login = mysqlTable(
  "login",
  {
    accountId: int("account_id", { unsigned: true })
      .autoincrement()
      .primaryKey(),
    userid: varchar({ length: 23 }).default("").notNull(),
    userPass: varchar("user_pass", { length: 32 }).default("").notNull(),
    sex: mysqlEnum(["M", "F", "S"]).default("M").notNull(),
    email: varchar({ length: 39 }).default("").notNull(),
    groupId: tinyint("group_id").default(0).notNull(),
    state: int({ unsigned: true }).default(0).notNull(),
    unbanTime: int("unban_time", { unsigned: true }).default(0).notNull(),
    expirationTime: int("expiration_time", { unsigned: true })
      .default(0)
      .notNull(),
    logincount: mediumint({ unsigned: true }).default(0).notNull(),
    lastlogin: datetime().default(new Date("NULLZ")),
    lastIp: varchar("last_ip", { length: 100 }).default("").notNull(),
    birthdate: date().default(new Date("NULL")),
    characterSlots: tinyint("character_slots", { unsigned: true })
      .default(0)
      .notNull(),
    pincode: varchar({ length: 4 }).default("").notNull(),
    pincodeChange: int("pincode_change", { unsigned: true })
      .default(0)
      .notNull(),
    vipTime: int("vip_time", { unsigned: true }).default(0).notNull(),
    oldGroup: tinyint("old_group").default(0).notNull(),
    webAuthToken: varchar("web_auth_token", { length: 17 }).default("NULL"),
    webAuthTokenEnabled: tinyint("web_auth_token_enabled").default(0).notNull(),
  },
  (table) => [
    index("name").on(table.userid),
    uniqueIndex("web_auth_token_key").on(table.webAuthToken),
  ],
);

export const loginlog = mysqlTable(
  "loginlog",
  {
    time: datetime().notNull(),
    ip: varchar({ length: 15 }).default("").notNull(),
    user: varchar({ length: 23 }).default("").notNull(),
    rcode: tinyint().default(0).notNull(),
    log: varchar({ length: 255 }).default("").notNull(),
  },
  (table) => [index("ip").on(table.ip)],
);

export const mail = mysqlTable("mail", {
  id: bigint({ unsigned: true, mode: "number" }).autoincrement().primaryKey(),
  sendName: varchar("send_name", { length: 30 }).default("").notNull(),
  sendId: int("send_id", { unsigned: true }).default(0).notNull(),
  destName: varchar("dest_name", { length: 30 }).default("").notNull(),
  destId: int("dest_id", { unsigned: true }).default(0).notNull(),
  title: varchar({ length: 45 }).default("").notNull(),
  message: varchar({ length: 500 }).default("").notNull(),
  time: int({ unsigned: true }).default(0).notNull(),
  status: tinyint().default(0).notNull(),
  zeny: int({ unsigned: true }).default(0).notNull(),
  type: smallint().default(0).notNull(),
});

export const mailAttachments = mysqlTable(
  "mail_attachments",
  {
    id: bigint({ unsigned: true, mode: "number" })
      .autoincrement()
      .notNull()
      .references(() => mail.id, { onDelete: "cascade", onUpdate: "cascade" }),
    index: smallint({ unsigned: true }).default(0).notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: int({ unsigned: true }).default(0).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    attribute: tinyint({ unsigned: true }).default(0).notNull(),
    identify: smallint().default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id, table.index] })],
);

export const mapreg = mysqlTable(
  "mapreg",
  {
    varname: varchar({ length: 32 })
      .charSet("utf8mb4")
      .collate("utf8mb4_bin")
      .notNull(),
    index: int({ unsigned: true }).default(0).notNull(),
    value: varchar({ length: 255 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.varname, table.index] })],
);

export const market = mysqlTable(
  "market",
  {
    name: varchar({ length: 50 }).default("").notNull(),
    nameid: int({ unsigned: true }).notNull(),
    price: int({ unsigned: true }).notNull(),
    amount: int().notNull(),
    flag: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.name, table.nameid] })],
);

export const memo = mysqlTable(
  "memo",
  {
    memoId: int("memo_id", { unsigned: true }).autoincrement().primaryKey(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
    x: smallint({ unsigned: true }).default(0).notNull(),
    y: smallint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("char_id").on(table.charId)],
);

export const mercenary = mysqlTable("mercenary", {
  merId: int("mer_id", { unsigned: true }).autoincrement().primaryKey(),
  charId: int("char_id", { unsigned: true }).notNull(),
  class: mediumint({ unsigned: true }).default(0).notNull(),
  hp: int({ unsigned: true }).default(0).notNull(),
  sp: int({ unsigned: true }).default(0).notNull(),
  killCounter: int("kill_counter").notNull(),
  lifeTime: bigint("life_time", { mode: "number" }).default(0).notNull(),
});

export const mercenaryOwner = mysqlTable("mercenary_owner", {
  charId: int("char_id", { unsigned: true }).primaryKey(),
  mercId: int("merc_id", { unsigned: true }).default(0).notNull(),
  archCalls: int("arch_calls").default(0).notNull(),
  archFaith: int("arch_faith").default(0).notNull(),
  spearCalls: int("spear_calls").default(0).notNull(),
  spearFaith: int("spear_faith").default(0).notNull(),
  swordCalls: int("sword_calls").default(0).notNull(),
  swordFaith: int("sword_faith").default(0).notNull(),
});

export const merchantConfigs = mysqlTable(
  "merchant_configs",
  {
    worldName: varchar("world_name", { length: 32 }).notNull(),
    accountId: int("account_id", { unsigned: true }).notNull(),
    charId: int("char_id", { unsigned: true }).notNull(),
    storeType: tinyint("store_type", { unsigned: true }).default(0).notNull(),
    data: longtext().notNull(),
  },
  (table) => [
    primaryKey({
      columns: [
        table.worldName,
        table.accountId,
        table.charId,
        table.storeType,
      ],
    }),
  ],
);

export const mobDb = mysqlTable(
  "mob_db",
  {
    id: int({ unsigned: true }).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 24 }).notNull(),
    nameEnglish: text("name_english").notNull(),
    nameJapanese: text("name_japanese").default(sql`NULL`),
    level: smallint({ unsigned: true }).default(sql`NULL`),
    hp: int({ unsigned: true }).default(sql`NULL`),
    sp: mediumint({ unsigned: true }).default(sql`NULL`),
    baseExp: int("base_exp", { unsigned: true }).default(sql`NULL`),
    jobExp: int("job_exp", { unsigned: true }).default(sql`NULL`),
    mvpExp: int("mvp_exp", { unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    attack2: smallint({ unsigned: true }).default(sql`NULL`),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    magicDefense: smallint("magic_defense", { unsigned: true }).default(
      sql`NULL`,
    ),
    str: smallint({ unsigned: true }).default(sql`NULL`),
    agi: smallint({ unsigned: true }).default(sql`NULL`),
    vit: smallint({ unsigned: true }).default(sql`NULL`),
    int: smallint({ unsigned: true }).default(sql`NULL`),
    dex: smallint({ unsigned: true }).default(sql`NULL`),
    luk: smallint({ unsigned: true }).default(sql`NULL`),
    attackRange: tinyint("attack_range", { unsigned: true }).default(sql`NULL`),
    skillRange: tinyint("skill_range", { unsigned: true }).default(sql`NULL`),
    chaseRange: tinyint("chase_range", { unsigned: true }).default(sql`NULL`),
    size: varchar({ length: 24 }).default("NULL"),
    race: varchar({ length: 24 }).default("NULL"),
    racegroupGoblin: tinyint("racegroup_goblin", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupKobold: tinyint("racegroup_kobold", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOrc: tinyint("racegroup_orc", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGolem: tinyint("racegroup_golem", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGuardian: tinyint("racegroup_guardian", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupNinja: tinyint("racegroup_ninja", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGvg: tinyint("racegroup_gvg", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupBattlefield: tinyint("racegroup_battlefield", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTreasure: tinyint("racegroup_treasure", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBiolab: tinyint("racegroup_biolab", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupManuk: tinyint("racegroup_manuk", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupSplendide: tinyint("racegroup_splendide", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupScaraba: tinyint("racegroup_scaraba", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOghAtkDef: tinyint("racegroup_ogh_atk_def", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupOghHidden: tinyint("racegroup_ogh_hidden", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5SwordmanThief: tinyint("racegroup_bio5_swordman_thief", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5AcolyteMerchant: tinyint("racegroup_bio5_acolyte_merchant", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5MageArcher: tinyint("racegroup_bio5_mage_archer", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5Mvp: tinyint("racegroup_bio5_mvp", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupClocktower: tinyint("racegroup_clocktower", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupThanatos: tinyint("racegroup_thanatos", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupFaceworm: tinyint("racegroup_faceworm", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupHearthunter: tinyint("racegroup_hearthunter", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRockridge: tinyint("racegroup_rockridge", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupWernerLab: tinyint("racegroup_werner_lab", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTempleDemon: tinyint("racegroup_temple_demon", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionVampire: tinyint("racegroup_illusion_vampire", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupMalangdo: tinyint("racegroup_malangdo", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172alpha: tinyint("racegroup_ep172alpha", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172beta: tinyint("racegroup_ep172beta", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172bath: tinyint("racegroup_ep172bath", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionTurtle: tinyint("racegroup_illusion_turtle", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRachelSanctuary: tinyint("racegroup_rachel_sanctuary", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionLuanda: tinyint("racegroup_illusion_luanda", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionFrozen: tinyint("racegroup_illusion_frozen", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionMoonlight: tinyint("racegroup_illusion_moonlight", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp16Def: tinyint("racegroup_ep16_def", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupEddaArunafeltz: tinyint("racegroup_edda_arunafeltz", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupLasagna: tinyint("racegroup_lasagna", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGlastHeimAbyss: tinyint("racegroup_glast_heim_abyss", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupDestroyedValkyrieRealm: tinyint(
      "racegroup_destroyed_valkyrie_realm",
      { unsigned: true },
    ).default(sql`NULL`),
    racegroupEncroachedGephenia: tinyint("racegroup_encroached_gephenia", {
      unsigned: true,
    }).default(sql`NULL`),
    element: varchar({ length: 24 }).default("NULL"),
    elementLevel: tinyint("element_level", { unsigned: true }).default(
      sql`NULL`,
    ),
    walkSpeed: smallint("walk_speed", { unsigned: true }).default(sql`NULL`),
    attackDelay: smallint("attack_delay", { unsigned: true }).default(
      sql`NULL`,
    ),
    attackMotion: smallint("attack_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageMotion: smallint("damage_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageTaken: smallint("damage_taken", { unsigned: true }).default(
      sql`NULL`,
    ),
    groupid: smallint({ unsigned: true }).default(sql`NULL`),
    title: text().default(sql`NULL`),
    ai: varchar({ length: 50 }).default("NULL"),
    class: varchar({ length: 50 }).default("NULL"),
    modeCanmove: tinyint("mode_canmove", { unsigned: true }).default(sql`NULL`),
    modeLooter: tinyint("mode_looter", { unsigned: true }).default(sql`NULL`),
    modeAggressive: tinyint("mode_aggressive", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAssist: tinyint("mode_assist", { unsigned: true }).default(sql`NULL`),
    modeCastsensoridle: tinyint("mode_castsensoridle", {
      unsigned: true,
    }).default(sql`NULL`),
    modeNorandomwalk: tinyint("mode_norandomwalk", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeNocast: tinyint("mode_nocast", { unsigned: true }).default(sql`NULL`),
    modeCanattack: tinyint("mode_canattack", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeCastsensorchase: tinyint("mode_castsensorchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangechase: tinyint("mode_changechase", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAngry: tinyint("mode_angry", { unsigned: true }).default(sql`NULL`),
    modeChangetargetmelee: tinyint("mode_changetargetmelee", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangetargetchase: tinyint("mode_changetargetchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTargetweak: tinyint("mode_targetweak", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeRandomtarget: tinyint("mode_randomtarget", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremelee: tinyint("mode_ignoremelee", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremagic: tinyint("mode_ignoremagic", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoreranged: tinyint("mode_ignoreranged", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeMvp: tinyint("mode_mvp", { unsigned: true }).default(sql`NULL`),
    modeIgnoremisc: tinyint("mode_ignoremisc", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeKnockbackimmune: tinyint("mode_knockbackimmune", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTeleportblock: tinyint("mode_teleportblock", {
      unsigned: true,
    }).default(sql`NULL`),
    modeFixeditemdrop: tinyint("mode_fixeditemdrop", {
      unsigned: true,
    }).default(sql`NULL`),
    modeDetector: tinyint("mode_detector", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeStatusimmune: tinyint("mode_statusimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeSkillimmune: tinyint("mode_skillimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Item: varchar("mvpdrop1_item", { length: 50 }).default("NULL"),
    mvpdrop1Rate: smallint("mvpdrop1_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Option: varchar("mvpdrop1_option", { length: 50 }).default("NULL"),
    mvpdrop1Index: tinyint("mvpdrop1_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Item: varchar("mvpdrop2_item", { length: 50 }).default("NULL"),
    mvpdrop2Rate: smallint("mvpdrop2_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Option: varchar("mvpdrop2_option", { length: 50 }).default("NULL"),
    mvpdrop2Index: tinyint("mvpdrop2_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Item: varchar("mvpdrop3_item", { length: 50 }).default("NULL"),
    mvpdrop3Rate: smallint("mvpdrop3_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Option: varchar("mvpdrop3_option", { length: 50 }).default("NULL"),
    mvpdrop3Index: tinyint("mvpdrop3_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Item: varchar("drop1_item", { length: 50 }).default("NULL"),
    drop1Rate: smallint("drop1_rate", { unsigned: true }).default(sql`NULL`),
    drop1Nosteal: tinyint("drop1_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Option: varchar("drop1_option", { length: 50 }).default("NULL"),
    drop1Index: tinyint("drop1_index", { unsigned: true }).default(sql`NULL`),
    drop2Item: varchar("drop2_item", { length: 50 }).default("NULL"),
    drop2Rate: smallint("drop2_rate", { unsigned: true }).default(sql`NULL`),
    drop2Nosteal: tinyint("drop2_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop2Option: varchar("drop2_option", { length: 50 }).default("NULL"),
    drop2Index: tinyint("drop2_index", { unsigned: true }).default(sql`NULL`),
    drop3Item: varchar("drop3_item", { length: 50 }).default("NULL"),
    drop3Rate: smallint("drop3_rate", { unsigned: true }).default(sql`NULL`),
    drop3Nosteal: tinyint("drop3_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop3Option: varchar("drop3_option", { length: 50 }).default("NULL"),
    drop3Index: tinyint("drop3_index", { unsigned: true }).default(sql`NULL`),
    drop4Item: varchar("drop4_item", { length: 50 }).default("NULL"),
    drop4Rate: smallint("drop4_rate", { unsigned: true }).default(sql`NULL`),
    drop4Nosteal: tinyint("drop4_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop4Option: varchar("drop4_option", { length: 50 }).default("NULL"),
    drop4Index: tinyint("drop4_index", { unsigned: true }).default(sql`NULL`),
    drop5Item: varchar("drop5_item", { length: 50 }).default("NULL"),
    drop5Rate: smallint("drop5_rate", { unsigned: true }).default(sql`NULL`),
    drop5Nosteal: tinyint("drop5_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop5Option: varchar("drop5_option", { length: 50 }).default("NULL"),
    drop5Index: tinyint("drop5_index", { unsigned: true }).default(sql`NULL`),
    drop6Item: varchar("drop6_item", { length: 50 }).default("NULL"),
    drop6Rate: smallint("drop6_rate", { unsigned: true }).default(sql`NULL`),
    drop6Nosteal: tinyint("drop6_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop6Option: varchar("drop6_option", { length: 50 }).default("NULL"),
    drop6Index: tinyint("drop6_index", { unsigned: true }).default(sql`NULL`),
    drop7Item: varchar("drop7_item", { length: 50 }).default("NULL"),
    drop7Rate: smallint("drop7_rate", { unsigned: true }).default(sql`NULL`),
    drop7Nosteal: tinyint("drop7_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop7Option: varchar("drop7_option", { length: 50 }).default("NULL"),
    drop7Index: tinyint("drop7_index", { unsigned: true }).default(sql`NULL`),
    drop8Item: varchar("drop8_item", { length: 50 }).default("NULL"),
    drop8Rate: smallint("drop8_rate", { unsigned: true }).default(sql`NULL`),
    drop8Nosteal: tinyint("drop8_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop8Option: varchar("drop8_option", { length: 50 }).default("NULL"),
    drop8Index: tinyint("drop8_index", { unsigned: true }).default(sql`NULL`),
    drop9Item: varchar("drop9_item", { length: 50 }).default("NULL"),
    drop9Rate: smallint("drop9_rate", { unsigned: true }).default(sql`NULL`),
    drop9Nosteal: tinyint("drop9_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop9Option: varchar("drop9_option", { length: 50 }).default("NULL"),
    drop9Index: tinyint("drop9_index", { unsigned: true }).default(sql`NULL`),
    drop10Item: varchar("drop10_item", { length: 50 }).default("NULL"),
    drop10Rate: smallint("drop10_rate", { unsigned: true }).default(sql`NULL`),
    drop10Nosteal: tinyint("drop10_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop10Option: varchar("drop10_option", { length: 50 }).default("NULL"),
    drop10Index: tinyint("drop10_index", { unsigned: true }).default(sql`NULL`),
  },
  (table) => [uniqueIndex("name_aegis").on(table.nameAegis)],
);

export const mobDb2 = mysqlTable(
  "mob_db2",
  {
    id: int({ unsigned: true }).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 24 }).default("NULL"),
    nameEnglish: text("name_english").default(sql`NULL`),
    nameJapanese: text("name_japanese").default(sql`NULL`),
    level: smallint({ unsigned: true }).default(sql`NULL`),
    hp: int({ unsigned: true }).default(sql`NULL`),
    sp: mediumint({ unsigned: true }).default(sql`NULL`),
    baseExp: int("base_exp", { unsigned: true }).default(sql`NULL`),
    jobExp: int("job_exp", { unsigned: true }).default(sql`NULL`),
    mvpExp: int("mvp_exp", { unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    attack2: smallint({ unsigned: true }).default(sql`NULL`),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    magicDefense: smallint("magic_defense", { unsigned: true }).default(
      sql`NULL`,
    ),
    str: smallint({ unsigned: true }).default(sql`NULL`),
    agi: smallint({ unsigned: true }).default(sql`NULL`),
    vit: smallint({ unsigned: true }).default(sql`NULL`),
    int: smallint({ unsigned: true }).default(sql`NULL`),
    dex: smallint({ unsigned: true }).default(sql`NULL`),
    luk: smallint({ unsigned: true }).default(sql`NULL`),
    attackRange: tinyint("attack_range", { unsigned: true }).default(sql`NULL`),
    skillRange: tinyint("skill_range", { unsigned: true }).default(sql`NULL`),
    chaseRange: tinyint("chase_range", { unsigned: true }).default(sql`NULL`),
    size: varchar({ length: 24 }).default("NULL"),
    race: varchar({ length: 24 }).default("NULL"),
    racegroupGoblin: tinyint("racegroup_goblin", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupKobold: tinyint("racegroup_kobold", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOrc: tinyint("racegroup_orc", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGolem: tinyint("racegroup_golem", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGuardian: tinyint("racegroup_guardian", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupNinja: tinyint("racegroup_ninja", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGvg: tinyint("racegroup_gvg", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupBattlefield: tinyint("racegroup_battlefield", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTreasure: tinyint("racegroup_treasure", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBiolab: tinyint("racegroup_biolab", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupManuk: tinyint("racegroup_manuk", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupSplendide: tinyint("racegroup_splendide", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupScaraba: tinyint("racegroup_scaraba", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOghAtkDef: tinyint("racegroup_ogh_atk_def", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupOghHidden: tinyint("racegroup_ogh_hidden", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5SwordmanThief: tinyint("racegroup_bio5_swordman_thief", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5AcolyteMerchant: tinyint("racegroup_bio5_acolyte_merchant", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5MageArcher: tinyint("racegroup_bio5_mage_archer", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5Mvp: tinyint("racegroup_bio5_mvp", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupClocktower: tinyint("racegroup_clocktower", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupThanatos: tinyint("racegroup_thanatos", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupFaceworm: tinyint("racegroup_faceworm", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupHearthunter: tinyint("racegroup_hearthunter", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRockridge: tinyint("racegroup_rockridge", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupWernerLab: tinyint("racegroup_werner_lab", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTempleDemon: tinyint("racegroup_temple_demon", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionVampire: tinyint("racegroup_illusion_vampire", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupMalangdo: tinyint("racegroup_malangdo", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172alpha: tinyint("racegroup_ep172alpha", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172beta: tinyint("racegroup_ep172beta", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172bath: tinyint("racegroup_ep172bath", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionTurtle: tinyint("racegroup_illusion_turtle", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRachelSanctuary: tinyint("racegroup_rachel_sanctuary", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionLuanda: tinyint("racegroup_illusion_luanda", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionFrozen: tinyint("racegroup_illusion_frozen", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionMoonlight: tinyint("racegroup_illusion_moonlight", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp16Def: tinyint("racegroup_ep16_def", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupEddaArunafeltz: tinyint("racegroup_edda_arunafeltz", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupLasagna: tinyint("racegroup_lasagna", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGlastHeimAbyss: tinyint("racegroup_glast_heim_abyss", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupDestroyedValkyrieRealm: tinyint(
      "racegroup_destroyed_valkyrie_realm",
      { unsigned: true },
    ).default(sql`NULL`),
    racegroupEncroachedGephenia: tinyint("racegroup_encroached_gephenia", {
      unsigned: true,
    }).default(sql`NULL`),
    element: varchar({ length: 24 }).default("NULL"),
    elementLevel: tinyint("element_level", { unsigned: true }).default(
      sql`NULL`,
    ),
    walkSpeed: smallint("walk_speed", { unsigned: true }).default(sql`NULL`),
    attackDelay: smallint("attack_delay", { unsigned: true }).default(
      sql`NULL`,
    ),
    attackMotion: smallint("attack_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageMotion: smallint("damage_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageTaken: smallint("damage_taken", { unsigned: true }).default(
      sql`NULL`,
    ),
    groupid: smallint({ unsigned: true }).default(sql`NULL`),
    title: text().default(sql`NULL`),
    ai: varchar({ length: 50 }).default("NULL"),
    class: varchar({ length: 50 }).default("NULL"),
    modeCanmove: tinyint("mode_canmove", { unsigned: true }).default(sql`NULL`),
    modeLooter: tinyint("mode_looter", { unsigned: true }).default(sql`NULL`),
    modeAggressive: tinyint("mode_aggressive", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAssist: tinyint("mode_assist", { unsigned: true }).default(sql`NULL`),
    modeCastsensoridle: tinyint("mode_castsensoridle", {
      unsigned: true,
    }).default(sql`NULL`),
    modeNorandomwalk: tinyint("mode_norandomwalk", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeNocast: tinyint("mode_nocast", { unsigned: true }).default(sql`NULL`),
    modeCanattack: tinyint("mode_canattack", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeCastsensorchase: tinyint("mode_castsensorchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangechase: tinyint("mode_changechase", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAngry: tinyint("mode_angry", { unsigned: true }).default(sql`NULL`),
    modeChangetargetmelee: tinyint("mode_changetargetmelee", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangetargetchase: tinyint("mode_changetargetchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTargetweak: tinyint("mode_targetweak", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeRandomtarget: tinyint("mode_randomtarget", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremelee: tinyint("mode_ignoremelee", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremagic: tinyint("mode_ignoremagic", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoreranged: tinyint("mode_ignoreranged", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeMvp: tinyint("mode_mvp", { unsigned: true }).default(sql`NULL`),
    modeIgnoremisc: tinyint("mode_ignoremisc", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeKnockbackimmune: tinyint("mode_knockbackimmune", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTeleportblock: tinyint("mode_teleportblock", {
      unsigned: true,
    }).default(sql`NULL`),
    modeFixeditemdrop: tinyint("mode_fixeditemdrop", {
      unsigned: true,
    }).default(sql`NULL`),
    modeDetector: tinyint("mode_detector", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeStatusimmune: tinyint("mode_statusimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeSkillimmune: tinyint("mode_skillimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Item: varchar("mvpdrop1_item", { length: 50 }).default("NULL"),
    mvpdrop1Rate: smallint("mvpdrop1_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Option: varchar("mvpdrop1_option", { length: 50 }).default("NULL"),
    mvpdrop1Index: tinyint("mvpdrop1_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Item: varchar("mvpdrop2_item", { length: 50 }).default("NULL"),
    mvpdrop2Rate: smallint("mvpdrop2_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Option: varchar("mvpdrop2_option", { length: 50 }).default("NULL"),
    mvpdrop2Index: tinyint("mvpdrop2_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Item: varchar("mvpdrop3_item", { length: 50 }).default("NULL"),
    mvpdrop3Rate: smallint("mvpdrop3_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Option: varchar("mvpdrop3_option", { length: 50 }).default("NULL"),
    mvpdrop3Index: tinyint("mvpdrop3_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Item: varchar("drop1_item", { length: 50 }).default("NULL"),
    drop1Rate: smallint("drop1_rate", { unsigned: true }).default(sql`NULL`),
    drop1Nosteal: tinyint("drop1_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Option: varchar("drop1_option", { length: 50 }).default("NULL"),
    drop1Index: tinyint("drop1_index", { unsigned: true }).default(sql`NULL`),
    drop2Item: varchar("drop2_item", { length: 50 }).default("NULL"),
    drop2Rate: smallint("drop2_rate", { unsigned: true }).default(sql`NULL`),
    drop2Nosteal: tinyint("drop2_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop2Option: varchar("drop2_option", { length: 50 }).default("NULL"),
    drop2Index: tinyint("drop2_index", { unsigned: true }).default(sql`NULL`),
    drop3Item: varchar("drop3_item", { length: 50 }).default("NULL"),
    drop3Rate: smallint("drop3_rate", { unsigned: true }).default(sql`NULL`),
    drop3Nosteal: tinyint("drop3_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop3Option: varchar("drop3_option", { length: 50 }).default("NULL"),
    drop3Index: tinyint("drop3_index", { unsigned: true }).default(sql`NULL`),
    drop4Item: varchar("drop4_item", { length: 50 }).default("NULL"),
    drop4Rate: smallint("drop4_rate", { unsigned: true }).default(sql`NULL`),
    drop4Nosteal: tinyint("drop4_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop4Option: varchar("drop4_option", { length: 50 }).default("NULL"),
    drop4Index: tinyint("drop4_index", { unsigned: true }).default(sql`NULL`),
    drop5Item: varchar("drop5_item", { length: 50 }).default("NULL"),
    drop5Rate: smallint("drop5_rate", { unsigned: true }).default(sql`NULL`),
    drop5Nosteal: tinyint("drop5_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop5Option: varchar("drop5_option", { length: 50 }).default("NULL"),
    drop5Index: tinyint("drop5_index", { unsigned: true }).default(sql`NULL`),
    drop6Item: varchar("drop6_item", { length: 50 }).default("NULL"),
    drop6Rate: smallint("drop6_rate", { unsigned: true }).default(sql`NULL`),
    drop6Nosteal: tinyint("drop6_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop6Option: varchar("drop6_option", { length: 50 }).default("NULL"),
    drop6Index: tinyint("drop6_index", { unsigned: true }).default(sql`NULL`),
    drop7Item: varchar("drop7_item", { length: 50 }).default("NULL"),
    drop7Rate: smallint("drop7_rate", { unsigned: true }).default(sql`NULL`),
    drop7Nosteal: tinyint("drop7_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop7Option: varchar("drop7_option", { length: 50 }).default("NULL"),
    drop7Index: tinyint("drop7_index", { unsigned: true }).default(sql`NULL`),
    drop8Item: varchar("drop8_item", { length: 50 }).default("NULL"),
    drop8Rate: smallint("drop8_rate", { unsigned: true }).default(sql`NULL`),
    drop8Nosteal: tinyint("drop8_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop8Option: varchar("drop8_option", { length: 50 }).default("NULL"),
    drop8Index: tinyint("drop8_index", { unsigned: true }).default(sql`NULL`),
    drop9Item: varchar("drop9_item", { length: 50 }).default("NULL"),
    drop9Rate: smallint("drop9_rate", { unsigned: true }).default(sql`NULL`),
    drop9Nosteal: tinyint("drop9_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop9Option: varchar("drop9_option", { length: 50 }).default("NULL"),
    drop9Index: tinyint("drop9_index", { unsigned: true }).default(sql`NULL`),
    drop10Item: varchar("drop10_item", { length: 50 }).default("NULL"),
    drop10Rate: smallint("drop10_rate", { unsigned: true }).default(sql`NULL`),
    drop10Nosteal: tinyint("drop10_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop10Option: varchar("drop10_option", { length: 50 }).default("NULL"),
    drop10Index: tinyint("drop10_index", { unsigned: true }).default(sql`NULL`),
  },
  (table) => [uniqueIndex("name_aegis").on(table.nameAegis)],
);

export const mobDb2Re = mysqlTable(
  "mob_db2_re",
  {
    id: int({ unsigned: true }).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 24 }).default("NULL"),
    nameEnglish: text("name_english").default(sql`NULL`),
    nameJapanese: text("name_japanese").default(sql`NULL`),
    level: smallint({ unsigned: true }).default(sql`NULL`),
    hp: int({ unsigned: true }).default(sql`NULL`),
    sp: mediumint({ unsigned: true }).default(sql`NULL`),
    baseExp: int("base_exp", { unsigned: true }).default(sql`NULL`),
    jobExp: int("job_exp", { unsigned: true }).default(sql`NULL`),
    mvpExp: int("mvp_exp", { unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    attack2: smallint({ unsigned: true }).default(sql`NULL`),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    magicDefense: smallint("magic_defense", { unsigned: true }).default(
      sql`NULL`,
    ),
    resistance: smallint({ unsigned: true }).default(sql`NULL`),
    magicResistance: smallint("magic_resistance", { unsigned: true }).default(
      sql`NULL`,
    ),
    str: smallint({ unsigned: true }).default(sql`NULL`),
    agi: smallint({ unsigned: true }).default(sql`NULL`),
    vit: smallint({ unsigned: true }).default(sql`NULL`),
    int: smallint({ unsigned: true }).default(sql`NULL`),
    dex: smallint({ unsigned: true }).default(sql`NULL`),
    luk: smallint({ unsigned: true }).default(sql`NULL`),
    attackRange: tinyint("attack_range", { unsigned: true }).default(sql`NULL`),
    skillRange: tinyint("skill_range", { unsigned: true }).default(sql`NULL`),
    chaseRange: tinyint("chase_range", { unsigned: true }).default(sql`NULL`),
    size: varchar({ length: 24 }).default("NULL"),
    race: varchar({ length: 24 }).default("NULL"),
    racegroupGoblin: tinyint("racegroup_goblin", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupKobold: tinyint("racegroup_kobold", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOrc: tinyint("racegroup_orc", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGolem: tinyint("racegroup_golem", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGuardian: tinyint("racegroup_guardian", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupNinja: tinyint("racegroup_ninja", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGvg: tinyint("racegroup_gvg", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupBattlefield: tinyint("racegroup_battlefield", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTreasure: tinyint("racegroup_treasure", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBiolab: tinyint("racegroup_biolab", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupManuk: tinyint("racegroup_manuk", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupSplendide: tinyint("racegroup_splendide", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupScaraba: tinyint("racegroup_scaraba", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOghAtkDef: tinyint("racegroup_ogh_atk_def", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupOghHidden: tinyint("racegroup_ogh_hidden", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5SwordmanThief: tinyint("racegroup_bio5_swordman_thief", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5AcolyteMerchant: tinyint("racegroup_bio5_acolyte_merchant", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5MageArcher: tinyint("racegroup_bio5_mage_archer", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5Mvp: tinyint("racegroup_bio5_mvp", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupClocktower: tinyint("racegroup_clocktower", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupThanatos: tinyint("racegroup_thanatos", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupFaceworm: tinyint("racegroup_faceworm", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupHearthunter: tinyint("racegroup_hearthunter", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRockridge: tinyint("racegroup_rockridge", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupWernerLab: tinyint("racegroup_werner_lab", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTempleDemon: tinyint("racegroup_temple_demon", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionVampire: tinyint("racegroup_illusion_vampire", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupMalangdo: tinyint("racegroup_malangdo", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172alpha: tinyint("racegroup_ep172alpha", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172beta: tinyint("racegroup_ep172beta", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172bath: tinyint("racegroup_ep172bath", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionTurtle: tinyint("racegroup_illusion_turtle", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRachelSanctuary: tinyint("racegroup_rachel_sanctuary", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionLuanda: tinyint("racegroup_illusion_luanda", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionFrozen: tinyint("racegroup_illusion_frozen", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionMoonlight: tinyint("racegroup_illusion_moonlight", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp16Def: tinyint("racegroup_ep16_def", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupEddaArunafeltz: tinyint("racegroup_edda_arunafeltz", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupLasagna: tinyint("racegroup_lasagna", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGlastHeimAbyss: tinyint("racegroup_glast_heim_abyss", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupDestroyedValkyrieRealm: tinyint(
      "racegroup_destroyed_valkyrie_realm",
      { unsigned: true },
    ).default(sql`NULL`),
    racegroupEncroachedGephenia: tinyint("racegroup_encroached_gephenia", {
      unsigned: true,
    }).default(sql`NULL`),
    element: varchar({ length: 24 }).default("NULL"),
    elementLevel: tinyint("element_level", { unsigned: true }).default(
      sql`NULL`,
    ),
    walkSpeed: smallint("walk_speed", { unsigned: true }).default(sql`NULL`),
    attackDelay: smallint("attack_delay", { unsigned: true }).default(
      sql`NULL`,
    ),
    attackMotion: smallint("attack_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageMotion: smallint("damage_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageTaken: smallint("damage_taken", { unsigned: true }).default(
      sql`NULL`,
    ),
    groupid: smallint({ unsigned: true }).default(sql`NULL`),
    title: text().default(sql`NULL`),
    ai: varchar({ length: 50 }).default("NULL"),
    class: varchar({ length: 50 }).default("NULL"),
    modeCanmove: tinyint("mode_canmove", { unsigned: true }).default(sql`NULL`),
    modeLooter: tinyint("mode_looter", { unsigned: true }).default(sql`NULL`),
    modeAggressive: tinyint("mode_aggressive", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAssist: tinyint("mode_assist", { unsigned: true }).default(sql`NULL`),
    modeCastsensoridle: tinyint("mode_castsensoridle", {
      unsigned: true,
    }).default(sql`NULL`),
    modeNorandomwalk: tinyint("mode_norandomwalk", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeNocast: tinyint("mode_nocast", { unsigned: true }).default(sql`NULL`),
    modeCanattack: tinyint("mode_canattack", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeCastsensorchase: tinyint("mode_castsensorchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangechase: tinyint("mode_changechase", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAngry: tinyint("mode_angry", { unsigned: true }).default(sql`NULL`),
    modeChangetargetmelee: tinyint("mode_changetargetmelee", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangetargetchase: tinyint("mode_changetargetchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTargetweak: tinyint("mode_targetweak", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeRandomtarget: tinyint("mode_randomtarget", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremelee: tinyint("mode_ignoremelee", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremagic: tinyint("mode_ignoremagic", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoreranged: tinyint("mode_ignoreranged", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeMvp: tinyint("mode_mvp", { unsigned: true }).default(sql`NULL`),
    modeIgnoremisc: tinyint("mode_ignoremisc", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeKnockbackimmune: tinyint("mode_knockbackimmune", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTeleportblock: tinyint("mode_teleportblock", {
      unsigned: true,
    }).default(sql`NULL`),
    modeFixeditemdrop: tinyint("mode_fixeditemdrop", {
      unsigned: true,
    }).default(sql`NULL`),
    modeDetector: tinyint("mode_detector", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeStatusimmune: tinyint("mode_statusimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeSkillimmune: tinyint("mode_skillimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Item: varchar("mvpdrop1_item", { length: 50 }).default("NULL"),
    mvpdrop1Rate: smallint("mvpdrop1_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Option: varchar("mvpdrop1_option", { length: 50 }).default("NULL"),
    mvpdrop1Index: tinyint("mvpdrop1_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Item: varchar("mvpdrop2_item", { length: 50 }).default("NULL"),
    mvpdrop2Rate: smallint("mvpdrop2_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Option: varchar("mvpdrop2_option", { length: 50 }).default("NULL"),
    mvpdrop2Index: tinyint("mvpdrop2_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Item: varchar("mvpdrop3_item", { length: 50 }).default("NULL"),
    mvpdrop3Rate: smallint("mvpdrop3_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Option: varchar("mvpdrop3_option", { length: 50 }).default("NULL"),
    mvpdrop3Index: tinyint("mvpdrop3_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Item: varchar("drop1_item", { length: 50 }).default("NULL"),
    drop1Rate: smallint("drop1_rate", { unsigned: true }).default(sql`NULL`),
    drop1Nosteal: tinyint("drop1_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Option: varchar("drop1_option", { length: 50 }).default("NULL"),
    drop1Index: tinyint("drop1_index", { unsigned: true }).default(sql`NULL`),
    drop2Item: varchar("drop2_item", { length: 50 }).default("NULL"),
    drop2Rate: smallint("drop2_rate", { unsigned: true }).default(sql`NULL`),
    drop2Nosteal: tinyint("drop2_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop2Option: varchar("drop2_option", { length: 50 }).default("NULL"),
    drop2Index: tinyint("drop2_index", { unsigned: true }).default(sql`NULL`),
    drop3Item: varchar("drop3_item", { length: 50 }).default("NULL"),
    drop3Rate: smallint("drop3_rate", { unsigned: true }).default(sql`NULL`),
    drop3Nosteal: tinyint("drop3_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop3Option: varchar("drop3_option", { length: 50 }).default("NULL"),
    drop3Index: tinyint("drop3_index", { unsigned: true }).default(sql`NULL`),
    drop4Item: varchar("drop4_item", { length: 50 }).default("NULL"),
    drop4Rate: smallint("drop4_rate", { unsigned: true }).default(sql`NULL`),
    drop4Nosteal: tinyint("drop4_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop4Option: varchar("drop4_option", { length: 50 }).default("NULL"),
    drop4Index: tinyint("drop4_index", { unsigned: true }).default(sql`NULL`),
    drop5Item: varchar("drop5_item", { length: 50 }).default("NULL"),
    drop5Rate: smallint("drop5_rate", { unsigned: true }).default(sql`NULL`),
    drop5Nosteal: tinyint("drop5_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop5Option: varchar("drop5_option", { length: 50 }).default("NULL"),
    drop5Index: tinyint("drop5_index", { unsigned: true }).default(sql`NULL`),
    drop6Item: varchar("drop6_item", { length: 50 }).default("NULL"),
    drop6Rate: smallint("drop6_rate", { unsigned: true }).default(sql`NULL`),
    drop6Nosteal: tinyint("drop6_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop6Option: varchar("drop6_option", { length: 50 }).default("NULL"),
    drop6Index: tinyint("drop6_index", { unsigned: true }).default(sql`NULL`),
    drop7Item: varchar("drop7_item", { length: 50 }).default("NULL"),
    drop7Rate: smallint("drop7_rate", { unsigned: true }).default(sql`NULL`),
    drop7Nosteal: tinyint("drop7_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop7Option: varchar("drop7_option", { length: 50 }).default("NULL"),
    drop7Index: tinyint("drop7_index", { unsigned: true }).default(sql`NULL`),
    drop8Item: varchar("drop8_item", { length: 50 }).default("NULL"),
    drop8Rate: smallint("drop8_rate", { unsigned: true }).default(sql`NULL`),
    drop8Nosteal: tinyint("drop8_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop8Option: varchar("drop8_option", { length: 50 }).default("NULL"),
    drop8Index: tinyint("drop8_index", { unsigned: true }).default(sql`NULL`),
    drop9Item: varchar("drop9_item", { length: 50 }).default("NULL"),
    drop9Rate: smallint("drop9_rate", { unsigned: true }).default(sql`NULL`),
    drop9Nosteal: tinyint("drop9_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop9Option: varchar("drop9_option", { length: 50 }).default("NULL"),
    drop9Index: tinyint("drop9_index", { unsigned: true }).default(sql`NULL`),
    drop10Item: varchar("drop10_item", { length: 50 }).default("NULL"),
    drop10Rate: smallint("drop10_rate", { unsigned: true }).default(sql`NULL`),
    drop10Nosteal: tinyint("drop10_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop10Option: varchar("drop10_option", { length: 50 }).default("NULL"),
    drop10Index: tinyint("drop10_index", { unsigned: true }).default(sql`NULL`),
  },
  (table) => [uniqueIndex("name_aegis").on(table.nameAegis)],
);

export const mobSkillDb = mysqlTable("mob_skill_db", {
  mobID: smallint("MOB_ID").notNull(),
  info: text("INFO").notNull(),
  state: text("STATE").notNull(),
  skillID: smallint("SKILL_ID").notNull(),
  skillLV: tinyint("SKILL_LV").notNull(),
  rate: smallint("RATE").notNull(),
  casttime: mediumint("CASTTIME").notNull(),
  delay: int("DELAY").notNull(),
  cancelable: text("CANCELABLE").notNull(),
  target: text("TARGET").notNull(),
  condition: text("CONDITION").notNull(),
  conditionVALUE: text("CONDITION_VALUE").default(sql`NULL`),
  val1: mediumint("VAL1").default(sql`NULL`),
  val2: mediumint("VAL2").default(sql`NULL`),
  val3: mediumint("VAL3").default(sql`NULL`),
  val4: mediumint("VAL4").default(sql`NULL`),
  val5: mediumint("VAL5").default(sql`NULL`),
  emotion: text("EMOTION").default(sql`NULL`),
  chat: text("CHAT").default(sql`NULL`),
});

export const mobSkillDb2 = mysqlTable("mob_skill_db2", {
  mobID: smallint("MOB_ID").notNull(),
  info: text("INFO").notNull(),
  state: text("STATE").notNull(),
  skillID: smallint("SKILL_ID").notNull(),
  skillLV: tinyint("SKILL_LV").notNull(),
  rate: smallint("RATE").notNull(),
  casttime: mediumint("CASTTIME").notNull(),
  delay: int("DELAY").notNull(),
  cancelable: text("CANCELABLE").notNull(),
  target: text("TARGET").notNull(),
  condition: text("CONDITION").notNull(),
  conditionVALUE: text("CONDITION_VALUE").default(sql`NULL`),
  val1: mediumint("VAL1").default(sql`NULL`),
  val2: mediumint("VAL2").default(sql`NULL`),
  val3: mediumint("VAL3").default(sql`NULL`),
  val4: mediumint("VAL4").default(sql`NULL`),
  val5: mediumint("VAL5").default(sql`NULL`),
  emotion: text("EMOTION").default(sql`NULL`),
  chat: text("CHAT").default(sql`NULL`),
});

export const mobSkillDb2Re = mysqlTable("mob_skill_db2_re", {
  mobID: smallint("MOB_ID").notNull(),
  info: text("INFO").notNull(),
  state: text("STATE").notNull(),
  skillID: smallint("SKILL_ID").notNull(),
  skillLV: tinyint("SKILL_LV").notNull(),
  rate: smallint("RATE").notNull(),
  casttime: mediumint("CASTTIME").notNull(),
  delay: int("DELAY").notNull(),
  cancelable: text("CANCELABLE").notNull(),
  target: text("TARGET").notNull(),
  condition: text("CONDITION").notNull(),
  conditionVALUE: text("CONDITION_VALUE").default(sql`NULL`),
  val1: mediumint("VAL1").default(sql`NULL`),
  val2: mediumint("VAL2").default(sql`NULL`),
  val3: mediumint("VAL3").default(sql`NULL`),
  val4: mediumint("VAL4").default(sql`NULL`),
  val5: mediumint("VAL5").default(sql`NULL`),
  emotion: text("EMOTION").default(sql`NULL`),
  chat: text("CHAT").default(sql`NULL`),
});

export const mobSkillDbRe = mysqlTable("mob_skill_db_re", {
  mobID: smallint("MOB_ID").notNull(),
  info: text("INFO").notNull(),
  state: text("STATE").notNull(),
  skillID: smallint("SKILL_ID").notNull(),
  skillLV: tinyint("SKILL_LV").notNull(),
  rate: smallint("RATE").notNull(),
  casttime: mediumint("CASTTIME").notNull(),
  delay: int("DELAY").notNull(),
  cancelable: text("CANCELABLE").notNull(),
  target: text("TARGET").notNull(),
  condition: text("CONDITION").notNull(),
  conditionVALUE: text("CONDITION_VALUE").default(sql`NULL`),
  val1: mediumint("VAL1").default(sql`NULL`),
  val2: mediumint("VAL2").default(sql`NULL`),
  val3: mediumint("VAL3").default(sql`NULL`),
  val4: mediumint("VAL4").default(sql`NULL`),
  val5: mediumint("VAL5").default(sql`NULL`),
  emotion: text("EMOTION").default(sql`NULL`),
  chat: text("CHAT").default(sql`NULL`),
});

export const mvplog = mysqlTable("mvplog", {
  mvpId: mediumint("mvp_id", { unsigned: true }).autoincrement().primaryKey(),
  mvpDate: datetime("mvp_date").notNull(),
  killCharId: int("kill_char_id").default(0).notNull(),
  monsterId: smallint("monster_id").default(0).notNull(),
  prize: int({ unsigned: true }).default(0).notNull(),
  mvpexp: bigint({ unsigned: true, mode: "number" }).default(0).notNull(),
  map: varchar({ length: 11 }).default("").notNull(),
});

export const npclog = mysqlTable(
  "npclog",
  {
    npcId: mediumint("npc_id", { unsigned: true }).autoincrement().primaryKey(),
    npcDate: datetime("npc_date").notNull(),
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    charName: varchar("char_name", { length: 25 }).default("").notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
    mes: varchar({ length: 255 }).default("").notNull(),
  },
  (table) => [
    index("account_id").on(table.accountId),
    index("char_id").on(table.charId),
  ],
);

export const party = mysqlTable("party", {
  partyId: int("party_id", { unsigned: true }).autoincrement().primaryKey(),
  name: varchar({ length: 24 }).default("").notNull(),
  exp: tinyint({ unsigned: true }).default(0).notNull(),
  item: tinyint({ unsigned: true }).default(0).notNull(),
  leaderId: int("leader_id", { unsigned: true }).default(0).notNull(),
  leaderChar: int("leader_char", { unsigned: true }).default(0).notNull(),
});

export const partyBookings = mysqlTable(
  "party_bookings",
  {
    worldName: varchar("world_name", { length: 32 }).notNull(),
    accountId: int("account_id", { unsigned: true }).notNull(),
    charId: int("char_id", { unsigned: true }).notNull(),
    charName: varchar("char_name", { length: 23 }).notNull(),
    purpose: smallint({ unsigned: true }).default(0).notNull(),
    assist: tinyint({ unsigned: true }).default(0).notNull(),
    damagedealer: tinyint({ unsigned: true }).default(0).notNull(),
    healer: tinyint({ unsigned: true }).default(0).notNull(),
    tanker: tinyint({ unsigned: true }).default(0).notNull(),
    minimumLevel: smallint("minimum_level", { unsigned: true }).notNull(),
    maximumLevel: smallint("maximum_level", { unsigned: true }).notNull(),
    comment: varchar({ length: 255 }).default("").notNull(),
    created: datetime().default(new Date("current_timestamp()Z")).notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.worldName, table.accountId, table.charId] }),
  ],
);

export const pet = mysqlTable("pet", {
  petId: int("pet_id", { unsigned: true }).autoincrement().primaryKey(),
  class: mediumint({ unsigned: true }).default(0).notNull(),
  name: varchar({ length: 24 }).default("").notNull(),
  accountId: int("account_id", { unsigned: true }).default(0).notNull(),
  charId: int("char_id", { unsigned: true }).default(0).notNull(),
  level: smallint({ unsigned: true }).default(0).notNull(),
  eggId: int("egg_id", { unsigned: true }).default(0).notNull(),
  equip: int({ unsigned: true }).default(0).notNull(),
  intimate: smallint({ unsigned: true }).default(0).notNull(),
  hungry: smallint({ unsigned: true }).default(0).notNull(),
  renameFlag: tinyint("rename_flag", { unsigned: true }).default(0).notNull(),
  incubate: int({ unsigned: true }).default(0).notNull(),
  autofeed: tinyint().default(0).notNull(),
});

export const picklog = mysqlTable(
  "picklog",
  {
    id: int().autoincrement().primaryKey(),
    time: datetime().notNull(),
    charId: int("char_id").default(0).notNull(),
    type: mysqlEnum([
      "M",
      "P",
      "L",
      "T",
      "V",
      "S",
      "N",
      "C",
      "A",
      "R",
      "G",
      "E",
      "B",
      "O",
      "I",
      "X",
      "D",
      "U",
      "$",
      "F",
      "Y",
      "Z",
      "Q",
      "H",
      "J",
      "W",
      "0",
      "1",
      "2",
      "3",
    ])
      .default("P")
      .notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: int().default(1).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("type").on(table.type)],
);

export const quest = mysqlTable(
  "quest",
  {
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    questId: int("quest_id", { unsigned: true }).notNull(),
    state: mysqlEnum(["0", "1", "2"]).default("0").notNull(),
    time: int({ unsigned: true }).default(0).notNull(),
    count1: mediumint({ unsigned: true }).default(0).notNull(),
    count2: mediumint({ unsigned: true }).default(0).notNull(),
    count3: mediumint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.charId, table.questId] })],
);

export const sales = mysqlTable("sales", {
  nameid: int({ unsigned: true }).primaryKey(),
  start: datetime().notNull(),
  end: datetime().notNull(),
  amount: int().notNull(),
});

export const scData = mysqlTable(
  "sc_data",
  {
    accountId: int("account_id", { unsigned: true }).notNull(),
    charId: int("char_id", { unsigned: true }).notNull(),
    type: smallint({ unsigned: true }).notNull(),
    tick: bigint({ mode: "number" }).notNull(),
    val1: int().default(0).notNull(),
    val2: int().default(0).notNull(),
    val3: int().default(0).notNull(),
    val4: int().default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.charId, table.type] })],
);

export const skill = mysqlTable(
  "skill",
  {
    charId: int("char_id", { unsigned: true }).default(0).notNull(),
    id: smallint({ unsigned: true }).default(0).notNull(),
    lv: tinyint({ unsigned: true }).default(0).notNull(),
    flag: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [primaryKey({ columns: [table.charId, table.id] })],
);

export const skillcooldown = mysqlTable(
  "skillcooldown",
  {
    accountId: int("account_id", { unsigned: true }).notNull(),
    charId: int("char_id", { unsigned: true }).notNull(),
    skill: smallint({ unsigned: true }).default(0).notNull(),
    tick: bigint({ mode: "number" }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.charId, table.skill] })],
);

export const skillcooldownHomunculus = mysqlTable(
  "skillcooldown_homunculus",
  {
    homunId: int("homun_id").notNull(),
    skill: smallint({ unsigned: true }).default(0).notNull(),
    tick: bigint({ mode: "number" }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.homunId, table.skill] })],
);

export const skillcooldownMercenary = mysqlTable(
  "skillcooldown_mercenary",
  {
    merId: int("mer_id", { unsigned: true }).notNull(),
    skill: smallint({ unsigned: true }).default(0).notNull(),
    tick: bigint({ mode: "number" }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.merId, table.skill] })],
);

export const skillHomunculus = mysqlTable(
  "skill_homunculus",
  {
    homunId: int("homun_id").notNull(),
    id: int().notNull(),
    lv: smallint().notNull(),
  },
  (table) => [primaryKey({ columns: [table.homunId, table.id] })],
);

export const storage = mysqlTable(
  "storage",
  {
    id: int({ unsigned: true }).autoincrement().primaryKey(),
    accountId: int("account_id", { unsigned: true }).default(0).notNull(),
    nameid: int({ unsigned: true }).default(0).notNull(),
    amount: smallint({ unsigned: true }).default(0).notNull(),
    equip: int({ unsigned: true }).default(0).notNull(),
    identify: smallint({ unsigned: true }).default(0).notNull(),
    refine: tinyint({ unsigned: true }).default(0).notNull(),
    attribute: tinyint({ unsigned: true }).default(0).notNull(),
    card0: int({ unsigned: true }).default(0).notNull(),
    card1: int({ unsigned: true }).default(0).notNull(),
    card2: int({ unsigned: true }).default(0).notNull(),
    card3: int({ unsigned: true }).default(0).notNull(),
    optionId0: smallint("option_id0").default(0).notNull(),
    optionVal0: smallint("option_val0").default(0).notNull(),
    optionParm0: tinyint("option_parm0").default(0).notNull(),
    optionId1: smallint("option_id1").default(0).notNull(),
    optionVal1: smallint("option_val1").default(0).notNull(),
    optionParm1: tinyint("option_parm1").default(0).notNull(),
    optionId2: smallint("option_id2").default(0).notNull(),
    optionVal2: smallint("option_val2").default(0).notNull(),
    optionParm2: tinyint("option_parm2").default(0).notNull(),
    optionId3: smallint("option_id3").default(0).notNull(),
    optionVal3: smallint("option_val3").default(0).notNull(),
    optionParm3: tinyint("option_parm3").default(0).notNull(),
    optionId4: smallint("option_id4").default(0).notNull(),
    optionVal4: smallint("option_val4").default(0).notNull(),
    optionParm4: tinyint("option_parm4").default(0).notNull(),
    expireTime: int("expire_time", { unsigned: true }).default(0).notNull(),
    bound: tinyint({ unsigned: true }).default(0).notNull(),
    uniqueId: bigint("unique_id", { unsigned: true, mode: "number" })
      .default(0)
      .notNull(),
    enchantgrade: tinyint({ unsigned: true }).default(0).notNull(),
  },
  (table) => [index("account_id").on(table.accountId)],
);

export const userConfigs = mysqlTable(
  "user_configs",
  {
    worldName: varchar("world_name", { length: 32 }).notNull(),
    accountId: int("account_id", { unsigned: true }).notNull(),
    data: longtext().notNull(),
  },
  (table) => [primaryKey({ columns: [table.worldName, table.accountId] })],
);

export const vendings = mysqlTable("vendings", {
  id: int({ unsigned: true }).primaryKey(),
  accountId: int("account_id", { unsigned: true }).notNull(),
  charId: int("char_id", { unsigned: true }).notNull(),
  sex: mysqlEnum(["F", "M"]).default("M").notNull(),
  map: varchar({ length: 20 }).notNull(),
  x: smallint({ unsigned: true }).notNull(),
  y: smallint({ unsigned: true }).notNull(),
  title: varchar({ length: 80 }).notNull(),
  bodyDirection: dbchar("body_direction", { length: 1 }).default("4").notNull(),
  headDirection: dbchar("head_direction", { length: 1 }).default("0").notNull(),
  sit: dbchar({ length: 1 }).default("1").notNull(),
  autotrade: tinyint().notNull(),
});

export const vendingItems = mysqlTable(
  "vending_items",
  {
    vendingId: int("vending_id", { unsigned: true }).notNull(),
    index: smallint({ unsigned: true }).notNull(),
    cartinventoryId: int("cartinventory_id", { unsigned: true }).notNull(),
    amount: smallint({ unsigned: true }).notNull(),
    price: int({ unsigned: true }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.vendingId, table.index] })],
);

export const zenylog = mysqlTable(
  "zenylog",
  {
    id: int().autoincrement().primaryKey(),
    time: datetime().notNull(),
    charId: int("char_id").default(0).notNull(),
    srcId: int("src_id").default(0).notNull(),
    type: mysqlEnum([
      "T",
      "V",
      "P",
      "M",
      "S",
      "N",
      "D",
      "C",
      "A",
      "E",
      "I",
      "B",
      "K",
      "J",
      "X",
      "0",
      "2",
    ])
      .default("S")
      .notNull(),
    amount: int().default(0).notNull(),
    map: varchar({ length: 11 }).default("").notNull(),
  },
  (table) => [index("type").on(table.type)],
);

export const mobDbRe = mysqlTable(
  "mob_db_re",
  {
    id: int({ unsigned: true }).primaryKey(),
    nameAegis: varchar("name_aegis", { length: 24 }).notNull(),
    nameEnglish: text("name_english").notNull(),
    nameJapanese: text("name_japanese").default(sql`NULL`),
    level: smallint({ unsigned: true }).default(sql`NULL`),
    hp: int({ unsigned: true }).default(sql`NULL`),
    sp: mediumint({ unsigned: true }).default(sql`NULL`),
    baseExp: int("base_exp", { unsigned: true }).default(sql`NULL`),
    jobExp: int("job_exp", { unsigned: true }).default(sql`NULL`),
    mvpExp: int("mvp_exp", { unsigned: true }).default(sql`NULL`),
    attack: smallint({ unsigned: true }).default(sql`NULL`),
    attack2: smallint({ unsigned: true }).default(sql`NULL`),
    defense: smallint({ unsigned: true }).default(sql`NULL`),
    magicDefense: smallint("magic_defense", { unsigned: true }).default(
      sql`NULL`,
    ),
    resistance: smallint({ unsigned: true }).default(sql`NULL`),
    magicResistance: smallint("magic_resistance", { unsigned: true }).default(
      sql`NULL`,
    ),
    str: smallint({ unsigned: true }).default(sql`NULL`),
    agi: smallint({ unsigned: true }).default(sql`NULL`),
    vit: smallint({ unsigned: true }).default(sql`NULL`),
    int: smallint({ unsigned: true }).default(sql`NULL`),
    dex: smallint({ unsigned: true }).default(sql`NULL`),
    luk: smallint({ unsigned: true }).default(sql`NULL`),
    attackRange: tinyint("attack_range", { unsigned: true }).default(sql`NULL`),
    skillRange: tinyint("skill_range", { unsigned: true }).default(sql`NULL`),
    chaseRange: tinyint("chase_range", { unsigned: true }).default(sql`NULL`),
    size: varchar({ length: 24 }).default("NULL"),
    race: varchar({ length: 24 }).default("NULL"),
    racegroupGoblin: tinyint("racegroup_goblin", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupKobold: tinyint("racegroup_kobold", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOrc: tinyint("racegroup_orc", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGolem: tinyint("racegroup_golem", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGuardian: tinyint("racegroup_guardian", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupNinja: tinyint("racegroup_ninja", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGvg: tinyint("racegroup_gvg", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupBattlefield: tinyint("racegroup_battlefield", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTreasure: tinyint("racegroup_treasure", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBiolab: tinyint("racegroup_biolab", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupManuk: tinyint("racegroup_manuk", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupSplendide: tinyint("racegroup_splendide", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupScaraba: tinyint("racegroup_scaraba", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupOghAtkDef: tinyint("racegroup_ogh_atk_def", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupOghHidden: tinyint("racegroup_ogh_hidden", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5SwordmanThief: tinyint("racegroup_bio5_swordman_thief", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5AcolyteMerchant: tinyint("racegroup_bio5_acolyte_merchant", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5MageArcher: tinyint("racegroup_bio5_mage_archer", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupBio5Mvp: tinyint("racegroup_bio5_mvp", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupClocktower: tinyint("racegroup_clocktower", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupThanatos: tinyint("racegroup_thanatos", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupFaceworm: tinyint("racegroup_faceworm", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupHearthunter: tinyint("racegroup_hearthunter", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRockridge: tinyint("racegroup_rockridge", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupWernerLab: tinyint("racegroup_werner_lab", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupTempleDemon: tinyint("racegroup_temple_demon", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionVampire: tinyint("racegroup_illusion_vampire", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupMalangdo: tinyint("racegroup_malangdo", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172alpha: tinyint("racegroup_ep172alpha", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172beta: tinyint("racegroup_ep172beta", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp172bath: tinyint("racegroup_ep172bath", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionTurtle: tinyint("racegroup_illusion_turtle", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupRachelSanctuary: tinyint("racegroup_rachel_sanctuary", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionLuanda: tinyint("racegroup_illusion_luanda", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionFrozen: tinyint("racegroup_illusion_frozen", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupIllusionMoonlight: tinyint("racegroup_illusion_moonlight", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupEp16Def: tinyint("racegroup_ep16_def", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupEddaArunafeltz: tinyint("racegroup_edda_arunafeltz", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupLasagna: tinyint("racegroup_lasagna", { unsigned: true }).default(
      sql`NULL`,
    ),
    racegroupGlastHeimAbyss: tinyint("racegroup_glast_heim_abyss", {
      unsigned: true,
    }).default(sql`NULL`),
    racegroupDestroyedValkyrieRealm: tinyint(
      "racegroup_destroyed_valkyrie_realm",
      { unsigned: true },
    ).default(sql`NULL`),
    racegroupEncroachedGephenia: tinyint("racegroup_encroached_gephenia", {
      unsigned: true,
    }).default(sql`NULL`),
    element: varchar({ length: 24 }).default("NULL"),
    elementLevel: tinyint("element_level", { unsigned: true }).default(
      sql`NULL`,
    ),
    walkSpeed: smallint("walk_speed", { unsigned: true }).default(sql`NULL`),
    attackDelay: smallint("attack_delay", { unsigned: true }).default(
      sql`NULL`,
    ),
    attackMotion: smallint("attack_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageMotion: smallint("damage_motion", { unsigned: true }).default(
      sql`NULL`,
    ),
    damageTaken: smallint("damage_taken", { unsigned: true }).default(
      sql`NULL`,
    ),
    groupid: smallint({ unsigned: true }).default(sql`NULL`),
    title: text().default(sql`NULL`),
    ai: varchar({ length: 50 }).default("NULL"),
    class: varchar({ length: 50 }).default("NULL"),
    modeCanmove: tinyint("mode_canmove", { unsigned: true }).default(sql`NULL`),
    modeLooter: tinyint("mode_looter", { unsigned: true }).default(sql`NULL`),
    modeAggressive: tinyint("mode_aggressive", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAssist: tinyint("mode_assist", { unsigned: true }).default(sql`NULL`),
    modeCastsensoridle: tinyint("mode_castsensoridle", {
      unsigned: true,
    }).default(sql`NULL`),
    modeNorandomwalk: tinyint("mode_norandomwalk", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeNocast: tinyint("mode_nocast", { unsigned: true }).default(sql`NULL`),
    modeCanattack: tinyint("mode_canattack", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeCastsensorchase: tinyint("mode_castsensorchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangechase: tinyint("mode_changechase", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeAngry: tinyint("mode_angry", { unsigned: true }).default(sql`NULL`),
    modeChangetargetmelee: tinyint("mode_changetargetmelee", {
      unsigned: true,
    }).default(sql`NULL`),
    modeChangetargetchase: tinyint("mode_changetargetchase", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTargetweak: tinyint("mode_targetweak", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeRandomtarget: tinyint("mode_randomtarget", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremelee: tinyint("mode_ignoremelee", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoremagic: tinyint("mode_ignoremagic", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeIgnoreranged: tinyint("mode_ignoreranged", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeMvp: tinyint("mode_mvp", { unsigned: true }).default(sql`NULL`),
    modeIgnoremisc: tinyint("mode_ignoremisc", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeKnockbackimmune: tinyint("mode_knockbackimmune", {
      unsigned: true,
    }).default(sql`NULL`),
    modeTeleportblock: tinyint("mode_teleportblock", {
      unsigned: true,
    }).default(sql`NULL`),
    modeFixeditemdrop: tinyint("mode_fixeditemdrop", {
      unsigned: true,
    }).default(sql`NULL`),
    modeDetector: tinyint("mode_detector", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeStatusimmune: tinyint("mode_statusimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    modeSkillimmune: tinyint("mode_skillimmune", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Item: varchar("mvpdrop1_item", { length: 50 }).default("NULL"),
    mvpdrop1Rate: smallint("mvpdrop1_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop1Option: varchar("mvpdrop1_option", { length: 50 }).default("NULL"),
    mvpdrop1Index: tinyint("mvpdrop1_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Item: varchar("mvpdrop2_item", { length: 50 }).default("NULL"),
    mvpdrop2Rate: smallint("mvpdrop2_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop2Option: varchar("mvpdrop2_option", { length: 50 }).default("NULL"),
    mvpdrop2Index: tinyint("mvpdrop2_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Item: varchar("mvpdrop3_item", { length: 50 }).default("NULL"),
    mvpdrop3Rate: smallint("mvpdrop3_rate", { unsigned: true }).default(
      sql`NULL`,
    ),
    mvpdrop3Option: varchar("mvpdrop3_option", { length: 50 }).default("NULL"),
    mvpdrop3Index: tinyint("mvpdrop3_index", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Item: varchar("drop1_item", { length: 50 }).default("NULL"),
    drop1Rate: smallint("drop1_rate", { unsigned: true }).default(sql`NULL`),
    drop1Nosteal: tinyint("drop1_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop1Option: varchar("drop1_option", { length: 50 }).default("NULL"),
    drop1Index: tinyint("drop1_index", { unsigned: true }).default(sql`NULL`),
    drop2Item: varchar("drop2_item", { length: 50 }).default("NULL"),
    drop2Rate: smallint("drop2_rate", { unsigned: true }).default(sql`NULL`),
    drop2Nosteal: tinyint("drop2_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop2Option: varchar("drop2_option", { length: 50 }).default("NULL"),
    drop2Index: tinyint("drop2_index", { unsigned: true }).default(sql`NULL`),
    drop3Item: varchar("drop3_item", { length: 50 }).default("NULL"),
    drop3Rate: smallint("drop3_rate", { unsigned: true }).default(sql`NULL`),
    drop3Nosteal: tinyint("drop3_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop3Option: varchar("drop3_option", { length: 50 }).default("NULL"),
    drop3Index: tinyint("drop3_index", { unsigned: true }).default(sql`NULL`),
    drop4Item: varchar("drop4_item", { length: 50 }).default("NULL"),
    drop4Rate: smallint("drop4_rate", { unsigned: true }).default(sql`NULL`),
    drop4Nosteal: tinyint("drop4_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop4Option: varchar("drop4_option", { length: 50 }).default("NULL"),
    drop4Index: tinyint("drop4_index", { unsigned: true }).default(sql`NULL`),
    drop5Item: varchar("drop5_item", { length: 50 }).default("NULL"),
    drop5Rate: smallint("drop5_rate", { unsigned: true }).default(sql`NULL`),
    drop5Nosteal: tinyint("drop5_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop5Option: varchar("drop5_option", { length: 50 }).default("NULL"),
    drop5Index: tinyint("drop5_index", { unsigned: true }).default(sql`NULL`),
    drop6Item: varchar("drop6_item", { length: 50 }).default("NULL"),
    drop6Rate: smallint("drop6_rate", { unsigned: true }).default(sql`NULL`),
    drop6Nosteal: tinyint("drop6_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop6Option: varchar("drop6_option", { length: 50 }).default("NULL"),
    drop6Index: tinyint("drop6_index", { unsigned: true }).default(sql`NULL`),
    drop7Item: varchar("drop7_item", { length: 50 }).default("NULL"),
    drop7Rate: smallint("drop7_rate", { unsigned: true }).default(sql`NULL`),
    drop7Nosteal: tinyint("drop7_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop7Option: varchar("drop7_option", { length: 50 }).default("NULL"),
    drop7Index: tinyint("drop7_index", { unsigned: true }).default(sql`NULL`),
    drop8Item: varchar("drop8_item", { length: 50 }).default("NULL"),
    drop8Rate: smallint("drop8_rate", { unsigned: true }).default(sql`NULL`),
    drop8Nosteal: tinyint("drop8_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop8Option: varchar("drop8_option", { length: 50 }).default("NULL"),
    drop8Index: tinyint("drop8_index", { unsigned: true }).default(sql`NULL`),
    drop9Item: varchar("drop9_item", { length: 50 }).default("NULL"),
    drop9Rate: smallint("drop9_rate", { unsigned: true }).default(sql`NULL`),
    drop9Nosteal: tinyint("drop9_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop9Option: varchar("drop9_option", { length: 50 }).default("NULL"),
    drop9Index: tinyint("drop9_index", { unsigned: true }).default(sql`NULL`),
    drop10Item: varchar("drop10_item", { length: 50 }).default("NULL"),
    drop10Rate: smallint("drop10_rate", { unsigned: true }).default(sql`NULL`),
    drop10Nosteal: tinyint("drop10_nosteal", { unsigned: true }).default(
      sql`NULL`,
    ),
    drop10Option: varchar("drop10_option", { length: 50 }).default("NULL"),
    drop10Index: tinyint("drop10_index", { unsigned: true }).default(sql`NULL`),
  },
  (table) => [uniqueIndex("name_aegis").on(table.nameAegis)],
);
