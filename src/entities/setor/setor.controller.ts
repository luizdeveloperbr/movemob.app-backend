import { Controller, Get, Param, Post } from '@nestjs/common';
import { SetorService } from './setor.service';

@Controller()
export class SetoresController {
  constructor(private readonly SetoresService: SetorService) {}

  @Get('setores')
  listarSetores() {
    return this.SetoresService.listarSetores();
  }
  @Get('setores/:id')
  listarSetorPorFilial(@Param('id') filial: number) {
      return this.SetoresService.listarSetorPorFilial(Number(filial)) 
    }   
}