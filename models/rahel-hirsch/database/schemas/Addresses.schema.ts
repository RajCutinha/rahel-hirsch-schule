import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Persons.schema';

export const Addresses_Schema = mysqlTable('Addresses', {
    AddressId: int('AddressId').primaryKey(),
    PersonId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    postcode: int('postcode').notNull(),
    place: varchar('place', { length: 255 }).notNull(),
    street: varchar('street', { length: 255 }).notNull(),
    streetNumber: varchar('streetNumber', { length: 20 }).notNull(),
    doorbellName: varchar('doorbellName', { length: 255 }),
    landlord: varchar('landlord', { length: 255 })
});
