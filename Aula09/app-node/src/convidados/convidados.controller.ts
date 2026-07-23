import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConvidadosService } from './convidados.service';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { UpdateConvidadoDto } from './dto/update-convidado.dto';

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

  @Patch(':id')
  partialUpdate(
    @Param('id') id: string,
    @Body() body: Partial<UpdateConvidadoDto>
  ) {
    const age = body.idade || 0;
    return this.convidadosService.updateAgeById(+id, age);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.convidadosService.deleteConvidadoById(+id);
  }
}
