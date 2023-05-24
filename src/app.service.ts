import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Money } from 'Entity/money.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Money) private moneyRepo: Repository<Money>) {}
  async getBalance(user_id: number, amount: number) {
    const m = await this.moneyRepo.findOne({ where: { user_id, amount } });
    if (!m) throw new NotFoundException();
    return { reference_id: m.id };
  }
}
