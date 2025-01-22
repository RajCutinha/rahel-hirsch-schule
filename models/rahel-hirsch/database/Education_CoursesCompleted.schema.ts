import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { graduationSchema } from './graduation.schema';
import { CourseCompletedSchema } from './courseCompleted.schema';

export const Education_CoursesCompletedSchema = mysqlTable('Education_CoursesCompleted', {
  Education_CoursesCompletedId: int('Education_CoursesCompletedId').primaryKey().autoincrement(),
  GraduationId: int('GraduationId').notNull().references(() => graduationSchema.GraduationId),
  CourseCompletedId: int('CourseCompletedId').notNull().references(() => CourseCompletedSchema.CourseCompletedId),
});

