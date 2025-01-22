import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { daysSchema } from './days.schema';


export const personSchema = mysqlTable('Person', {
  PersonId: int('PersonId').primaryKey(),
  DaysId: int('DaysId').notNull().references(() => daysSchema.DaysId),
  firstname: varchar('firstname', {length: 255}).notNull(),
  lastname: varchar('lastname', {length: 255}).notNull(),
  gender: mysqlEnum(['mänlich', 'weiblich', 'diverse']).notNull(),
  birthDate: date('birthDate').notNull(),
  nationality: varchar('national', {length: 100}),
  countryofBirth: varchar('countryofBirth', {length: 255}).notNull(),
  birthplace: varchar('birthplace', {length: 255}).notNull(),
  phoneNumber: varchar('phoneNumber', {length: 255}),
  telephone: varchar('telephone', {length: 255}),
  email: varchar('email', {length: 255}),
  pictureOk: tinyint('pictureOk'),
  originLanguage: varchar('originLanguage', {length: 255}),
  residenceStatus: varchar('residenceStatus', {length: 255}).notNull()
});