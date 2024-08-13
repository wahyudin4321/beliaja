import { Injectable } from '@nestjs/common';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produk } from './entities/produk.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdukService {
  constructor(
    @InjectRepository(Produk) private produkRepo: Repository<Produk>,
  ) {}

  create(createProdukDto: CreateProdukDto) {
    const produk = new Produk();
    produk.nama_produk = createProdukDto.nama_produk;
    produk.jumlah = createProdukDto.jumlah;
    produk.harga_beli = createProdukDto.harga_beli;
    produk.harga_jual = createProdukDto.harga_jual;
    produk.kategoris = createProdukDto.kategoris;
    produk.suplier = createProdukDto.suplier;
    return this.produkRepo.save(produk);
  }

  findAll() {
    return this.produkRepo.find({
      relations: { kategoris: true, suplier: true },
    });
  }

  findOne(id: string) {
    return this.produkRepo.findOne({
      where: { id: id },
      relations: { kategoris: true, suplier: true },
    });
  }

  async update(id: string, updateProdukDto: UpdateProdukDto) {
    const produk = new Produk();
    produk.nama_produk = updateProdukDto.nama_produk;
    produk.jumlah = updateProdukDto.jumlah;
    produk.harga_beli = updateProdukDto.harga_beli;
    produk.harga_jual = updateProdukDto.harga_jual;
    produk.kategoris = updateProdukDto.kategoris;
    produk.suplier = updateProdukDto.suplier;

    return await this.produkRepo
      .update({ id: id }, produk)
      .then(() => {
        return 'success update';
      })
      .catch((error) => {
        return error;
      });
  }

  async remove(id: string) {
    return await this.produkRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error) => {
        return error;
      });
  }
}
