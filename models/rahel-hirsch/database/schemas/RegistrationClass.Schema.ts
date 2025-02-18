import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

import { Registrations_Schema } from './Registration.schema';

import { Classes_Schema } from './Class.schema';

export const RegistrationsClasses_Schema = mysqlTable('RegistrationClass', {
    RegistrationClassId: int('RegistrationClassId').primaryKey().autoincrement(),
    RegistrationId: int('RegistrationId')
        .notNull()
        .references(() => Registrations_Schema.RegistrationId),
    ClassId: int('ClassId')
        .notNull()
        .references(() => Classes_Schema.ClassId),
    classDate: varchar('classDate', { length: 255 }).notNull(),
    reason: varchar('reason', { length: 255 })
});
