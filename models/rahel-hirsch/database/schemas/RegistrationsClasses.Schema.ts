import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

import { Registrations_Schema } from './Registrations.schema';

import { Classes_Schema } from './Classes.schema';

export const RegistrationsClasses_Schema = mysqlTable('RegistrationsClasses', {
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
