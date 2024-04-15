import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { FilialService } from "./filial.services";
import { FilialController } from "./filial.controller";
import { SetorService } from "../setor/setor.service";
@Module({
    providers: [PrismaService, FilialService, SetorService],
    controllers: [FilialController],
    exports: [PrismaService,]
})

export class FilialModule {}