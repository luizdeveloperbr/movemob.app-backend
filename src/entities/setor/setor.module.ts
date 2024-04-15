import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { SetoresController } from "./setor.controller"; 
import { SetorService } from "./setor.service"; 
@Module({
    providers: [PrismaService, SetorService],
    controllers: [SetoresController],
    exports: [PrismaService,]
})

export class SetorModule {}