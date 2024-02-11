import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
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
  async selecionarEquipamentoPeloId(@Param('id') id: number) {
    const data = await this.equipamentoService.selecionarEquipamentoPeloId(Number(id));
    if(data){
      return data
    }else{
      throw new HttpException("Não Encontrado", HttpStatus.NOT_FOUND)
    }
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
