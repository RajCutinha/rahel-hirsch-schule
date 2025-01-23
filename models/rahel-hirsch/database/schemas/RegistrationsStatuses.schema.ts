import { mysqlTable, int, mysqlEnum, timestamp } from 'drizzle-orm/mysql-core';

import { Registrations_Schema } from './Registrations.schema';

export const RegistrationsStatuses_Schema = mysqlTable('RegistrationsStatuses', {
    RegistrationStatusId: int('RegistrationStatusId').primaryKey().autoincrement(),
    RegistrationId: int('RegistrationId')
        .notNull()
        .references(() => Registrations_Schema.RegistrationId),
    status: mysqlEnum('status', ['Angenommen', 'Abgelehnt', 'In Bearbeitung', 'Neu']).default('Neu').notNull(),
    createDate: timestamp('createDate').defaultNow().notNull(),
    editDate: timestamp('editDate')
});
