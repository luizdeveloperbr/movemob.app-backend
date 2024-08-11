import { ApiProperty } from "@nestjs/swagger"

export class Department {
    @ApiProperty()
    id: number

    @ApiProperty()
    descricao: string
    
    @ApiProperty()
    filial_id: number
}