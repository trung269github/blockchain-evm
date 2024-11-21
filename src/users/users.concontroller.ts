import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "src/typeorm/entities/User";
import { CreateUserDto } from "./dto/CreateUserDto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UsersService) {

    }

    @Get()
    async getAllUsers(): Promise<User[]>{
const users = await this.userService.getAllUser();
return users;
    }

    @Get('id')
    async getUserById(@Param('id') id: string): Promise<User> {
        const user = await this.userService.getUserById(Number(id));
        return user;
    }

    @Post('register')
    async createUser(@Body() createUserDto: CreateUserDto){
        const newUser = await this.userService.createUser(createUserDto);
        return newUser;
    }

    @Delete(':id')
    async deleteById(@Param('id') id: number): Promise<User> {
        const user = this.userService.deleteById(Number(id));
        return user;
    }
}