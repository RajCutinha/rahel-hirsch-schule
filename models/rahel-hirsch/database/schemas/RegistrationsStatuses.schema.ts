import { mysqlTable, int, mysqlEnum, timestamp, foreignKey } from 'drizzle-orm/mysql-core';
import { Registrations_Schema } from './Registrations.schema';

export const RegistrationsStatuses_Schema = mysqlTable(
    'RegistrationsStatuses',
    {
        RegistrationStatusId: int('RegistrationStatusId')
            .primaryKey()
            .autoincrement(),

        RegistrationId: int('RegistrationId').notNull(),
        status: mysqlEnum('status', ['Angenommen', 'Abgelehnt', 'In Bearbeitung', 'Neu'])
            .default('Neu')
            .notNull(),
        createDate: timestamp('createDate').defaultNow().notNull(),
        editDate: timestamp('editDate'),
    },
    (table) => {
        return {
            fk_Registration: foreignKey({
                name: 'fk_rstatus_registration', // Custom FK name
                columns: [table.RegistrationId],
                foreignColumns: [Registrations_Schema.RegistrationId],
            }),
        };
    }
);
