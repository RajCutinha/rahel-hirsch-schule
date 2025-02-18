import { mysqlTable, int, tinyint } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Person.schema';

export const Graduations_Schema = mysqlTable('Graduation', {
    GraduationId: int('GraduationId').primaryKey(),
    PersonId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    bbr: tinyint('bbr'),
    ebbr: tinyint('ebbr'),
    msa: tinyint('msa'),
    abitur: tinyint('abitur'),
    fachabitur: tinyint('fachabitur'),
    fachabiturSchriftlTeil: tinyint('fachabiturSchriftlTeil'),
    noGraduation: tinyint('noGraduation')
});
