"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import Product from "./Product";

import { useAppSelector } from "@/redux/store";
import { CartItem } from "@/redux/features/cart-slice";
import Price from "@/components/Price";

const Checkout = () => {

    const cartItems: CartItem[] = useAppSelector((state) => state.cartReducer.items);
    const total = cartItems.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);

    const shippingFee = 15;

    if (cartItems.length == 0) {
        return (
            <>
                <Breadcrumb title={"Checkout"} pages={["checkout"]} />
                <section className="overflow-hidden py-20 bg-gray-2">
                    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
                            {/* TODO: improve this text and styling */}
                            <div className="lg:max-w-[670px] w-full">
                            Your cart is empty, add a product
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }

    return (
        <>
            <Breadcrumb title={"Checkout"} pages={["checkout"]} />
            <section className="overflow-hidden py-20 bg-gray-2">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <form>
                        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
                            {/* <!-- checkout left --> */}
                            <div className="lg:max-w-[670px] w-full">
                                {/* <!-- login box --> */}
                                <Login />

                                {/* <!-- billing details --> */}
                                <Billing />

                                {/* <!-- address box two --> */}
                                <Shipping />

                                {/* <!-- others note box --> */}
                                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                                    <div>
                                        <label htmlFor="notes" className="block mb-2.5">
                                            Other Notes (optional)
                                        </label>

                                        <textarea
                                            name="notes"
                                            id="notes"
                                            rows={5}
                                            placeholder="Notes about your order, e.g. speacial notes for delivery."
                                            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* // <!-- checkout right --> */}
                            <div className="max-w-[455px] w-full">
                                {/* <!-- order list box --> */}
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

                                {/* <!-- coupon box --> */}
                                <Coupon />

                                {/* <!-- shipping box --> */}
                                <ShippingMethod />

                                {/* <!-- payment box --> */}
                                <PaymentMethod />

                                {/* <!-- checkout button --> */}
                                <button
                                    type="submit"
                                    className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
                                >
                                    Process to Checkout
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};


export default Checkout;
