export type Market = {
    id: number;
    name: string;
    description: string;
    locationDetails: {
      region: string;
      postalCode: string;
    };
  };