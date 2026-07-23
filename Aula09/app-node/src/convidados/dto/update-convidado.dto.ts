import { IsNumber } from 'class-validator';

export class UpdateConvidadoDto {
  @IsNumber({}, { message: 'Insira uma idade válido.' })
  idade!: number;
}
