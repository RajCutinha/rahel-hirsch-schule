import { mysqlTable, int, foreignKey } from 'drizzle-orm/mysql-core';

import { Graduations_Schema } from './Graduation.schema';
import { CourseCompletions_Schema } from './CourseCompletion.schema';

export const EducationCoursesCompleted_Schema = mysqlTable(
    'EduCourseComplete',
    {
        EduCourseCompleteId: int('EduCourseCompleteId')
            .primaryKey()
            .autoincrement(),

        GraduationId: int('GraduationId').notNull(),

        CourseCompletedId: int('CourseCompletedId').notNull(),
    },
    (table) => {
        return {
            fk_Graduation: foreignKey({
                name: 'fk_ecc_graduation', 
                columns: [table.GraduationId],
                foreignColumns: [Graduations_Schema.GraduationId],
            }),

            fk_CourseCompleted: foreignKey({
                name: 'fk_ecc_course', 
                columns: [table.CourseCompletedId],
                foreignColumns: [CourseCompletions_Schema.CourseCompletedId],
            }),
        };
    }
);
