import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { Department } from "../setor/dto/DepartmentDto";
import { Subsidiary } from "./dto/SubsidiaryDto";

@Injectable()
export class SubsidiaryService {
    constructor(private readonly prismaService: PrismaService) { }
    async listSubsidiary()/** : Promise<Subsidiary[]>*/ {
        return this.prismaService.filial.findMany({
            include:{
                setor: {
                    select: {
                        descricao: true
                    }
                }
            }
        })
    }
}
