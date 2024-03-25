import { DataSource } from 'typeorm';
import { Item } from '../entity/items';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [
            Item
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];