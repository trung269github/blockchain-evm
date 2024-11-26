import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  from: string;
  @Column()
  to: string;
  @Column()
  timestamp: Date;
  @Column('decimal', {precision: 38, scale: 18})
  amount: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User; 
}
