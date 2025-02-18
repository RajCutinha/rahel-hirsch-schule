import { mysqlTable, int, varchar, tinyint } from 'drizzle-orm/mysql-core';

import { Persons_Schema } from './Person.schema';

export const Educations_Schema = mysqlTable('Education', {
    EducationId: int('EducationId').primaryKey(),
    PersonId: int('PersonId')
        .notNull()
        .references(() => Persons_Schema.PersonId),
    lastSchool: varchar('lastSchool', { length: 255 }),
    graduationYear: varchar('graduationYear', { length: 255 }).notNull(),
    professionalTraining: tinyint('professionalTraining'),
    trainingDescription: varchar('trainingDescription', { length: 255 })
});
