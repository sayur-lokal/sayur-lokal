import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Dijamin sampai tujuan",
    description: "Diantar oleh kurir lokal berpengalaman",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Ramah Lingkungan",
    description: "Dibungkus dengan kantong ramah lingkungan",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Dijamin sehat",
    description: "Semua produk telah tersertifikasi",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1160px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center justify-between xl:gap-10.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
