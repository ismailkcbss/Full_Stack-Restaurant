import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class ForgotPasswordDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
}

export class NewPasswordDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}