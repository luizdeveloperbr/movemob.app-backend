import { SubsidiaryService } from "./subsidiary.services";
import { SetorService } from "../setor/setor.service"
import { Controller, Get, Param } from '@nestjs/common'
import { Department } from "../setor/dto/DepartmentDto";
import { Subsidiary } from "./dto/SubsidiaryDto";

@Controller('subsidiary')
export class SubsidiaryController {
    constructor(
        private readonly filialService: SubsidiaryService,
        private readonly setorService: SetorService
    ) { }

    @Get()
    listSubsidiaries(): Promise<(Subsidiary & {setor: Department[]})[]> {
        return this.filialService.listSubsidiary()
    }
    @Get('/:id/department')
    listDepartmentBySubsidiary(@Param('id') filial: number) {
        return this.setorService.listarSetorPorFilial({id: Number(filial)})
    }
}