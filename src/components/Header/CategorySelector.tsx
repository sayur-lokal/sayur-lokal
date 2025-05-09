
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";

const categories = ["Semua Kategori", "Sembako", "Sayur", "Bumbu Dapur", "Buah", "Paket Masak", "Tanpa Kategori", "Siap Saji", "Protein", "Sarapan", "Harga Grosir"];

const CategorySelector = () => {
    const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<string>(categories[0]);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen])

  const handleOptionClick = (selectedCategory: string) => {
    setCategory(selectedCategory);
    toggleDropdown();
    const searchParams = new URLSearchParams();
    searchParams.set("category", selectedCategory);
    const url = `products?${searchParams.toString()}`;
    router.push(url);
  };

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-content")) {
        toggleDropdown();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div className="dropdown-content custom-select relative" style={{ width: "200px" }}>
      <div
        className={`select-selected whitespace-nowrap ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        {category}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {categories.slice(1, -1).map((cat: string) => (
          <div
            key={cat}
            onClick={() => handleOptionClick(cat)}
            className={`select-item cursor-pointer hover:underline ${
              category === cat ? "same-as-selected" : ""
            }`}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
