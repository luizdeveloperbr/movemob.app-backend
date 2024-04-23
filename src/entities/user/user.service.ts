import { Injectable } from "@nestjs/common";
import { usuario } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";
@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) { }
    async getUser(email: string): Promise<any> {
        return this.prismaService.usuario.findUnique({
            where: {
                email: email
            }
        })
    }
    async addUser(userInformations: usuario): Promise<any> {
        try {
        let createdUser = await this.prismaService.usuario.create({
                data: userInformations
            })
            return createdUser
        }
        catch (erro) {
            return erro.code
        }
    }
}