import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConvidadosService } from './convidados.service';
import { CreateConvidadoDto } from './dto/create-convidado.dto';

// convidados.controller.ts
@Controller('convidados')
export class ConvidadosController {
  constructor(private readonly convidadosService: ConvidadosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convidadosService.getUserById(id);
  }
  @Get()
  findAll() {
    return this.convidadosService.getAll();
  }

  @Post()
  create(@Body() createConvidadoDto: CreateConvidadoDto) {
    return this.convidadosService.postOneGuest(createConvidadoDto);
  }
}
