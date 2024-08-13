import { Injectable, NotFoundException } from '@nestjs/common';
import { DoLoginhDto } from './dto/do-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async create(doLogin: DoLoginhDto) {
    const items = await this.userRepo.findOne({
      where: { email: doLogin.email },
    });

    if (!items) {
      throw new NotFoundException('Email Not Found!');
    }

    if (!bcrypt.compareSync(doLogin.password, items.password)) {
      console.log('not oke');

      throw new NotFoundException('Password Incorect!');
    }

    try {
      const token = await this.jwtService.signAsync(
        { sub: items.id, email: items.email },
        { secret: this.config.get<string>('secret'), expiresIn: '24h' },
      );
      return { access_token: token };
    } catch (error) {
      return 'failed login';
    }
  }
}
