import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';
export class MoneyQuery {
  @Expose()
  @IsNumber()
  user_id: number;

  @Expose()
  @IsNumber()
  amount: number;
}
