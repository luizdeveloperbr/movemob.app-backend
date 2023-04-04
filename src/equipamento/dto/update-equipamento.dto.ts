
import {Prisma} from '@prisma/client'




export class UpdateEquipamentoDto {
  codigo?: number;
descricao?: string;
valor?: Prisma.Decimal;
}
