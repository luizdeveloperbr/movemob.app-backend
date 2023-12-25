import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";


@Injectable()
export class FilialService {
    constructor(private readonly prismaService: PrismaService){}
    async listarFiliais(){
        return this.prismaService.filial.findMany({
            include:{
                setor: {
                    select: {
                        id: true,
                        descricao: true,
                        responsavel: true
                    }
                }
            }
        })
    }
}
