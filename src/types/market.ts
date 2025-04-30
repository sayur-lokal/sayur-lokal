export type Market = {
    id: number;
    sellerId: number;
    name: string;
    description: string;
    locationDetails?: {
      region: string;
      postalCode: string;
    };
  };