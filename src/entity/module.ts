import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items';
import { ItemService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
  exports: [ItemService], 
})
export class ItemModule {}
