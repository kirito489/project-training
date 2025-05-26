const { pgTable, serial, varchar, char, integer, text, foreignKey, timestamp } = require("drizzle-orm/pg-core");
const { sql } = require("drizzle-orm");

const usersTable = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 20 }).notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
});

// const heroesTable = pgTable("heroes", {
//   id: serial().primaryKey().notNull(),
//   userId: integer("user_id").notNull(),
//   name: varchar({ length: 100 }).notNull(),
//   gender: char({ length: 1 }),
//   age: integer(),
//   heroLevel: char("hero_level", { length: 1 }).notNull(),
//   heroRank: integer("hero_rank"),
//   description: text(),
//   createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
//   updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
// }, (table) => [
//   foreignKey({
//     columns: [table.userId],
//     foreignColumns: [usersTable.id],
//     name: "fk_heroes_user_id"
//   })
//   .onUpdate("cascade")
//   .onDelete("cascade")
// ]);

// const monstersTable = pgTable("monsters", {
//   id: serial().primaryKey().notNull(),
//   userId: integer("user_id").notNull(), 
//   name: varchar({ length: 100 }).notNull(),
//   dangerLevel: char("danger_level", { length: 1 }).notNull(),
//   killBy: integer("kill_by"),
//   description: text(),
//   createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
//   updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`)
// }, (table) => [
//   foreignKey({
//     columns: [table.userId],
//     foreignColumns: [usersTable.id],
//     name: "fk_monsters_user_id"
//   })
//   .onUpdate("cascade")
//   .onDelete("cascade"),
//   foreignKey({
//     columns: [table.killBy],
//     foreignColumns: [heroesTable.id],
//     name: "fk_kill_by"
//   })
//   .onUpdate("restrict")
//   .onDelete("set null")
// ]);

module.exports = {
  usersTable,
  // heroesTable,
  // monstersTable
};