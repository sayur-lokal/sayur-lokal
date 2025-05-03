"use client"
import React, { useState } from "react";

// Define order status types
type OrderStatus = "New" | "Packed" | "Out for Delivery" | "Completed" | "Cancelled";

// Define order interface
interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  status: OrderStatus;
  totalAmount: number;
  items: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
  shippingAddress: string;
  paymentMethod: string;
}

// Dummy orders data
const dummyOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Budi Santoso",
    orderDate: "2025-04-28",
    status: "New",
    totalAmount: 125000,
    items: [
      { id: 101, name: "Telur Ayam Fresh 1 Krat", quantity: 1, price: 57000 },
      { id: 103, name: "Ubi Ungu 1 kg", quantity: 2, price: 26000 }
    ],
    shippingAddress: "Jl. Merdeka No. 123, Jakarta Selatan",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "ORD-002",
    customerName: "Siti Rahayu",
    orderDate: "2025-04-27",
    status: "Packed",
    totalAmount: 74000,
    items: [
      { id: 102, name: "Topi Koki Beras Setra Ramos 5 kg", quantity: 1, price: 74000 }
    ],
    shippingAddress: "Jl. Pahlawan No. 45, Jakarta Timur",
    paymentMethod: "COD"
  },
  {
    id: "ORD-003",
    customerName: "Ahmad Hidayat",
    orderDate: "2025-04-26",
    status: "Out for Delivery",
    totalAmount: 109000,
    items: [
      { id: 101, name: "Telur Ayam Fresh 1 Krat", quantity: 1, price: 57000 },
      { id: 102, name: "Topi Koki Beras Setra Ramos 5 kg", quantity: 1, price: 52000 }
    ],
    shippingAddress: "Jl. Sudirman No. 78, Jakarta Pusat",
    paymentMethod: "E-Wallet"
  },
  {
    id: "ORD-004",
    customerName: "Dewi Lestari",
    orderDate: "2025-04-25",
    status: "Completed",
    totalAmount: 83000,
    items: [
      { id: 103, name: "Ubi Ungu 1 kg", quantity: 1, price: 26000 },
      { id: 101, name: "Telur Ayam Fresh 1 Krat", quantity: 1, price: 57000 }
    ],
    shippingAddress: "Jl. Gatot Subroto No. 56, Jakarta Selatan",
    paymentMethod: "Bank Transfer"
  },
  {
    id: "ORD-005",
    customerName: "Rudi Hartono",
    orderDate: "2025-04-24",
    status: "Cancelled",
    totalAmount: 74000,
    items: [
      { id: 102, name: "Topi Koki Beras Setra Ramos 5 kg", quantity: 1, price: 74000 }
    ],
    shippingAddress: "Jl. Kebon Jeruk No. 12, Jakarta Barat",
    paymentMethod: "Credit Card"
  }
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All">("All");

  // Filter orders based on status
  const filteredOrders = statusFilter === "All" 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  // Update order status
  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  // Open order details modal
  const openOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Get status badge color
  const getStatusBadgeClass = (status: OrderStatus) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800";
      case "Packed": return "bg-yellow-100 text-yellow-800";
      case "Out for Delivery": return "bg-purple-100 text-purple-800";
      case "Completed": return "bg-green-100 text-green-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-dark">Manage Orders</h1>
        <div className="flex gap-2">
          <select 
            className="border border-gray-3 rounded-md p-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "All")}
          >
            <option value="All">All Orders</option>
            <option value="New">New</option>
            <option value="Packed">Packed</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-md border border-gray-3 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-3">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-3">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.orderDate).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(order.totalAmount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => openOrderDetails(order)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View Details
                    </button>
                    <select 
                      className="border border-gray-3 rounded-md p-1 text-sm"
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                    >
                      <option value="New">New</option>
                      <option value="Packed">Packed</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Order Details: {selectedOrder.id}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Customer</p>
                <p className="font-medium">{selectedOrder.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium">{new Date(selectedOrder.orderDate).toLocaleDateString('id-ID')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className={`inline-flex px-2 text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium">{selectedOrder.paymentMethod}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Shipping Address</p>
                <p className="font-medium">{selectedOrder.shippingAddress}</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Order Items</h3>
              <table className="min-w-full divide-y divide-gray-3">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-3">
                  {selectedOrder.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {item.quantity}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(item.price)}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(item.price * item.quantity)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td colSpan={3} className="px-4 py-2 text-sm font-medium text-right">
                      Total:
                    </td>
                    <td className="px-4 py-2 text-sm font-medium">
                      {formatCurrency(selectedOrder.totalAmount)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="flex justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Update Status
                </label>
                <select 
                  className="border border-gray-3 rounded-md p-2"
                  value={selectedOrder.status}
                  onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value as OrderStatus)}
                >
                  <option value="New">New</option>
                  <option value="Packed">Packed</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}