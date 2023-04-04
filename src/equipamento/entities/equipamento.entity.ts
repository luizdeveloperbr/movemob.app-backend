
import {Prisma} from '@prisma/client'
import {Usuario} from '../../usuario/entities/usuario.entity'
import {Setor} from '../../setor/entities/setor.entity'


export class Equipamento {
  id: number ;
codigo: number  | null;
filial: number  | null;
descricao: string  | null;
valor: Prisma.Decimal  | null;
setor_id: number  | null;
usuario?: Usuario  | null;
setor?: Setor  | null;
}
