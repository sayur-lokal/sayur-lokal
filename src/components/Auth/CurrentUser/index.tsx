"use client"
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { User, userSchema } from "@/types/user";
import { LogOut } from "lucide-react";

type State = {
    user: User | null
    loading: boolean
    error?: string
}

const CurrentUserButton = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [isHovering, setIsHovering] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (!state.user) {
                return
            }
            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsDropdownOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

        // Handle dropdown visibility based on hover state
        useEffect(() => {
            if (!state.user) {
                return
            }

            let timeoutId: NodeJS.Timeout;
            
            if (!isHovering && isDropdownOpen) {
                timeoutId = setTimeout(() => {
                    setIsDropdownOpen(false);
                }, 300);
            }
            
            return () => {
                if (timeoutId) clearTimeout(timeoutId);
            };
        }, [isHovering, isDropdownOpen]);

    const [state, setState] = useState<State>({
        user: null,
        loading: false
    });

    const getCurrentUser = async () => {
        setState({
            user: null,
            loading: true,
        })
        try {
            const res = await fetch("/api/auth/user");
            if (!res.ok) {
                console.warn(`get current user responded with non-200 status, ${(await res.text()).substring(0, 16)}`);
                setState({
                    user: null,
                    loading: false
                });
                return;
            }

            const data = await res.json()
            const parsed = userSchema.safeParse(data);
            if (!parsed.success) {
                console.warn(`get current user responded with invalid user object, ${parsed.error}`);
                setState({
                    user: null,
                    loading: false
                });
                return;
            }

            setState({
                user: parsed.data,
                loading: false,
            });
        } catch(e) {
            const message = e instanceof Error ? e.message : `${e}`
            setState({
                user: null,
                loading: false,
                error: message
            })
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    // here's the view for loading state
    if (state.loading) {
        return (
            <div className="flex items-center gap-2.5">
                {/* Placeholder for icon */}
                <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div>
                    <span className="block text-2xs text-dark-4 uppercase">
                        account
                    </span>
                    <p className="font-medium text-custom-sm text-dark">
                        Loading...
                    </p>
                </div>
            </div>
        )
    }

    // here's the view for error state
    if (state.error) {
        return (
            <div className="flex items-center gap-2.5">
                {/* Placeholder for icon */}
                <div className="w-6 h-6 bg-red-200 rounded-full"></div>
                <div>
                    <span className="block text-2xs text-dark-4 uppercase">
                        account
                    </span>
                    <p className="font-medium text-custom-sm text-red-500">
                        Error
                    </p>
                </div>
            </div>
        )
    }

    // here's the view for authenticated state
    if (state.user) {
        return (
            <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div
                    className="flex items-center gap-2.5 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                >
                    {/* Placeholder for icon */}
                    <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                    <div>
                        <span className="block text-2xs text-dark-4 uppercase">
                            {state.user.name}
                        </span>
                        <p className="font-medium text-custom-sm text-dark">
                            {state.user.role}
                        </p>
                    </div>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div
                        className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 py-2 border border-gray-2"
                    >
                        <div className="px-4 py-2 ">
                            <p className="font-medium text-dark">{state.user.name}</p>
                            <p className="text-sm text-gray-500">{state.user.email}</p>
                        </div>
                        {state.user.role === "seller" && (
                            <Link
                                href={`/shop/${state.user.id}`}
                                className="block px-4 py-2 text-sm text-dark hover:bg-gray-2 hover:underline mb-4"
                            >
                                Dashboard
                            </Link>
                        )}
                        <form action="/api/auth/signout" method="GET" className="px-4 py-2">
                            <button
                                type="submit"
                                className="w-full text-center inline-flex gap-2 justify-between font-medium text-white text-custom-sm rounded-md bg-green-dark p-4 leading-none ease-out duration-200 hover:bg-[#1A693A]"
                            >
                                Sign Out
                                <LogOut className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        )
    }

    // here's the view for unauthenticated state
    return (
        <Link href="/signin" className="flex items-center gap-2.5">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C9.37666 1.25 7.25001 3.37665 7.25001 6C7.25001 8.62335 9.37666 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75001 6C8.75001 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75001 7.79493 8.75001 6Z"
                    fill="#D75A4A"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 12.25C9.68646 12.25 7.55494 12.7759 5.97546 13.6643C4.4195 14.5396 3.25001 15.8661 3.25001 17.5L3.24995 17.602C3.24882 18.7638 3.2474 20.222 4.52642 21.2635C5.15589 21.7761 6.03649 22.1406 7.22622 22.3815C8.41927 22.6229 9.97424 22.75 12 22.75C14.0258 22.75 15.5808 22.6229 16.7738 22.3815C17.9635 22.1406 18.8441 21.7761 19.4736 21.2635C20.7526 20.222 20.7512 18.7638 20.7501 17.602L20.75 17.5C20.75 15.8661 19.5805 14.5396 18.0246 13.6643C16.4451 12.7759 14.3136 12.25 12 12.25ZM4.75001 17.5C4.75001 16.6487 5.37139 15.7251 6.71085 14.9717C8.02681 14.2315 9.89529 13.75 12 13.75C14.1047 13.75 15.9732 14.2315 17.2892 14.9717C18.6286 15.7251 19.25 16.6487 19.25 17.5C19.25 18.8078 19.2097 19.544 18.5264 20.1004C18.1559 20.4022 17.5365 20.6967 16.4762 20.9113C15.4193 21.1252 13.9742 21.25 12 21.25C10.0258 21.25 8.58075 21.1252 7.5238 20.9113C6.46354 20.6967 5.84413 20.4022 5.4736 20.1004C4.79033 19.544 4.75001 18.8078 4.75001 17.5Z"
                    fill="#D75A4A"
                />
            </svg>

            <div>
                <span className="block text-2xs text-dark-4 uppercase">
                    account
                </span>
                <p className="font-medium text-custom-sm text-dark">
                    Sign In
                </p>
            </div>
        </Link>
    );
};

export default CurrentUserButton;