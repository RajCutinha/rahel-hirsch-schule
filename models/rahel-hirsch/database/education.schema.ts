import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { personSchema } from './person.schema';

export const educationSchema = mysqlTable('Education', {
  EducationId: int('EducationId').primaryKey(),
  PersonId: int('PersonId').notNull().references(() => personSchema.PersonId),
  lastSchool: varchar('lastSchool', {length: 255}),
  graduationYear: varchar('graduationYear', {length: 255}).notNull(),
  professionalTraining: tinyint('professionalTraining'),
  trainingDescription: varchar('trainingDescription', {length: 255})
});