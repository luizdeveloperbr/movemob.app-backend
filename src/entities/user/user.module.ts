import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { UserService } from "./user.service";
@Module({
    providers: [PrismaService, UserService],
    exports: [PrismaService]
})
export class UserModule {}