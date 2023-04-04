
import {userid} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateUsuarioDto {
  nome?: string;
@ApiProperty({ enum: userid})
tipo?: userid;
setores_id?: number[];
}
