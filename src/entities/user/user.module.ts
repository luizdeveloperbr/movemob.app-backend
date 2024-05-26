import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { UserService } from "./user.service";
import { UsuarioController } from "./user.controller";
@Module({
    providers: [PrismaService, UserService],
    controllers: [UsuarioController],
    exports: [PrismaService]
})
export class UserModule {}