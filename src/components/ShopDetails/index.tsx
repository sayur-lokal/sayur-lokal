'use client';
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ProductReview } from "../Review/ProductReview";
import ProductAttributes from "../Shared/InfoProps/ProductAttrb";
import ProductTitle from "../Shared/InfoProps/ProductTitle";
import ProductPrice from "../Shared/InfoProps/ProductPrice";
import { ProductRating } from "../../lib/rating";
import { fetchProductById } from "@/redux/features/product-details";
import { StarRatingDisplay } from "../Review";
import { addRecentlyViewd } from "@/redux/features/recentlyViewd-slice";
import ComplementaryProducts from "./ComplementaryProducts/index";
import SimilarProducts from "./ComplementaryProducts/SimilarProducts";


interface ShopDetailsProps {
  productId: string;
}

const tabs = [
  { id: 'description', title: 'Deskripsi' },
  { id: 'attributes', title: 'Spesifikasi Produk' },
  { id: 'reviews', title: 'Ulasan' },

  // { id: "related", title: "Cocok Dibeli Barengan" },
  // { id: "similar", title: "Produk Serupa Lainnya" },
  // { id: "description", title: "Informasi Produk" },
];

const ShopDetails: React.FC<ShopDetailsProps> = ({ productId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentProduct, loading, error  } = useAppSelector(
    (state) => state.detailprodslice
  );

  const { openPreviewModal } = usePreviewSlider();
  const [previewImg, setPreviewImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (productId && typeof productId === 'string') {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);
  // pass the product here when you get the real data.


  useEffect(() => {
    if (currentProduct) {
      dispatch(addRecentlyViewd(currentProduct));
    }
  }, [dispatch, currentProduct]);
 

  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>No product found.</div>;

  return (
    <>
      <Breadcrumb title={'Shop Details'} pages={['shop details']} />

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
                    className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-[#1A693A] absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
                  >
                    <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.11493 1.14581L9.16665 1.14581C9.54634 1.14581 9.85415 1.45362 9.85415 1.83331C9.85415 2.21301 9.54634 2.52081 9.16665 2.52081C7.41873 2.52081 6.17695 2.52227 5.23492 2.64893C4.31268 2.77292 3.78133 3.00545 3.39339 3.39339C3.00545 3.78133 2.77292 4.31268 2.64893 5.23492C2.52227 6.17695 2.52081 7.41873 2.52081 9.16665C2.52081 9.54634 2.21301 9.85415 1.83331 9.85415C1.45362 9.85415 1.14581 9.54634 1.14581 9.16665L1.14581 9.11493C1.1458 7.43032 1.14579 6.09599 1.28619 5.05171C1.43068 3.97699 1.73512 3.10712 2.42112 2.42112C3.10712 1.73512 3.97699 1.43068 5.05171 1.28619C6.09599 1.14579 7.43032 1.1458 9.11493 1.14581Z"
                      />
                    </svg>
                  </button>
                  {currentProduct.imgs ? (
                    <Image src={currentProduct.imgs?.previews[previewImg] || '/placeholder.png'} alt="product-details" width={400} height={400} />
                  ) : (
                    <div className="w-[400px] h-[400px] bg-gray-100 flex items-center justify-center text-sm text-gray-400">No Image Available</div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                {currentProduct.imgs?.thumbnails.map((item, key) => (
                  <button
                    onClick={() => setPreviewImg(key)}
                    key={key}
                    className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${
                      key === previewImg ? 'border-blue' : 'border-transparent'
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
                <ProductTitle title={currentProduct.title}  />
              </div>

              <div className="flex items-center gap-2 mt-2">
              <StarRatingDisplay rating={ProductRating(currentProduct.reviews)}/>
           
                <span className="text-sm text-gray-500">
                  ({currentProduct.reviews?.length} reviews)
                </span>

              </div>
              <div className="mb-4">
                <ProductPrice price={currentProduct.price} discountedPrice={currentProduct.discountedPrice} />
              </div>
              <ul className="flex flex-col gap-2 mt-6">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#1A693A] font-semibold">✓</span> Free delivery available
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#1A693A] font-semibold">✓</span> Sales 30% Off Use Code: PROMO30
                </li>
              </ul>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  aria-label="button for remove product"
                  className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-dark ease-out duration-200 hover:text-[#D75A4A]"
                  disabled={quantity < 0 && true}
                >
                  <svg className="fill-current" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-8.548e-08 0.977778C-3.82707e-08 0.437766 0.437766 3.82707e-08 0.977778 8.548e-08L15.0222 1.31328e-06C15.5622 1.36049e-06 16 0.437767 16 0.977779C16 1.51779 15.5622 1.95556 15.0222 1.95556L0.977778 1.95556C0.437766 1.95556 -1.32689e-07 1.51779 -8.548e-08 0.977778Z"
                      fill=""
                    />
                  </svg>
                </button>

                <span className="flex items-center justify-center w-20 h-10 rounded-[5px] border border-gray-4 bg-white font-medium text-dark" x-text="quantity">
                  {quantity}
                </span>

                <button onClick={() => setQuantity(quantity + 1)} aria-label="button for add product" className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-dark ease-out duration-200 hover:text-[#D75A4A]">
                  <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.08889 0C8.6289 2.36047e-08 9.06667 0.437766 9.06667 0.977778L9.06667 15.0222C9.06667 15.5622 8.6289 16 8.08889 16C7.54888 16 7.11111 15.5622 7.11111 15.0222L7.11111 0.977778C7.11111 0.437766 7.54888 -2.36047e-08 8.08889 0Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 7.91111C4.72093e-08 7.3711 0.437766 6.93333 0.977778 6.93333L15.0222 6.93333C15.5622 6.93333 16 7.3711 16 7.91111C16 8.45112 15.5622 8.88889 15.0222 8.88889L0.977778 8.88889C0.437766 8.88889 -4.72093e-08 8.45112 0 7.91111Z"
                      fill=""
                    />
                  </svg>
                </button>
                <a href="#" className="inline-flex font-medium text-white bg-green-dark py-3 px-7 rounded-md ease-out duration-200 hover:bg-[#1A693A]">
                  Beli Sekarang
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
                  className={`font-medium lg:text-lg ease-out duration-200 hover:text-[#D75A4A] relative before:h-0.5 before:bg-[#D75A4A] before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
                    activeTab === item.id ? 'text-[#D75A4A] before:w-full' : 'text-dark before:w-0'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[10px] shadow-1 p-6 mt-6">
              {activeTab === 'description' && <p>{currentProduct.description}</p>}

              {activeTab === 'attributes' && <ProductAttributes product={currentProduct} />}
              {/* add productingredients later */}

              {activeTab === 'reviews' && <ProductReview product={currentProduct} />}
            </div>
          </section>

          <ComplementaryProducts currentProduct={currentProduct}/>
          <SimilarProducts currentProduct={currentProduct}/>
        </div>
      </section>
    </>
  );
};

export default ShopDetails;
