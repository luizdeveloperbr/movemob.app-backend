import { Controller, Get } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';

@Controller()
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get('movimentacoes')
  listarMovimentacao() {
    return this.movimentacaoService.listarMovimentacoes();
  }
}
