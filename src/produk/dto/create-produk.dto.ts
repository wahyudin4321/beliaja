import { Kategori } from 'src/kategori/entities/kategori.entity';
import { Produk } from '../entities/produk.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Suplier } from 'src/suplier/entities/suplier.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProdukDto implements Produk {
  id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama_produk: string;
  @ApiProperty()
  jumlah: number;
  @ApiProperty()
  harga_beli: string;
  @ApiProperty()
  harga_jual: string;
  @ApiProperty()
  @IsNotEmpty()
  kategoris: Kategori;
  @ApiProperty()
  @IsNotEmpty()
  suplier: Suplier;
}
