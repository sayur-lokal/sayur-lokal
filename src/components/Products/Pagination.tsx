import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PAD_COUNT = 3;
type PagesConfiguration = {
    showLeftPad: boolean;
    showRightPad: boolean;
    canGoNext: boolean;
    canGoPrev: boolean;
    pages: number[];
};

const calculatePagesConfiguration = (currentPage: number, maxPage: number): PagesConfiguration => {
    // If we have few pages, just show all of them (no pads needed)
    if (maxPage <= PAD_COUNT + 2) {
        return {
            showLeftPad: false,
            showRightPad: false,
            pages: Array.from({ length: maxPage - 2 }, (_, index) => index + 2),
            canGoPrev: currentPage > 1,
            canGoNext: currentPage < maxPage,
        };
    }

    // Case 1: Current page is near the beginning
    if (currentPage <= Math.floor(PAD_COUNT / 2) + 1) {
        return {
            showLeftPad: false,
            showRightPad: true,
            pages: Array.from({ length: PAD_COUNT }, (_, index) => index + 2),
            canGoPrev: currentPage > 1,
            canGoNext: currentPage < maxPage,
        };
    }

    // Case 2: Current page is near the end
    if (currentPage >= maxPage - Math.floor(PAD_COUNT / 2)) {
        return {
            showLeftPad: true,
            showRightPad: false,
            pages: Array.from({ length: PAD_COUNT }, (_, index) => maxPage - PAD_COUNT + index),
            canGoPrev: currentPage > 1,
            canGoNext: currentPage < maxPage,
        };
    }

    // Case 3: Current page is in the middle
    const startPage = currentPage - Math.floor(PAD_COUNT / 2);
    const pages = Array.from({ length: PAD_COUNT }, (_, index) => startPage + index);
    
    const showLeftPad = pages[0] > 2;
    const showRightPad = pages[pages.length - 1] < maxPage - 1;

    return {
        pages,
        showLeftPad,
        showRightPad,
        canGoPrev: currentPage > 1,
        canGoNext: currentPage < maxPage,
    };
};

const Pagination = ({ maxPages, currentPage }: { maxPages: number; currentPage: number; }) => {
    const queryParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter()

    const createHref = (page: number): string => {
        const query = new URLSearchParams(queryParams);
        query.set('page', page.toString());
        return `${pathname}?${query.toString()}`;
    };

    const [pageConfig, setPageConfig] = useState<PagesConfiguration>({
        showLeftPad: false,
        showRightPad: false,
        pages: [1],
        canGoPrev: currentPage > 1,
        canGoNext: currentPage < maxPages,
    });

    useEffect(() => {
        setPageConfig(calculatePagesConfiguration(currentPage, maxPages));
    }, [maxPages, currentPage]);

    return (
        <div className="flex justify-center mt-15">
            <div className="bg-white shadow-1 rounded-md p-2">
                <ul className="flex items-center gap-2">
                    <li>
                        <button
                            disabled={!pageConfig.canGoPrev}
                            onClick={() => router.push(createHref(currentPage - 1))}
                            id="paginationPrev"
                            aria-label="Previous page"
                            type="button"
                            className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-[#D75A4A] bg-white disabled:text-gray-4"
                        >
                            <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </li>

                    <li>
                        <PaginationButton href={createHref(1)} label="1" isActive={currentPage === 1} />
                    </li>

                    {pageConfig.showLeftPad && <PaginationPad />}

                    {pageConfig.pages.map((p) => (
                        <li key={p}>
                            <PaginationButton href={createHref(p)} label={p.toString()} isActive={currentPage === p} />
                        </li>
                    ))}

                    {pageConfig.showRightPad && <PaginationPad />}

                    {maxPages > 1 && (
                        <li>
                            <PaginationButton href={createHref(maxPages)} label={maxPages.toString()} isActive={currentPage === maxPages} />
                        </li>
                    )}

                    <li>
                        <button
                            disabled={!pageConfig.canGoNext}
                            onClick={() => router.push(createHref(currentPage + 1))}
                            id="paginationNext"
                            aria-label="Next page"
                            type="button"
                            className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-[#D75A4A] bg-white disabled:text-gray-4"
                        >
                            <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;

function PaginationButton({ isActive, label, href, disabled }: { isActive: boolean; label: string; href: string; disabled?: boolean; }) {
    if (disabled) {
        return (
            <a aria-disabled href="#" className="select-none flex py-1.5 px-3.5 duration-200 rounded-[3px]">
                {label}
            </a>
        );
    }

    return (
        <Link href={href} className={cn("flex py-1.5 px-3.5 duration-200 rounded-[3px]", isActive ? "bg-green-dark text-white hover:text-white hover:bg-[#1A693A]" : "hover:text-white hover:bg-[#1A693A] bg-white")}>
            {label}
        </Link>
    );
}

function PaginationPad () {
    return (
        <li className="mx-1">
              <a href="#" className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-[#1A693A] bg-white">
                ...
              </a>
            </li>
    )
}
