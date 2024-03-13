import { Controller, Get, Param } from '@nestjs/common';
import { SetorService } from './setor.service';

@Controller()
export class SetoresController {
  constructor(private readonly SetoresService: SetorService) {}

  @Get('setores')
  listarSetores() {
    return this.SetoresService.listarSetores();
  }  
}