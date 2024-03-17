import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class UsuarioService {

  constructor(private prismaService: PrismaService) { }
  async findOne(email: string): Promise<any | undefined> {
    return this.prismaService.usuario.findUnique({
      where: { email }
    })
  }
  async createUsuario(createUsuarioData) {
    return this.prismaService.usuario.create({ data: createUsuarioData })
  }
}