import { mysqlTable, int, varchar, mysqlEnum, tinyint } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Person.schema';

export const Registrations_Schema = mysqlTable('Registration', {
    RegistrationId: int('RegistrationId').primaryKey().autoincrement(),
    PersonId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    specialty: mysqlEnum('specialty', ['ZFA', 'MFA']).notNull(),
    entryDate: varchar('entryDate', { length: 255 }).notNull(),
    contractNumber: varchar('contractNumber', { length: 255 }).notNull(),
    motherLanguage: varchar('motherLanguage', { length: 255 }).notNull(),
    reEducation: tinyint('reEducation'),
    isFromBrandenburg: tinyint('isFromBrandenburg'),
    webSave: tinyint('webSave').notNull(),
    educationPermit: tinyint('educationPermit')
});
