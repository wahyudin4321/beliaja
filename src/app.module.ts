import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { KategoriModule } from './kategori/kategori.module';
import { Kategori } from './kategori/entities/kategori.entity';
import { SuplierModule } from './suplier/suplier.module';
import { Suplier } from './suplier/entities/suplier.entity';
import { ProdukModule } from './produk/produk.module';
import { Produk } from './produk/entities/produk.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TransaksiModule } from './transaksi/transaksi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'beliajanew',
      entities: [User, Kategori, Suplier, Produk],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    KategoriModule,
    SuplierModule,
    ProdukModule,
    AuthModule,
    TransaksiModule,
  ],
})
export class AppModule {}
