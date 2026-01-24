export interface Game {
  id: number;
  name: string;
  imageFileName: string;
  keyType: string;
  platform: string;
  region: string;
  price: number;
  discount: number | undefined;
  cashback: number | undefined;
  wishlistCount: number;
}
