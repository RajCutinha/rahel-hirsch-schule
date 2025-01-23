import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const MissingDocumentsList_Schema = mysqlTable('MissingDocumentsList', {
    MissingDocumentListId: int('MissingDocumentListId').primaryKey().autoincrement(),
    description: varchar('description', { length: 255 }).notNull()
});
