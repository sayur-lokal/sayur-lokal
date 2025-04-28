export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "seller" | "buyer";
    address: string;
    createdAt: string;
};