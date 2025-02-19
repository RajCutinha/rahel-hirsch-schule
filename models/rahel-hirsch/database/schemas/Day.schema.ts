import { mysqlTable, tinyint, int } from 'drizzle-orm/mysql-core';

export const Days_Schema = mysqlTable('Day', {
    DayId: int('DayId').primaryKey().autoincrement(),
    monday: tinyint('monday').notNull(),
    tuesday: tinyint('tuesday').notNull(),
    wednesday: tinyint('wednesday').notNull(),
    thursday: tinyint('thursday').notNull(),
    friday: tinyint('friday').notNull(),
    places: int('places').notNull(),
    takenPlaces: int('takenPlaces')
});
