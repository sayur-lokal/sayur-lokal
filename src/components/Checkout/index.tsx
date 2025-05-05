"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";

import { useAppSelector } from "@/redux/store";
import { CartItem } from "@/redux/features/cart-slice";


import OrderList from "./OrderList"
const Checkout = () => {

    const cartItems: CartItem[] = useAppSelector((state) => state.cartslice.items);

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
                                <OrderList />
                                <Coupon />
                                <ShippingMethod />
                                <PaymentMethod />
                                <button
                                    type="submit"
                                    className="w-full flex justify-center font-medium text-white bg-[#6BAF92] py-3 px-6 rounded-md ease-out duration-200 hover:bg-green-dark mt-7.5"
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
