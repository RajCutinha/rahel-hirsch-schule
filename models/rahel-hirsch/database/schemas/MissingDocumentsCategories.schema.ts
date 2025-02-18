import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

import { MissingDocumentsList_Schema } from './MissingDocumentsList.schema';

export const MissingDocumentsCategorys_Schema = mysqlTable('MissingDocumentsCategories', {
    MissingDocumentCategoryId: int('MissingDocumentCategoryId').primaryKey().autoincrement(),
    MissingDocumentListId: int('MissingDocumentListId')
        .notNull()
        .references(() => MissingDocumentsList_Schema.MissingDocumentListId),
    description: varchar('description', { length: 255 }).notNull()
});
