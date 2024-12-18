import { Controller, Body, Get } from '@nestjs/common';
import { TransactionService } from './transactions.service'; 


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
