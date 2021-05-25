export class CreateProductDTO {
  readonly _id?: string;
  readonly company: string;
  readonly title: string;
  readonly price: number;
  readonly image: string;
  readonly rating: number;
  readonly category: string;
}
