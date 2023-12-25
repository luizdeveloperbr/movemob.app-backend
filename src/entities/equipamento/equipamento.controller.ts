import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EquipamentoService } from '../equipamento/equipamento.services';
import { equipamento as EquipamentoModel } from '@prisma/client';

@Controller('equipamento')
export class EquipamentoController {
  constructor(private readonly equipamentoService: EquipamentoService) {}

  @Get()
  listarEquipamentos() {
    return this.equipamentoService.listarEquipamentos();
  }

  @Get('/:id')
  selecionarEquipamentoPeloId(@Param('id') id: number) {
    return this.equipamentoService.selecionarEquipamentoPeloId(Number(id));
  }
  @Post()
  adicionarEquipamento(@Body() novoEquipamento: EquipamentoModel) {
    return this.equipamentoService.adicionarEquipamento(novoEquipamento);
  }
  @Post('/:id')
  async transferirEquipamento(
    @Param('id') id: number,
    @Query('movimentacao') tipo: string,
    @Query('destino') destino: number,
  ) {
    let equipamento = await this.equipamentoService.selecionarEquipamentoPeloId(
      id,
    );

    return this.equipamentoService.transferirEquipamento(id, tipo, destino);
  }
}
