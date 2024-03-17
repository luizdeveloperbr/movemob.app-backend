import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { PrismaService } from "src/database/prisma/prisma.service";

@Module({
    providers: [UsuarioService, PrismaService],
    exports: [UsuarioService, PrismaService]
})

export class UsuarioModule {}