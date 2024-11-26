import { Module } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { TransactionController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'ethers';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { UserController } from 'src/users/users.controller';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, User]),
    UsersModule
  ],
  providers: [TransactionService, UsersService],
  controllers: [TransactionController, UserController],
  exports: [TransactionService]
})
export class TransactionsModule {}
