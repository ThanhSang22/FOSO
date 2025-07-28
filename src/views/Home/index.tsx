"use client";
import ProductCard from "@/components/Card";
import Filter from "@/components/Filter";
import Slides from "@/components/Slides";
import { useNavHeight } from "@/providers/NavHeightContext";
import { productList } from "@/utils/listProducts";
import React, { useEffect, useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";

const sortOptions = [
  { label: "Liên quan", value: "relevance" },
  { label: "Bán chạy", value: "bestseller" },
  { label: "Mới nhất", value: "newest" },
  { label: "Nổi bật", value: "featured" },
];

const Products = () => {
  const [active, setActive] = useState("relevance");
  const [visibleCount, setVisibleCount] = useState(8);
  const { navHeight } = useNavHeight();
  const listsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!listsRef.current) return;

      const rect = listsRef.current.getBoundingClientRect();
      const bottomReached = rect.bottom - 200 <= window.innerHeight;

      if (bottomReached) {
        setVisibleCount((prev) => prev + 4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col gap-8 !py-8 container mx-auto"
      style={{ marginTop: `${navHeight}px` }}
    >
      <div className="flex gap-2 items-center text-sm">
        <p className="text-[#919EAB]">Trang chủ</p>
        <BiChevronDown
          size={10}
          className="-rotate-90 text-[#919EAB] font-bold"
        />
        <p className="text-[#024897] font-bold">Sản phẩm</p>
      </div>
      <Slides />
      <div className="flex gap-5 w-full" ref={listsRef}>
        <div className="sticky top-0 lg:flex hidden">
          <Filter />
        </div>
        <div className="w-full">
          <div className="flex xl:flex-row flex-col items-center justify-between gap-4 py-4 border-b border-gray-100 w-full text-[#1C252E]">
            <h2 className="text-lg font-semibold xl:text-xl">
              Danh sách sản phẩm
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-[#1C252E] font-medium">Sắp xếp theo</span>

              {sortOptions.map((option) => {
                const isActive = active === option.value;

                return (
                  <button
                    key={option.value}
                    onClick={() => setActive(option.value)}
                    className={`relative px-4 py-2 h-10 min-w-[100px] rounded-lg font-bold text-sm transition-all overflow-hidden
                    ${
                      isActive
                        ? "border border-[#0070F3] text-[#0070F3] bg-white"
                        : "border border-transparent text-[#212B36] bg-white hover:translate-y-[-2px] hover:shadow-md"
                    }`}
                  >
                    {option.label}

                    {isActive && (
                      <div className="absolute top-0 right-0 w-[24px] h-[24px] overflow-hidden rounded-tr-[2px]">
                        <div className="absolute w-[40px] h-[40px] bg-[#0070F3] clip-path-triangle" />
                        <img src="/images/icons/Unread.svg" alt="Unread" className="absolute top-[1px] right-[0px] text-white z-10 size-3"/>
                      </div>
                    )}
                  </button>
                );
              })}

              <button className="flex items-center gap-2 text-sm text-[#1C252E] hover:text-black font-medium">
                Giá: Thấp → Cao
                <img
                  src="/images/icons/drop.svg"
                  alt="arrow-down"
                  className="size-5 aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {productList.slice(0, visibleCount).map((product, index) => {
              const discount = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              );
              return (
                <div key={index} className="relative">
                  <ProductCard
                    image={product.image}
                    title={product.name}
                    price={product.price}
                    originalPrice={product.oldPrice}
                    discount={discount}
                    isHotDeal={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
