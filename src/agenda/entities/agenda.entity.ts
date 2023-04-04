
import {Movimentacao} from '../../movimentacao/entities/movimentacao.entity'


export class Agenda {
  id: number ;
descricao: string  | null;
natureza: string  | null;
movimentacao?: Movimentacao[] ;
}
