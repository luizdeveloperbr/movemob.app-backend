
import {Equipamento} from '../../equipamento/entities/equipamento.entity'
import {Movimentacao} from '../../movimentacao/entities/movimentacao.entity'


export class Setor {
  id: number ;
descricao: string  | null;
responsavel: string  | null;
equipamento?: Equipamento[] ;
movimentacao?: Movimentacao[] ;
}
