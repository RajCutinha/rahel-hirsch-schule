import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { personSchema } from './person.schema';
import { addressSchema } from './address.schema';


export const guardianSchema = mysqlTable('Guardian', {
  GuardianId: int('GuardianId').primaryKey(),
  PersonId: int('PersonId').notNull().references(() => personSchema.PersonId),
  AddressId: int('AddressId').notNull().references(() => addressSchema.AddressId),
  firstname: varchar('firstname', {length: 255}).notNull(),
  lastname: varchar('lastname', {length: 255}).notNull(),
  telephone: varchar('telephone', {length: 255}).notNull()
});
