import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from './typeorm/entities/Block';
import { Transaction } from 'typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BlocksModule } from './blocks/blocks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type: 'mysql',
    host: 'mysql_db',
    port: 3306,
    username: 'root',
    password: 'trung26903',
    database: 'training',
    entities: [User, Transaction, Block],
    synchronize: true,
    }
  ), UsersModule, TransactionsModule, BlocksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
