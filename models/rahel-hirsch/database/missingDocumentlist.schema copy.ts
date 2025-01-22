import { mysqlTable, int, varchar} from 'drizzle-orm/mysql-core';


export const missingDocumentListSchema = mysqlTable('MissingDocumentList', {
  MissingDocumentListId: int('MissingDocumentListId').primaryKey().autoincrement(),
  description: varchar('description', {length: 255}).notNull()
});
