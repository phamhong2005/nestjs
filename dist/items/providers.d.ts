import { DataSource } from 'typeorm';
import { Item } from './items';
export declare const ItemProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Item>;
    inject: string[];
}[];
