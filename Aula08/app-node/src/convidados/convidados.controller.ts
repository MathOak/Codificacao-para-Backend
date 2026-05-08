import { Controller, Get, Param } from '@nestjs/common';
import { ConvidadosService } from './convidados.service';

// convidados.controller.ts
@Controller('convidados')
export class ConvidadosController {
  constructor(private readonly convidadosService: ConvidadosService) { }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convidadosService.getUserById(id);
  }
  @Get()
  findAll() {
    return this.convidadosService.getAll();
  }

  @Post()
  
}
