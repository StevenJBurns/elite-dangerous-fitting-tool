export interface Ship {
  name: string,
  manufacturer: string,
  size: string,
  baseCost?: number
};

export enum ShipSize {
  S = "S",
  M = "M",
  L = "L"
};
