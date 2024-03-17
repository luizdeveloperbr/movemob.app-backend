import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { PrismaService } from "src/database/prisma/prisma.service";
import { UsuarioController } from "./usuario.controller";
import { AuthService } from "src/auth/auth.service";

@Module({
    providers: [UsuarioService, PrismaService, AuthService],
    controllers: [UsuarioController],
    exports: [UsuarioService, PrismaService]
})

export class UsuarioModule {}