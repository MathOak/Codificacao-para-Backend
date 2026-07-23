import { Injectable } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto';

@Injectable()
export class ConvidadosService {
  getUserById(id: string) {
    return { id, name: 'João Silva' };
  }
  getAll() {
    const guests = ['Ana', 'Bruno', 'Carlos'];
    return guests;
  }
  postOneGuest(guest: CreateConvidadoDto) {
    console.log(guest);
    return {
      message: 'Convidado criado com sucesso!',
      data: guest,
    };
  }
}
