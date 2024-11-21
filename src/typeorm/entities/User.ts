import { IsEmail, IsUUID } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @IsEmail()
    email: string;
    @Column()
    password:string;
    @Column()
    walletAddress: string;
}