import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvidadosService {
  getUserById(id: string) {
    return { id, name: 'João Silva' };
  }
  getAll() {
    const guests = ['Ana', 'Bruno', 'Carlos'];
    return guests;
  }
}
