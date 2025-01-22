import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { personSchema } from './person.schema';

export const CourseCompletedSchema = mysqlTable('CourseCompleted', {
  CourseCompletedId: int('CourseCompletedId').primaryKey(),
  personId: int('PersonId').notNull().references(() => personSchema.PersonId),
  IBA: tinyint('IBA'),
  BQL: tinyint('BQL'),
  BV: tinyint('BV'),
  wilkommensklasse: tinyint('wilkommensklasse'),
  keinen: tinyint('keinen')

});