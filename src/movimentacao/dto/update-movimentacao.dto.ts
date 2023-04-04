
import {status_mov} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateMovimentacaoDto {
  @ApiProperty({ enum: status_mov})
status?: status_mov;
data_envio?: Date;
data_retorno?: Date;
observacao?: string;
equipamentos_id?: number[];
}
