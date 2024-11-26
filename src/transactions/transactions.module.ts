import { Module } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { TransactionController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'ethers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]), // Register the Transaction entity
  ],
  providers: [TransactionService],
  controllers: [TransactionController],
  exports: [TransactionService]
})
export class TransactionsModule {}
