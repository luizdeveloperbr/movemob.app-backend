import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EquipamentoService } from '../equipamento/equipamento.services';
import { equipamento as EquipamentoModel } from '@prisma/client';

@Controller('equipamentos')
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
}
