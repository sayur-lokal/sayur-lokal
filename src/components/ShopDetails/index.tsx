"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "./RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ProductReview } from "../Review/ProductReview";
import ProductAttributes from "../Shared/InfoProps/ProductAttrb";
import ProductTitle from "../Shared/InfoProps/ProductTitle";
import ProductPrice from "../Shared/InfoProps/ProductPrice";
import ProductRating from "../Shared/InfoProps/ProductRating";
// import { useParams } from "next/navigation";
import { fetchProductById } from "@/redux/features/thunks/productThunks";


const tabs = [
  { id: "description", title: "Description" },
  { id: "attributes", title: "Product Attributes" },
  { id: "reviews", title: "Reviews" },
];


const ShopDetails = ({ productId }: { productId: string }) => {
  // const { productId } = useParams(); // <- comes as string
  const dispatch = useDispatch<AppDispatch>();

  const { value: product } = useAppSelector((state) => state.detailprodslice);

  const { openPreviewModal } = usePreviewSlider();
  const [previewImg, setPreviewImg] = useState(0);

  // const [storage, setStorage] = useState("gb128");
  // const [type, setType] = useState("active");
  // const [sim, setSim] = useState("dual");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tabOne");

 
  // const alreadyExist = localStorage.getItem("productDetails");
  // const productFromStorage = useAppSelector(
  //   (state) => state.productDetailsReducer.value
  // );
  // const product = alreadyExist ? JSON.parse(alreadyExist) : productFromStorage;
  // useEffect(() => {
  //   localStorage.setItem("productDetails", JSON.stringify(product));
  // }, [product]);
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId as string)); // assuming your thunk accepts a string ID
    }
  }, [dispatch, productId]);
  // pass the product here when you get the real data.
  const handlePreviewSlider = () => {
    openPreviewModal();
  }

  if (!product.title) {
    return <p>Please add product</p>;
  }

 
  return (
    <>
      <Breadcrumb title={"Shop Details"} pages={["shop details"]} />

      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
            {/* Left Image Column */}
            <div className="lg:max-w-[570px] w-full">
              <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                <div>
                  <button
                    onClick={handlePreviewSlider}
                    aria-label="Zoom Preview"
                    className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-[#6BAF92] absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
                  >
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.11493 1.14581L9.16665 1.14581C9.54634 1.14581 9.85415 1.45362 9.85415 1.83331C9.85415 2.21301 9.54634 2.52081 9.16665 2.52081C7.41873 2.52081 6.17695 2.52227 5.23492 2.64893C4.31268 2.77292 3.78133 3.00545 3.39339 3.39339C3.00545 3.78133 2.77292 4.31268 2.64893 5.23492C2.52227 6.17695 2.52081 7.41873 2.52081 9.16665C2.52081 9.54634 2.21301 9.85415 1.83331 9.85415C1.45362 9.85415 1.14581 9.54634 1.14581 9.16665L1.14581 9.11493C1.1458 7.43032 1.14579 6.09599 1.28619 5.05171C1.43068 3.97699 1.73512 3.10712 2.42112 2.42112C3.10712 1.73512 3.97699 1.43068 5.05171 1.28619C6.09599 1.14579 7.43032 1.1458 9.11493 1.14581Z"
                      />
                    </svg>
                  </button>
                  {product.imgs ? <Image
                    src={product.imgs?.previews[previewImg]}
                    alt="product-details"
                    width={400}
                    height={400}
                  /> : null}
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                {product.imgs?.thumbnails.map((item, key) => (
                  <button
                    onClick={() => setPreviewImg(key)}
                    key={key}
                    className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${
                      key === previewImg ? "border-blue" : "border-transparent"
                    }`}
                  >
                    <Image width={50} height={50} src={item} alt="thumbnail" />
                  </button>
                ))}
              </div>
            </div>
           
                  {/* Right Detail Section */}
            <div className="flex-1 max-w-[539px] w-full">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                <ProductTitle title={product.title}  />
                {/* link={`/shop-details/${product.id}`} */}
                </h2>
              </div>

              <div className="mb-4">
              <ProductRating reviews={product.reviews || []} />

              </div>

              <ProductPrice price={product.price} discountedPrice={product.discountedPrice}/>

              <ul className="flex flex-col gap-2 mt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#6BAF92] font-semibold">✓</span> Free delivery available
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#6BAF92] font-semibold">✓</span> Sales 30% Off Use Code: PROMO30
                </li>
              </ul>

              <div className="flex items-center gap-4 mt-6">
                <button
                  aria-label="Decrease quantity"
                  className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-[#6BAF92]"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-[#6BAF92]"
                >
                  +
                </button>
                <a
                  href="#"
                  className="inline-flex font-medium text-white bg-[#6BAF92] py-3 px-7 rounded-md ease-out duration-200 hover:bg-green-dark"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <section className="overflow-hidden bg-gray-2 py-20 mt-12">
            <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`font-medium lg:text-lg ease-out duration-200 hover:text-[#6BAF92] relative before:h-0.5 before:bg-[#6BAF92] before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
                    activeTab === item.id ? "text-[#6BAF92] before:w-full" : "text-dark before:w-0"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[10px] shadow-1 p-6 mt-6">
              {activeTab === "description" && 
              <p>{product.description}</p>}

              {activeTab === "attributes" && 
              <ProductAttributes product={product} />} 
                {/* add productingredients later */}

              {activeTab === "reviews" && 
              <ProductReview product={product} />}

            </div>
          </section>

          <RecentlyViewdItems />

          <Newsletter />
        </div>
      </section>
    </>
  );
};


export default ShopDetails;
