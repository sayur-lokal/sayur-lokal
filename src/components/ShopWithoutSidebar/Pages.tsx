import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PAD_COUNT = 3;
type PagesConfiguration = {
  showLeftPad: boolean;
  showRightPad: boolean;
  pages: number[];
};

const calculatePagesConfiguration = (currentPage: number, maxPage: number): PagesConfiguration => {
  if (maxPage <= PAD_COUNT + 2) {
    return {
      showLeftPad: false,
      showRightPad: false,
      pages: Array.from({ length: maxPage - 2 }, (_, index) => index + 2),
    };
  }

  const pages = Array.from({ length: PAD_COUNT }, (_, index) => index + (currentPage - Math.floor(PAD_COUNT / 2)));
  const showLeftPad = pages[0] > 2;
  const showRightPad = pages[pages.length - 1] < maxPage + PAD_COUNT;

  return {
    pages,
    showLeftPad,
    showRightPad,
  };
};

const Pages = ({ maxPages, currentPage }: { maxPages: number; currentPage: number }) => {
  const queryParams = useSearchParams();
  const pathname = usePathname();

  const createHref = (page: number): string => {
    const query = new URLSearchParams(queryParams);
    query.set('page', page.toString());
    return `${pathname}?${query.toString()}`;
  };

  const [pageConfig, setPageConfig] = useState<PagesConfiguration>({
    showLeftPad: false,
    showRightPad: false,
    pages: [1],
  });

  useEffect(() => {
    setPageConfig(calculatePagesConfiguration(currentPage, maxPages));
  }, [maxPages, currentPage]);

  return (
    <div className="flex justify-center mt-15">
      <div className="bg-white shadow-1 rounded-md p-2">
        <ul className="flex items-center">
          <li>
            <button id="paginationLeft" aria-label="button for pagination left" type="button" disabled className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px disabled:text-gray-4">
              <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
                  fill=""
                />
              </svg>
            </button>
          </li>

          <Link href={createHref(1)} className={cn('flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-[#1A693A] bg-green-dark', currentPage == 1 ? 'bg-green-dark text-white' : '')}>
            1
          </Link>

          {pageConfig.showLeftPad ? (
            <>
              <a aria-disabled href="#" className="select-none flex py-1.5 px-3.5 duration-200 rounded-[3px]">
                ...
              </a>{' '}
            </>
          ) : null}

          {pageConfig.pages.map((p) => (
            <li key={p}>
              <Link href={createHref(p)} className={cn('flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-[#1A693A] bg-green-dark', currentPage == p ? 'bg-green-dark text-white' : '')}>
                {p}
              </Link>
            </li>
          ))}

          {pageConfig.showRightPad ? (
            <>
              <a aria-disabled href="#" className="select-none flex py-1.5 px-3.5 duration-200 rounded-[3px]">
                ...
              </a>
            </>
          ) : null}

          <Link href={createHref(maxPages)} className={cn('flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-[#1A693A] bg-green-dark', currentPage == maxPages ? 'bg-green-dark text-white' : '')}>
            {maxPages}
          </Link>

          <li>
            <button
              id="paginationLeft"
              aria-label="button for pagination left"
              type="button"
              className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-white hover:bg-[#1A693A] bg-green-dark disabled:text-gray-4"
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

export default Pages;
