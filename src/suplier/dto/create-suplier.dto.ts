import { ApiProperty } from '@nestjs/swagger';
import { Suplier } from '../entities/suplier.entity';
import { Produk } from 'src/produk/entities/produk.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuplierDto implements Suplier {
  produk: Produk[];
  id: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nama: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  alamat: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  no_hp: string;
}
