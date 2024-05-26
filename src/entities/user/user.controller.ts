import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UserService) {}
    @Get('/:id')
    async getUsuario(@Param('id') id: number) {
        return await this.usuarioService.getUserById(id)
    }
}