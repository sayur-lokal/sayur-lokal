'use client';
import React, { useState, useEffect } from "react";
import SortSelect from "./SortSelect";
import DisplayModeToggle from "./DisplayModeToggle";
import Content from "./Content";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import { QueryResult } from "@/lib/products/query";

const Products = ({ products }: {products: QueryResult}) => {
    const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");

    const [productSidebar, setProductSidebar] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);

    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };



    useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu);

        // closing sidebar while clicking outside
        function handleClickOutside(event) {
            if (!event.target.closest(".sidebar-content")) {
                setProductSidebar(false);
            }
        }

        if (productSidebar) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <>
            <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex gap-7.5">
                        <Sidebar productSidebar={productSidebar} setProductSidebar={setProductSidebar} stickyMenu={stickyMenu} />
                        <div className="xl:max-w-[870px] w-full">
                            <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <SortSelect disabled={false} />

                                        <p>
                                            Showing <span className="text-dark">9 of 50</span>{" "}
                                            Products
                                        </p>
                                    </div>
                                    <DisplayModeToggle disabled={false} displayMode={displayMode} setDisplayMode={setDisplayMode} />
                                </div>
                            </div>
                            <Content displayMode={displayMode} shopData={products.products} />
                            <Pagination currentPage={products.page} maxPages={products.totalPages} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;