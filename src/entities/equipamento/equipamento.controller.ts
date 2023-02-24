import { Body, Controller, Get, Post } from '@nestjs/common';
import {EquipamentoService} from '../equipamento/equipamento.services'
import { Equipamento as EquipamentoModel } from '@prisma/client';



@Controller('equipamentos')

export class EquipamentoController {
    
  constructor(private readonly equipamentoService : EquipamentoService) { }

  @Get()
  listarEquipamentos() {
    return this.equipamentoService.listarEquipamentos()
  }
  @Post()
  adicionarEquipamento(@Body() novoEquipamento: EquipamentoModel){
    return this.equipamentoService.adicionarEquipamento(novoEquipamento)
  }

}
