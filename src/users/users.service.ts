import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { Wallet } from 'alchemy-sdk';
import Web3 from 'web3';  

@Injectable()
export class UsersService {
    private web3: Web3;  

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {

        this.web3 = new Web3(new Web3.providers.HttpProvider('https://eth-sepolia.g.alchemy.com/v2/V2LrJBI__t0ydSSApb2hPz_9fZZ1Bm1XD'));  // Change to the correct network
    }

    async getAllUser() {
        return await this.userRepository.find();
    }


    async getUserById(id: number) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException('Could not find the user');
        }
        return user;
    }

    async createUser(createUserDto: CreateUserDto) {
        const walletAddress = Wallet.createRandom();
        const newUser = this.userRepository.create({
            ...createUserDto,
            walletAddress: walletAddress.address,
            privateKey: walletAddress.privateKey, 
        });

        await this.userRepository.save(newUser);
        return newUser;
    }

    async deleteById(id: number) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            return null;
        }
        await this.userRepository.remove(user);
        return user;
    }
}
