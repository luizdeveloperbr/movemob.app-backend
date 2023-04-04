
import {Prisma} from '@prisma/client'




export class CreateEquipamentoDto {
  id: number;
codigo?: number;
descricao?: string;
valor?: Prisma.Decimal;
}
