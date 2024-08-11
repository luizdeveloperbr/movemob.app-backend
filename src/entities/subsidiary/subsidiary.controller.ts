import { SubsidiaryService } from "./subsidiary.services";
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { SetorService } from "../setor/setor.service"
import { Controller, Get, Param, } from '@nestjs/common'
// import { Department } from "../setor/dto/DepartmentDto";
import { Subsidiary } from "./dto/SubsidiaryDto";

@ApiTags('Subsidiary')
@Controller('subsidiary')
export class SubsidiaryController {
    constructor(
        private readonly filialService: SubsidiaryService,
        private readonly setorService: SetorService
    ) { }

    @Get()
    @ApiResponse({
        type: Subsidiary,
        isArray: true,
        status: 200,
        description: 'List all subsidiaries'
    })
    listSubsidiaries()/**: Promise<Subsidiary[]> */{
        return this.filialService.listSubsidiary()
    }

    @Get('/:id/department')
    listDepartmentBySubsidiary(@Param('id') filial: number)/**: Promise<(Subsidiary & {departamento: Department[]})>*/ {
        return this.setorService.listarSetorPorFilial({id: Number(filial)})
    }
}