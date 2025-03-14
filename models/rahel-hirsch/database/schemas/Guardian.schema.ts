import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Person.schema';
import { Addresses_Schema } from './Address.schema';

export const Guardians_Schema = mysqlTable('Guardian', {
    GuardianId: int('GuardianId').primaryKey(),
    PersonId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    AddressId: int('AddressId')
        .notNull()
        .references(() => Addresses_Schema.AddressId),
    firstname: varchar('firstname', { length: 255 }).notNull(),
    lastname: varchar('lastname', { length: 255 }).notNull(),
    telephone: varchar('telephone', { length: 255 }).notNull()
});
