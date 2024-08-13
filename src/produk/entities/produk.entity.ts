import { Kategori } from 'src/kategori/entities/kategori.entity';
import { Suplier } from 'src/suplier/entities/suplier.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produk {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nama_produk: string;

  @Column('int')
  jumlah: number;

  @Column()
  harga_beli: string;

  @Column()
  harga_jual: string;

  @ManyToOne(() => Kategori, (kategori) => kategori.produk)
  kategoris: Kategori;

  @ManyToOne(() => Suplier, (suplier) => suplier.produk)
  suplier: Suplier;
}
