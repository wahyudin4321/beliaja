import { ApiProperty } from '@nestjs/swagger';
import { Kategori } from '../entities/kategori.entity';
import { Produk } from 'src/produk/entities/produk.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKategoriDto implements Kategori {
  produk: Produk[];
  id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nama_kategori: string;
}
