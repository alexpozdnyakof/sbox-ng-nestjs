import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  rating: number;

  @Column()
  category: string;
}
