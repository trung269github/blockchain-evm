import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransactionService } from './transactions.service'; 
import { CreateTransactionDto } from './dto/CreateTransactionDto'; 

@Controller('transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

  @Get('balance')
  async getAccountBalance(@Body('walletAddress') walletAddress: string) {
    try {
      const balance = await this.transactionService.getTokenBalance(walletAddress);
      return { walletAddress, balance };
    } catch (error) {
      throw error; 
    }
  }

  
}
