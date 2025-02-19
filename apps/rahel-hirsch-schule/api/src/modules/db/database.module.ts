import { Module, DynamicModule } from '@nestjs/common';

import { MySql2Database } from 'drizzle-orm/mysql2';
import { drizzle } from 'drizzle-orm/mysql2';
import { PoolOptions } from 'mysql2';

export const DATABASE = Symbol('DATABASE');
export type DATABASE = MySql2Database;

@Module({})
export class DatabaseModule {
    static forRoot(env: Record<string, string>): DynamicModule {
        return {
            module: DatabaseModule,
            providers: [
                {
                    provide: DATABASE,
                    useFactory: async () => {
                        const connection = await drizzle({
                            connection: DatabaseModule.checkEnv(env)
                        });
                        return connection;
                    }
                }
            ],
            exports: [DATABASE]
        };
    }

    static checkEnv(env: { DATABASE_URL: string } | Record<string, string>): string | PoolOptions {
        if ('DATABASE_URL' in env) {
            return env['DATABASE_URL'];
        } else {
            return {
                host: env.DB_HOST!,
                port: Number(env.DB_PORT),
                user: env.DB_USERNAME!,
                password: env.DB_PASSWORD!,
                database: env.DB_DATABASE!
            };
        }
    }
}
