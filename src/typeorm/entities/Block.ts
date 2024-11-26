import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";

@Entity()
export class Block{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    previousHash: string;
    @Column()
    hash: string;
    @OneToMany(() => Transaction, (transaction) => transaction.id, { cascade: true })
    transactions: Transaction[];
    @Column()
    timestamp: string;


}