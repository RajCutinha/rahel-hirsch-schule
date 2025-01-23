import { mysqlTable, int } from 'drizzle-orm/mysql-core';

import { Graduations_Schema } from './Graduations.schema';
import { Educations_Schema } from './Educations.schema';

export const EducationsGraduations_Schema = mysqlTable('EducationsGraduations', {
    EducationGraduationId: int('EducationGraduationId').primaryKey().autoincrement(),
    GraduationId: int('GraduationId')
        .notNull()
        .references(() => Graduations_Schema.GraduationId),
    EducationId: int('EducationId')
        .notNull()
        .references(() => Educations_Schema.EducationId)
});
