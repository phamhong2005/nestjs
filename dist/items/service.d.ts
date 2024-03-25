import { Repository } from 'typeorm';
import { Item } from './items';
export declare class ItemService {
    private photoRepository;
    constructor(photoRepository: Repository<Item>);
    findAll(): Promise<Item[]>;
}
