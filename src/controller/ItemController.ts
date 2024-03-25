import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Item } from "../entity/items";
import { ItemService } from "../entity/service";

@Controller()
export class ItemController{
    constructor(private readonly itemService: ItemService) {}
    @Get("/items")
    findAll(): Promise<Item[]> {
      return this.itemService.findAll();
    }
    @Post("/items")
    create(@Body() item : Item):Promise<Item>{
      return this.itemService.create(item);
    }
    @Delete("/items/:id")
    delete(@Param ("id") id:number):string{
      this.itemService.delete(id);
      return "success deleted";
    }

    @Put("/items/:id")
    update(@Param ("id") id : number,@Body() item :Item) :Promise<Item>{
     return this.itemService.update(id,item)
    }
  
 
}