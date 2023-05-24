import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Money {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  amount: number;
}
