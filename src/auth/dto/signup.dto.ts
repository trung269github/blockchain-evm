import { IsNotEmpty } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    username: string;
    password: string;
    email: string;
}