import { Module } from "@nestjs/common";
import { EquipamentoController } from "./equipamento.controller";
import { EquipamentoService } from "./equipamento.services";
import { PrismaService } from "src/database/prisma/prisma.service";
@Module({
    controllers:[EquipamentoController],
    providers: [EquipamentoService,PrismaService],
    exports: [PrismaService]
})
export class EquipamentoModule {}