import { IsString, IsNumber } from 'class-validator';

export class CreateConvidadoDto {
  @IsString({ message: 'O nome deve ser uma string.' })
  nome!: string;

  @IsNumber({}, { message: 'Insira uma idade válido.' })
  idade!: number;
}
