import { FilialService } from "./filial.services";
import { Controller, Get } from '@nestjs/common'

@Controller('filial')
export class FilialController {
    constructor (private readonly filialService: FilialService){}

    @Get()
    listarFiliais(){
        return this.filialService.listarFiliais()
    }
}