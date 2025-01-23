import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const AdminUsers_Schema = mysqlTable('AdminUsers', {
    AdminUserId: int('AdminUserId').primaryKey().autoincrement(),
    firstname: varchar('firstname', { length: 255 }).notNull(),
    lastname: varchar('lastname', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull()
});
