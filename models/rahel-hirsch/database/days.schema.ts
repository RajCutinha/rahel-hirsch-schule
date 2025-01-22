import { mysqlTable, int } from 'drizzle-orm/mysql-core';

const daysSchema = mysqlTable('Days', {
  DaysId: int('daysId').primaryKey().autoincrement(),
  monday: int('monday').notNull(),
  tuesday: int('tuesday').notNull(),
  wednesday: int('wednesday').notNull(),
  thursday: int('thursday').notNull(),
  friday: int('friday').notNull(),
  places: int('places').notNull(),
  takenPlaces: int('takenPlaces').default(null),
});
