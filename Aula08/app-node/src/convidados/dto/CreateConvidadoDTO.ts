import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateConvidadoDTO {
  @IsString({ message: "O nome deve ser uma string." })
  nome: string;

  @IsEmail({}, { message: 'Forneça um e-mail válido.' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  senha: string;

}