import { Providers } from 'src/common/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: Providers.DataSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: process.env.NODE_ENV === 'development',
      });

      return dataSource.initialize();
    },
  },
];
