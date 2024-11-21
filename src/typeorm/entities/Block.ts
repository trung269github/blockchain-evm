import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Block{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    previousHash: string;
    @Column()
    hash: string;
    @Column()
    transactions: string;
    @Column()
    timestamp: string;


}