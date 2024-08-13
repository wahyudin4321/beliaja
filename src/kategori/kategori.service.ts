import { Injectable } from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kategori } from './entities/kategori.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KategoriService {
  constructor(
    @InjectRepository(Kategori) private kategoriRepo: Repository<Kategori>,
  ) {}

  create(createKategoriDto: CreateKategoriDto) {
    const kategori = new Kategori();
    kategori.nama_kategori = createKategoriDto.nama_kategori;

    return this.kategoriRepo.save(kategori);
  }

  findAll() {
    return this.kategoriRepo.find();
  }

  findOne(id: string) {
    return this.kategoriRepo.findOneBy({ id: id });
  }

  async update(id: string, updateKategoriDto: UpdateKategoriDto) {
    const kategori = new Kategori();
    kategori.nama_kategori = updateKategoriDto.nama_kategori;

    return await this.kategoriRepo
      .update({ id: id }, kategori)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }

  async remove(id: string) {
    return await this.kategoriRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error) => {
        return error;
      });
  }
}
