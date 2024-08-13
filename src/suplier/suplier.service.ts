import { Injectable } from '@nestjs/common';
import { CreateSuplierDto } from './dto/create-suplier.dto';
import { UpdateSuplierDto } from './dto/update-suplier.dto';
import { Suplier } from './entities/suplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuplierService {
  constructor(
    @InjectRepository(Suplier) private suplierRepo: Repository<Suplier>,
  ) {}
  create(createSuplierDto: CreateSuplierDto) {
    const suplier = new Suplier();
    suplier.nama = createSuplierDto.nama;
    suplier.alamat = createSuplierDto.alamat;
    suplier.email = createSuplierDto.email;
    suplier.no_hp = createSuplierDto.no_hp;
    return this.suplierRepo.save(suplier);
  }

  findAll() {
    return this.suplierRepo.find();
  }

  findOne(id: string) {
    return this.suplierRepo.findOneBy({ id: id });
  }

  async update(id: string, updateSuplierDto: UpdateSuplierDto) {
    const suplier = new Suplier();
    suplier.nama = updateSuplierDto.nama;
    suplier.alamat = updateSuplierDto.alamat;
    suplier.email = updateSuplierDto.email;
    suplier.no_hp = updateSuplierDto.no_hp;
    return await this.suplierRepo
      .update({ id: id }, suplier)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }

  async remove(id: string) {
    return await this.suplierRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error) => {
        return error;
      });
  }
}
