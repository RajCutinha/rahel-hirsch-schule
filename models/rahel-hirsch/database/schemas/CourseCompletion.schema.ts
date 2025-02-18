import { mysqlTable, int, tinyint } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Person.schema';

export const CourseCompletions_Schema = mysqlTable('CourseCompletion', {
    CourseCompletedId: int('CourseCompletedId').primaryKey(),
    personId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    iba: tinyint('iba'),
    bql: tinyint('bql'),
    bv: tinyint('bv'),
    wilkommensklasse: tinyint('wilkommensklasse'),
    keinen: tinyint('keinen')
});
