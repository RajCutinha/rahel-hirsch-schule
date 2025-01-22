import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { personSchema } from './person.schema';


export const addressSchema = mysqlTable('Address', {
  AddressId: int('AddressId').primaryKey(),
  PersonId: int('PersonId').notNull().references(() => personSchema.PersonId),
  postcode: int('postcode').notNull(),
  place: varchar('place', {length: 255}).notNull(),
  street: varchar('street', {length: 255}).notNull(),
  streetNumber: varchar('streetNumber', {length: 20}).notNull(),
  doorbellName: varchar('doorbellName', {length: 255}),
  landlord: varchar('landlord', {length: 255}),
});
