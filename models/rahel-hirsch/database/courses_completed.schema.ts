import { mysqlTable, int, tinyint } from 'drizzle-orm/mysql-core';
import { personSchema } from './person.schema';

export const coursesCompletedSchema = mysqlTable('CoursesCompleted', {
  CoursesCompletedId: int('CoursesCompletedId').primaryKey().autoincrement(),
  PersonId: int('PersonId').notNull().references(() => personSchema.PersonId),
  iba: tinyint('iba'),
  bql: tinyint('bql'),
  bv: tinyint('bv'),
  willkommensklasse: tinyint('willkommensklasse'),
  keinen: tinyint('keinen'),
});
