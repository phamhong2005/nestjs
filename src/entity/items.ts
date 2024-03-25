import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    content: string;

    @Column()
    status: string;

    @Column()
    timestamp: Date;
  
}