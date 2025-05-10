import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounceCallback } from 'usehooks-ts';

const PriceDropdown = ({ disabled }: { disabled: boolean; }) => {

    const currentSearchParams = useSearchParams();
    const currentPathname = usePathname();
    const router = useRouter();
    const [toggleDropdown, setToggleDropdown] = useState(true);

    const [selectedPrice, setSelectedPrice] = useState({
        from: 0,
        to: 100,
    });

    const onChange = useDebounceCallback((e: number[]) => {
        setSelectedPrice({
            from: Math.floor(e[0]),
            to: Math.ceil(e[1]),
        });

        const params = new URLSearchParams(currentSearchParams);
        params.set("priceMin", Math.floor(e[0]).toString());
        params.set("priceMax", Math.ceil(e[1]).toString());
        const url = `${currentPathname}?${params.toString()}`;
        router.push(url);
    }, 300);

    return (
        <div className="bg-white shadow-1 rounded-lg">
            <div
                onClick={() => setToggleDropdown(!toggleDropdown)}
                className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5"
            >
                <p className="text-dark">Harga</p>
                <button
                    disabled={disabled}
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                    id="price-dropdown-btn"
                    aria-label="button for price dropdown"
                    className={`text-dark ease-out duration-200 ${toggleDropdown && 'rotate-180'
                        }`}
                >
                    <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>

            {/* // <!-- dropdown menu --> */}
            <div className={`p-6 ${toggleDropdown ? 'block' : 'hidden'}`}>
                <div id="pricingOne">
                    <div className="price-range">
                        <RangeSlider
                            id="range-slider-gradient"
                            className="margin-lg"
                            step={'any'}
                            onInput={onChange}
                            defaultValue={[currentSearchParams.get('priceMin') ? parseInt(currentSearchParams.get('priceMin') as string) : 0, currentSearchParams.get('priceMax') ? parseInt(currentSearchParams.get('priceMax') as string) : 100000000]}
                            min={0}
                            max={100000000}
                        />

                        <div className="price-amount flex items-center justify-between pt-4">
                            <div className="text-custom-xs text-dark-4 flex rounded border border-gray-3/80">
                                <span className="block border-r border-gray-3/80 px-2.5 py-1.5">
                                    $
                                </span>
                                <span id="minAmount" className="block px-3 py-1.5">
                                    {selectedPrice.from}
                                </span>
                            </div>

                            <div className="text-custom-xs text-dark-4 flex rounded border border-gray-3/80">
                                <span className="block border-r border-gray-3/80 px-2.5 py-1.5">
                                    $
                                </span>
                                <span id="maxAmount" className="block px-3 py-1.5">
                                    {selectedPrice.to}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceDropdown;
