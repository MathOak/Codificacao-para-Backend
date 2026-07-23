import { Module } from '@nestjs/common';
import { ConvidadosController } from './convidados.controller';
import { ConvidadosService } from './convidados.service';

@Module({
  imports: [],
  controllers: [ConvidadosController],
  providers: [ConvidadosService],
})
export class ConvidadosModule {}
