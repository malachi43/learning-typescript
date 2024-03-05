export class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

export enum SPORT {
  Running,
  Soccer,
  WaterSports,
  Other,
}

export class SportProduct extends Product {
  private _sports: SPORT[];
  constructor(
    public id: number,
    public name: string,
    public price: number,
    ...sportsArray: SPORT[]
  ) {
    super(id, name, price);
    this._sports = sportsArray;
  }

  usedForSport(s: SPORT): boolean {
    return this._sports.includes(s);
  }

  get sports(): SPORT[] {
    return this._sports;
  }
}

const sport = new SportProduct(
  12,
  "soccer",
  343,
  SPORT.Running,
  SPORT.Running,
  SPORT.WaterSports
);
