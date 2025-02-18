import { mysqlTable, int } from 'drizzle-orm/mysql-core';

import { Graduations_Schema } from './Graduations.schema';
import { CourseCompletions_Schema } from './CourseCompletions.schema';

export const EducationCoursesCompleted_Schema = mysqlTable('EduCourseComplete', {
    EducationCoursesCompletedId: int('EduCourseCompleteId').primaryKey().autoincrement(),
    GraduationId: int('GraduationId')
        .notNull()
        .references(() => Graduations_Schema.GraduationId),
    CourseCompletedId: int('CourseCompleteId')
        .notNull()
        .references(() => CourseCompletions_Schema.CourseCompletedId)
});
