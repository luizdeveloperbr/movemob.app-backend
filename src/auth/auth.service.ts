import * as bcrypt from 'bcrypt'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/entities/usuario/usuario.service';

type createUsuario = {
  nome: string
  cargo: string
  email: string
  password: string
  filial_id: number
  setor_id: number
}

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) { }

  async signIn(email: string, pass: string) {
    const user = await this.usuarioService.findOne(email)
    const decodedPass = await bcrypt.compare(pass, user?.password)
    if (user && decodedPass) {
      const { password, ...result } = user;
      // TODO: Generate a JWT and return it here
      // instead of the user object
      return result;
    }
    throw new UnauthorizedException();
  }
  async signUp(createUsuarioDto: createUsuario) {
    const hashPassword = await bcrypt.hash(createUsuarioDto.password, process.env.ENCRYPT_SALT)
    const data = Object.assign(createUsuarioDto,{password: hashPassword})
    this.usuarioService.createUsuario(data)
  }
}
