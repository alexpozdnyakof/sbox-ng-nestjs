import { Document } from 'mongoose';

export interface Product {
  readonly id?: number;
  readonly company: string;
  readonly title: string;
  readonly price: number;
  readonly image: string;
  readonly rating: number;
  readonly category: string;
}
