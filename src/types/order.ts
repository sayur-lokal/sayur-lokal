export type Order = {
    id: number;
    buyerId: number;
    totalPrice: number;
    status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
    paymentMethod: "cash" | "e-wallet" | "transfer-bank" | "qris" | "virtual-account";
    orderAddress: string;
    createdAt: string;
    updatedAt: string;
};