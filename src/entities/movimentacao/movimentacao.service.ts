import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma/prisma.service";
import { Movimentacao as MovimentacaoModel } from "@prisma/client"

@Injectable()

export class MovimentacaoService {

    constructor(private readonly prismaService: PrismaService) { }

    async listarMovimentacoes(): Promise<MovimentacaoModel> {
        const movimentacao = this.prismaService.movimentacao.findFirst({
            where: { remetente_id: 124 },
            include: {
                Setor: true,
                Filial_Movimentacao_destinatario_idToFilial: true
            }
        })
        return movimentacao
    }
}