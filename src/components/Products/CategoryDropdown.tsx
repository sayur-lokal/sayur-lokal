'use client';
import { Category } from "@/types/category";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import categoryData from "../Shared/DummyData/categoryData";
const mappedCategories = categoryData.map((cat) => ({
    title: cat.title,
    id: Math.floor(Math.random() * 100),
    img: cat.img,
}));

const CategoryItem = ({ category }: { category: Category; }) => {
    const currentSearchParams = useSearchParams();
    const [selected, setSelected] = useState(currentSearchParams.get("category")?.split(",").filter(v => !!v).includes(category.title));
    const currentPathname = usePathname();
    const router = useRouter();

    const onSelect = (e: any) => {
        setSelected(!selected);

        const searchParams = new URLSearchParams(currentSearchParams);
        const currentCategories = searchParams.get("category")?.split(",").filter(v => !!v) || [];
        const index = currentCategories.findIndex(v => v === category.title);
        if (selected && index != -1) {
            currentCategories.splice(index, 1);
        } else if (!selected && index == -1) {
            currentCategories.push(category.title);
        }

        searchParams.set("category", currentCategories.join(","));

        const url = `${currentPathname}?${searchParams.toString()}`;
        router.push(url);

    };
    return (
        <button className={`${selected && 'text-[#1A693A]'} group flex items-center justify-between ease-out duration-200 hover:text-[#1A693A] `} onClick={onSelect}>
            <div className="flex items-center gap-2">
                <div className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${selected ? 'border-[#1A693A] bg-[#1A693A]' : 'bg-white border-gray-3'}`}>
                    <svg className={selected ? 'block' : 'hidden'} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <span>{category.title}</span>
            </div>

            {/* <span className={`${selected ? 'text-white bg-[#1A693A]' : 'bg-gray-5'
      } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200
       text-white  group-hover:bg-[#1A693A]`}>{category.img}</span> */}
        </button>
    );
};

const CategoryDropdown = ({disabled}: {disabled: boolean}) => {
    
    const [toggleDropdown, setToggleDropdown] = useState(true);

    const onToggle = (e: any) => {
        e.preventDefault();
        setToggleDropdown(!toggleDropdown);
    };

    return (
        <div className="bg-white shadow-1 rounded-lg">
            <div
                onClick={onToggle}
                className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${toggleDropdown && 'shadow-filter'}`}
            >
                <p className="text-dark">Category</p>
                <button aria-label="button for category dropdown" className={`text-dark ease-out duration-200 ${toggleDropdown && 'rotate-180'}`} disabled={disabled}>
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>

            {/* dropdown && 'shadow-filter */}
            {/* <!-- dropdown menu --> */}
            <div
                className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${toggleDropdown ? "flex" : "hidden"
                    }`}
            >
                {mappedCategories.map((cat) => (
                    <CategoryItem key={cat.title} category={cat} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDropdown;
