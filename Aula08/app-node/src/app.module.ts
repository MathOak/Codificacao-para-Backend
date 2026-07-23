import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvidadosModule } from './convidados/convidados.module';

@Module({
  imports: [ConvidadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
