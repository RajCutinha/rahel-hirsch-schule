import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { personSchema } from './person.schema';

export const graduationSchema = mysqlTable('Graduation', {
  GraduationId: int('GraduationId').primaryKey(),
  PersonId: int('PersonId').notNull().references(() => personSchema.PersonId),
  BBR: tinyint('BBR'),
  EBBR: tinyint('EBBR'),
  MSA: tinyint('MSA'),
  abitur: tinyint('abitur'),
  fachabitur: tinyint('fachabitur'),
  fachabiturSchriftlTeil: tinyint('fachabiturSchriftlTeil'),
  noGraduation: tinyint('noGraduation')
});
