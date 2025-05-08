"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";


const options = [
    { label: "Terbaru", sortBy: "date", sortOrder: "desc" },
    { label: "Terlaris", sortBy: "sales", sortOrder: "desc" },
    { label: "Termurah", sortBy: "price", sortOrder: "desc" },
];


const SortSelect = ({disabled}: {disabled: boolean}) => {

    const currentSearchParams =  useSearchParams()
    const currentPathname = usePathname()
    const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentSearchParams.get("sortBy") == "date" && currentSearchParams.get("sortOrder")=="desc" ) {
        setSelectedOption(options[0])
    } else if (currentSearchParams.get("sortBy") == "sales" && currentSearchParams.get("sortOrder")=="desc" ){
        setSelectedOption(options[1])
    } else {
        setSelectedOption(options[2])
    }

  }, [currentSearchParams])

  // Function to close the dropdown when a click occurs outside the component
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: {label: string, sortBy:string, sortOrder: string}) => {
      setSelectedOption(option);
      toggleDropdown();
      if (disabled) return;
    const searchparams = new URLSearchParams(currentSearchParams)
    searchparams.set("sortBy", option.sortBy)
    searchparams.set("sortOrder", option.sortOrder)
    router.push(`${currentPathname}?${searchparams.toString()}`)
  };

  return (
    <div
      className="custom-select custom-select-2 flex-shrink-0 relative"
      ref={selectRef}
    >
      <div
        className={`select-selected whitespace-nowrap ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        {selectedOption.label}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-item ${
              selectedOption === option ? "same-as-selected" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortSelect;
