import { mysqlTable, int,  mysqlEnum, varchar, date, tinyint} from 'drizzle-orm/mysql-core';
import { graduationSchema } from './graduation.schema';
import { educationSchema } from './education.schema';

export const Education_GraduationSchema = mysqlTable('Education_Graduation', {
  Education_GraduationId: int('Education_GraduationId').primaryKey().autoincrement(),
  GraduationId: int('GraduationId').notNull().references(() => graduationSchema.GraduationId),
  EducationId: int('EducationId').notNull().references(() => educationSchema.EducationId),
});