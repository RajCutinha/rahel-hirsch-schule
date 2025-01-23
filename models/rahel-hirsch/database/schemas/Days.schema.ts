import { mysqlTable, int } from 'drizzle-orm/mysql-core';

export const Days_Schema = mysqlTable('Days', {
    DayId: int('DayId').primaryKey().autoincrement(),
    monday: int('monday').notNull(),
    tuesday: int('tuesday').notNull(),
    wednesday: int('wednesday').notNull(),
    thursday: int('thursday').notNull(),
    friday: int('friday').notNull(),
    places: int('places').notNull(),
    takenPlaces: int('takenPlaces')
});
