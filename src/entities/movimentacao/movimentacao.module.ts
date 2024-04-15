import { Module } from "@nestjs/common";
import { MovimentacaoController } from "./movimentacao.controller"; 
import { MovimentacaoService } from "./movimentacao.service"; 
import { PrismaService } from "src/database/prisma/prisma.service";
@Module({
    controllers:[MovimentacaoController],
    providers: [MovimentacaoService,PrismaService],
    exports: [PrismaService]
})
export class MovimentacaoModule {}