import { Controller, Get, Post } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';

@Controller()
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get('movimentacao')
  listarMovimentacao() {
    return this.movimentacaoService.listarMovimentacoes();
  }
}
