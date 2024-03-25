import { Provider } from '@nestjs/common';
import { Item } from './items';

export const ItemProviders: Provider = {
  provide: 'ITEM_REPOSITORY',
  useFactory: (connection: any) => connection.getRepository(Item),
  inject: ['DATA_SOURCE'],
};
