import { mysqlTable, int } from 'drizzle-orm/mysql-core';

import { AdminUsers_Schema } from './AdminUser.schema';
import { Registrations_Schema } from './Registration.schema';

export const RegistrationCheck_Schema = mysqlTable('RegistrationCheck', {
    RegistrationCheck_Id: int('RegistrationCheck_Id').primaryKey().autoincrement(),
    AdminUser_Id: int('AdminUser_Id')
        .notNull()
        .references(() => AdminUsers_Schema.AdminUserId),
    RegistrationId: int('RegistrationId')
        .notNull()
        .references(() => Registrations_Schema.RegistrationId)
});
