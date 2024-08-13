import { Produk } from 'src/produk/entities/produk.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kategori {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nama_kategori: string;

  @OneToMany(() => Produk, (produk) => produk.kategoris)
  produk: Produk[];
}
