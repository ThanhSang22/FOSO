'use client'
import ProductCard from '@/components/Card';
import Filter from '@/components/Filter';
import Slides from '@/components/Slides';
import { useNavHeight } from '@/providers/NavHeightContext';
import { productList } from '@/utils/listProducts';
import React, { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';

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
      <Slides />
      <div className="flex gap-5 w-full" ref={listsRef}>
        <div className="sticky top-0 lg:flex hidden">
          <Filter />
        </div>
        <div className="w-full">
          <div className="flex xl:flex-row flex-col items-center justify-between gap-4 py-4 border-b border-gray-100 w-full">
            <h2 className="text-lg font-semibold">Danh sách sản phẩm</h2>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-gray-600">Sắp xếp theo</span>

              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActive(option.value)}
                  className={`px-3 py-1 rounded-md border transition-all ${
                    active === option.value
                      ? "border-blue-500 text-blue-500 font-medium"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}

              <button className="flex items-center gap-1 text-sm text-gray-800 hover:text-black">
                Giá: Thấp → Cao
                <BiChevronDown size={16} />
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
}

export default Products
