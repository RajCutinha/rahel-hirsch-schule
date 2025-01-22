import { mysqlTable, int, varchar} from 'drizzle-orm/mysql-core';
import { registrationSchema } from './registration.schema';
import { classSchema } from './class.schema';


export const registration_classSchema = mysqlTable('Registration_Class', {
  Registration_ClassId: int('Registration_ClassId').primaryKey().autoincrement(),
  RegistrationId: int('RegistrationId').notNull().references(() => registrationSchema.RegistrationId),
  ClassId: int('ClassId').notNull().references(() => classSchema.ClassId),
  classDate: varchar('classDate', {length: 255}).notNull(),
  reason: varchar('reason', {length: 255})
});