export interface Ship {
  name: string,
  manufacturer: string,
  size: string,
  baseCost?: number
};

export enum ShipSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
};
