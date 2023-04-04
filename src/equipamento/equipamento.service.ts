import { Injectable } from '@nestjs/common';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipamentoService {

  constructor(private readonly prismaService: PrismaService) { }

  create(createEquipamentoDto: CreateEquipamentoDto) {
    return 'This action adds a new equipamento';
  }

  async findAll() {
    return this.prismaService.equipamento.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} equipamento`;
  }

  update(id: number, updateEquipamentoDto: UpdateEquipamentoDto) {
    return `This action updates a #${id} equipamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipamento`;
  }
}
