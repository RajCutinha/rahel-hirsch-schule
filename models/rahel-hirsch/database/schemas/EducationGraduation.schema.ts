import { mysqlTable, int } from 'drizzle-orm/mysql-core';

import { Graduations_Schema } from './Graduation.schema';
import { Educations_Schema } from './Education.schema';

export const EducationsGraduations_Schema = mysqlTable('EducationGraduation', {
    EducationGraduationId: int('EducationGraduationId').primaryKey().autoincrement(),
    GraduationId: int('GraduationId')
        .notNull()
        .references(() => Graduations_Schema.GraduationId),
    EducationId: int('EducationId')
        .notNull()
        .references(() => Educations_Schema.EducationId)
});
