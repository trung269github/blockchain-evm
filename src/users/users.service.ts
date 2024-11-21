import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { Wallet } from 'alchemy-sdk';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}
    async getAllUser(){
        const users = this.userRepository.find();
        return users;
    }

    async getUserById(id: number){
        const user = await this.userRepository.findOne(
            {
                where: {
                    id: id,
                },
            }
        );
        if(user) {
            return user;
        }
        throw new NotFoundException('Could not find the user');
    }

    async createUser(createUserDto: CreateUserDto){
        const newUser = await this.userRepository.create(createUserDto);
        const wallet = Wallet.createRandom();
        await this.userRepository.save({
            username: createUserDto.username,
            password: createUserDto.password,
            email: createUserDto.email,
            wallet: wallet.address,
        });
        return newUser;
    }

    async deleteById(id: number ) {
        const user = await this.userRepository.findOne({
            where: {
                id: id, 
            },
        });
        if(!user) {
            return null;
        }
        await this.userRepository.remove(user);
        return user;
    }
}
