'use client';
import SortSelect from "./SortSelect";
import DisplayModeToggle from "./DisplayModeToggle";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
    return (
        <>
            <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex gap-7.5">
                        <Sidebar disabled={true} productSidebar={false} setProductSidebar={() => {}} stickyMenu={false} />
                        <div className="xl:max-w-[870px] w-full flex flex-col">
                            <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <SortSelect disabled={true} />

                                        <p>
                                            Showing <span className="text-dark">9 of 50</span>{" "}
                                            Products
                                        </p>
                                    </div>
                                    <DisplayModeToggle disabled={true} displayMode="grid" setDisplayMode={() => {}} />
                                </div>
                            </div>
                            <p className="flex-1 flex flex-row gap-2 w-full items-center justify-center"><LoaderCircle className="w-4 h-4 animate-spin" /> <span>loading products</span> </p>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Loading;