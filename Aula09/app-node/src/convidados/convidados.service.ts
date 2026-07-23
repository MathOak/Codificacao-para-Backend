import { Injectable } from '@nestjs/common';
import { CreateConvidadoDto } from './dto/create-convidado.dto';
import { ConvidadoEntity } from './convidado.entity';

const convidadoList: ConvidadoEntity[] = [];

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
  updateAgeById(id: number, age: number) {
    const convidado: ConvidadoEntity | undefined = convidadoList.find(
      (conv) => conv.id === id
    );
    if (!convidado) throw new Error();

    convidado.idade = age;

    return {
      message: 'Convidado alterado com sucesso',
      data: convidado,
    };
  }
  deleteConvidadoById(id: number) {
    const convidado: ConvidadoEntity | undefined = convidadoList.find(
      (conv) => conv.id === id
    );

    if (!convidado) throw new Error();

    convidadoList.filter((conv) => conv.id === id);
  }
}
