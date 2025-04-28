import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { CartItem } from "@/redux/features/cart-slice";
import Price from "@/components/Price";
import Product from "./Product";

const OrderList = () => {

    const cartItems: CartItem[] = useAppSelector((state) => state.cartReducer.items);
    const total = useSelector(selectTotalPrice);

    const shippingFee = 15;
    return (
        <div className="bg-white shadow-1 rounded-[10px]">
            <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                <h3 className="font-medium text-xl text-dark">
                    Your Order
                </h3>
            </div>

            <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                {/* <!-- title --> */}
                <div className="flex items-center justify-between py-5 border-b border-gray-3">
                    <div>
                        <h4 className="font-medium text-dark">Product</h4>
                    </div>
                    <div>
                        <h4 className="font-medium text-dark text-right">
                            Subtotal
                        </h4>
                    </div>
                </div>

                {cartItems.map((item: CartItem) => <Product key={item.id} name={item.title} price={item.price} />)}


                {/* <!-- product item --> */}
                <div className="flex items-center justify-between py-5 border-b border-gray-3">
                    <div>
                        <p className="text-dark">Shipping Fee</p>
                    </div>
                    <div>
                        <p className="text-dark text-right">
                            <Price price={shippingFee} />
                        </p>
                    </div>
                </div>

                {/* <!-- total --> */}
                <div className="flex items-center justify-between pt-5">
                    <div>
                        <p className="font-medium text-lg text-dark">Total</p>
                    </div>
                    <div>
                        <p className="font-medium text-lg text-dark text-right">
                            <Price price={total + shippingFee} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList