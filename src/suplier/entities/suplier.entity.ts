import { Produk } from 'src/produk/entities/produk.entity';
import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Suplier {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nama: string;

  @Column()
  alamat: string;

  @Column()
  email: string;

  @Column()
  no_hp: string;

  @OneToMany(() => Produk, (produk) => produk.suplier)
  produk: Produk[];
}
