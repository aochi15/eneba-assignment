export interface DbGame {
  id: number;
  name: string;
  image_file_name: string;
  key_type: string;
  platform: string;
  region: string;
  price: string;
  discount: number | undefined;
  cashback: number | undefined;
  wishlistCount: number;
}

export class Game {
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

  public constructor(
    id: number,
    name: string,
    imageFileName: string,
    keyType: string,
    platform: string,
    region: string,
    price: number,
    discount: number | undefined,
    cashback: number | undefined,
    wishlistCount: number,
  ) {
    this.id = id;
    this.name = name;
    this.imageFileName = imageFileName;
    this.keyType = keyType;
    this.platform = platform;
    this.region = region;
    this.price = price;
    this.discount = discount;
    this.cashback = cashback;
    this.wishlistCount = wishlistCount;
  }

  public static fromDbGame(dbGame: DbGame): Game {
    return new Game(
      dbGame.id,
      dbGame.name,
      dbGame.image_file_name,
      dbGame.key_type,
      dbGame.platform,
      dbGame.region,
      Number(dbGame.price),
      dbGame.discount,
      dbGame.cashback,
      dbGame.wishlistCount,
    );
  }
}
