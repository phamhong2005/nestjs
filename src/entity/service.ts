import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './items';

@Injectable()
export class ItemService {
  constructor(
   @Inject("ITEM_REPOSITORY")
    private itemRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async create(itemData: Item): Promise<Item> {
    itemData.timestamp = new Date();
    return this.itemRepository.save(itemData);
  }

  async update(id: number, itemData: Item): Promise<Item> {
     this.itemRepository.update({id:id}, itemData);
     return itemData;
  }
  async delete(id:number) : Promise<String> {
    this.itemRepository.delete(id)
    return "success deleted";
  }
}
