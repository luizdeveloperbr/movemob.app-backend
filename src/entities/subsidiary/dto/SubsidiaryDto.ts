import { ApiProperty } from "@nestjs/swagger";
import { Department } from "src/entities/setor/dto/DepartmentDto";
export class Subsidiary {
    @ApiProperty()
    id: number;

    @ApiProperty()
    descricao: string

    @ApiProperty({isArray: true, type: Department})
    setor: Department[]
}