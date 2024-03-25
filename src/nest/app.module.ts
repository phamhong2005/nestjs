import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from '../controller/ItemController';
import { ItemService } from '../entity/service';
import { Item } from '../entity/items';
import { databaseProviders } from '../database/providers';
import { ItemProviders } from '../entity/providers';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Item],
      synchronize: true,
    }),],
  controllers: [ItemController],
  providers: [ItemService, ItemProviders, ...databaseProviders],
})
export class AppModule {}
