import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  from: string;
  @Column()
  to: string;
  @Column()
  timestamp: string;
  @Column()
  amount: number;
}
