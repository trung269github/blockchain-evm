import { IsNotEmpty, IsPositive } from "class-validator";

export class CreateTransactionDto {
    @IsNotEmpty()
    from: string;

    @IsNotEmpty()
    to: string;

    @IsPositive()
    amount: number;
}
