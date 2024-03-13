import { Injectable } from "@nestjs/common";
import { usuario } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class UsuarioService {
    constructor(private readonly prismaService: PrismaService) {}
    async buscarUsuarios({email}: {email: string}): Promise<usuario | null> {
        const response = await this.prismaService.usuario.findUnique({
            where: {
                email: email
            }
        })
        return response
    }
}