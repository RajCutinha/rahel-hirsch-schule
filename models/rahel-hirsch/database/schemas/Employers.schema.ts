import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Persons.schema';

export const Employers_Schema = mysqlTable('Employers', {
    EmployerId: int('EmployerId').primaryKey(),
    PersonId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    employerName: varchar('employerName', { length: 255 }).notNull(),
    employerStreet: varchar('employerStreet', { length: 255 }).notNull(),
    employerStreetnumber: varchar('employerStreetnumber', { length: 20 }).notNull(),
    employerTel: varchar('employerTel', { length: 255 }).notNull(),
    contactPerson: varchar('contactPerson', { length: 255 }),
    employerFax: varchar('employerFax', { length: 20 }),
    employerEmail: varchar('employerEmail', { length: 255 })
});
