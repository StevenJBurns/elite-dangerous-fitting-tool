export interface Ship {
  name: string,
  manufacturer: string,
  baseCost: number
  size: string,
  crew?: number,
  
};

export enum ShipSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
};
