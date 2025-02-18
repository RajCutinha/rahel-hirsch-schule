import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

function checkEnv(): {
    host: string;
    port?: number | undefined;
    user?: string | undefined;
    password?: string | undefined;
    database: string;
    ssl?: string | undefined;
} | {
    url: string;
} {
  if('DB_CONECTION_STRING' in process.env) {
    return { url: process.env.DB_CONECTION_STRING! };
  } else {
    return {
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USERNAME!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_DATABASE!,
      ssl: "false"
    };
  }
}

export default defineConfig({
    out: './models/rahel-hirsch/database/migrations',
    schema: './models/rahel-hirsch/database/schemas/*.schema.ts',
    dialect: 'mysql',
    dbCredentials: checkEnv()
});
