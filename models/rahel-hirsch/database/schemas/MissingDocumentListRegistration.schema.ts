import { mysqlTable, int, tinyint, foreignKey } from 'drizzle-orm/mysql-core';
import { Registrations_Schema } from './Registration.schema';
import { MissingDocumentsList_Schema } from './MissingDocumentList.schema';

export const MissingDocumentsListRegistrations_Schema = mysqlTable(
    'MissingDocListRegistration',
    {
        MissingDocListRegistrationId: int('MissingDocListRegistrationId')
            .primaryKey()
            .autoincrement(),

        RegistrationId: int('RegistrationId').notNull(),
        MissingDocumentListId: int('MissingDocListId').notNull(),
        missingDocument: tinyint('missingDoc').default(1),
    },
    (table) => {
        return {
            fk_Registration: foreignKey({
                name: 'fk_mdlr_registration', // Custom FK name
                columns: [table.RegistrationId],
                foreignColumns: [Registrations_Schema.RegistrationId],
            }),

            fk_MissingDocumentList: foreignKey({
                name: 'fk_mdlr_missing_doc_list', // Custom FK name
                columns: [table.MissingDocumentListId],
                foreignColumns: [MissingDocumentsList_Schema.MissingDocumentListId],
            }),
        };
    }
);
