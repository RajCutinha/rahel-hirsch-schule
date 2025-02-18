import { mysqlTable, int, tinyint } from 'drizzle-orm/mysql-core';

import { Registrations_Schema } from './Registrations.schema';
import { MissingDocumentsList_Schema } from './MissingDocumentsList.schema';

export const MissingDocumentsListRegistrations_Schema = mysqlTable('MissingDocListRegistration', {
    MissingDocListRegistrationId: int('MissingDocListRegistrationId').primaryKey().autoincrement(),
    
    RegistratioonId: int('RegistrationId')
        .notNull()
        .references(() => Registrations_Schema.RegistrationId),

    MissingDocumentListId: int('MissingDocListId')
        .notNull()
        .references(() => MissingDocumentsList_Schema.MissingDocumentListId),
    missingDocument: tinyint('missingDoc').default(1)
});
