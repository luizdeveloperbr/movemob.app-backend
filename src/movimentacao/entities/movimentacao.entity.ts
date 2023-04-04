
import {status_mov} from '@prisma/client'
import {Usuario} from '../../usuario/entities/usuario.entity'
import {Setor} from '../../setor/entities/setor.entity'
import {Agenda} from '../../agenda/entities/agenda.entity'


export class Movimentacao {
  id: number ;
status: status_mov  | null;
data_envio: Date  | null;
data_retorno: Date  | null;
setor_id: number  | null;
observacao: string  | null;
remetente_id: number  | null;
destinatario_id: number  | null;
equipamentos_id: number[] ;
tipo: number  | null;
usuario_movimentacao_destinatario_idTousuario?: Usuario  | null;
usuario_movimentacao_remetente_idTousuario?: Usuario  | null;
setor?: Setor  | null;
agenda?: Agenda  | null;
}
