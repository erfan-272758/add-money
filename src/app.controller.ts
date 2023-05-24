import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MoneyQuery } from 'DTO/money.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/money')
  getBalance(@Query() { amount, user_id }: MoneyQuery) {
    return this.appService.getMoney(user_id, amount);
  }
}
