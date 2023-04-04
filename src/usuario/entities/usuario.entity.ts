
import {userid} from '@prisma/client'
import {Equipamento} from '../../equipamento/entities/equipamento.entity'
import {Movimentacao} from '../../movimentacao/entities/movimentacao.entity'


export class Usuario {
  id: number ;
nome: string  | null;
tipo: userid  | null;
setores_id: number[] ;
equipamento?: Equipamento[] ;
movimentacao_movimentacao_destinatario_idTousuario?: Movimentacao[] ;
movimentacao_movimentacao_remetente_idTousuario?: Movimentacao[] ;
}
