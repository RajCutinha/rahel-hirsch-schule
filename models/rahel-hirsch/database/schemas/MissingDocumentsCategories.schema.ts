import { mysqlTable, int, varchar, foreignKey } from 'drizzle-orm/mysql-core';
import { MissingDocumentsList_Schema } from './MissingDocumentsList.schema';

export const MissingDocumentsCategorys_Schema = mysqlTable(
    'MissingDocumentsCategories',
    {
        MissingDocumentCategoryId: int('MissingDocumentCategoryId')
            .primaryKey()
            .autoincrement(),

        MissingDocumentListId: int('MissingDocumentListId').notNull(),
        description: varchar('description', { length: 255 }).notNull(),
    },
    (table) => {
        return {
            fk_MissingDocumentList: foreignKey({
                name: 'fk_mdc_missing_doc_list', // Custom FK name
                columns: [table.MissingDocumentListId],
                foreignColumns: [MissingDocumentsList_Schema.MissingDocumentListId],
            }),
        };
    }
);
