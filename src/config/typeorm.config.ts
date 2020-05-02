

import {TypeOrmModuleOptions} from '@nestjs/typeorm';
export const typeOrmOptions : TypeOrmModuleOptions ={

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tarik',
    database: 'SPA&BEAUTY',
    entities: [__dirname + ' /../**//*.entity{.ts,.js}'],
    synchronize: true,

    migrations: ["build/server/migration/*.js,.ts"],

    cli: {
      "entitiesDir": "build/server/entity",
      "migrationsDir": "build/server/migration"
    }
}
