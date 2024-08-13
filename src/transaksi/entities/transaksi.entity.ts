import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaksi {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  jml: number;

  @Column()
  harga_jual: number;

  @Column()
  total: string;

  @OneToMany(
    () => DetailTransaksi,
    (detailTransaksi) => detailTransaksi.transaksis,
  )
  detailTransaksi: DetailTransaksi[];
}

@Entity()
export class DetailTransaksi {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Transaksi, (transaksi) => transaksi.detailTransaksi)
  transaksis: Transaksi;
}
