import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { SubsidiaryService } from "./subsidiary.services";
import { SubsidiaryController } from "./subsidiary.controller";
import { SetorService } from "../setor/setor.service";
@Module({
    providers: [PrismaService, SubsidiaryService, SetorService],
    controllers: [SubsidiaryController],
    exports: [PrismaService,]
})

export class SubsidiaryModule {}