import { Body, Controller, NotFoundException, Post } from "@nestjs/common";

import { UsuarioService } from "src/entities/usuario/usuario.service";
@Controller('auth')
export class AuthController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Post('/login')
   async login(@Body() requestBody: {email: string}) {
       const usuario = await this.usuarioService.buscarUsuarios(requestBody)
       if(!usuario){
           throw new NotFoundException()
       }
           return usuario
    }
}