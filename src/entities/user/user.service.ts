import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}
    async getUser(email: string): Promise<any>{
        return this.prismaService.usuario.findUnique({
            where: {
                email: email
            }
        })
    }
}