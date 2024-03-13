import { FilialService } from "./filial.services";
import { SetorService } from "../setor/setor.service"
import { Controller, Get, Param } from '@nestjs/common'

@Controller('filial')
export class FilialController {
    constructor(private readonly filialService: FilialService, private readonly setorService: SetorService) { }

    @Get()
    listarFiliais() {
        return this.filialService.listarFiliais()
    }
    @Get('/:id/setores')
    listarSetoresPorFilial(@Param('id') filial: number) {
        return this.setorService.listarSetorPorFilial({id: Number(filial)})
    }
}