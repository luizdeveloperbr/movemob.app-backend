import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SetorService } from './setor.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller()
export class SetoresController {
  constructor(private readonly SetoresService: SetorService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('setores')
  listarSetores() {
    return this.SetoresService.listarSetores();
  }  
}