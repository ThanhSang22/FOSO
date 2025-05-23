import { productList } from '@/utils/listProducts';
import React, { useState } from 'react'
import { GrFormNext } from 'react-icons/gr';
import ProductCard from '../Card';

const listCategories = [
  { name: "Bộ lọc dầu", count: 24 },
  { name: "Bộ lọc gió", count: 24 },
  { name: "Bộ lọc nhiên liệu", count: 24 },
  { name: "Bộ lọc trong cabin", count: 24 },
];

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const filterProducts = (category: string) => {
    if (category.includes("dầu"))
      return productList.filter((p) => p.name.toLowerCase().includes("dầu"));
    if (category.includes("gió"))
      return productList.filter((p) => p.name.toLowerCase().includes("gió"));
    if (category.includes("nhiên liệu"))
      return productList.filter((p) =>
        p.name.toLowerCase().includes("nhiên liệu")
      );
    if (category.includes("cabin"))
      return productList.filter((p) =>
        p.name.toLowerCase().includes("điều hòa")
      );
    return [];
  };

  const productsToShow = hoveredCategory
    ? filterProducts(hoveredCategory)
    : productList.slice(0, 5);

    return (
      <div
        className="absolute left-0 top-full min-w-[1280px] bg-[#F4F6F8] shadow-lg z-40 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all h-fit duration-300 flex w-full pr-8 gap-6 overflow-y-auto"
        onMouseLeave={() => setHoveredCategory(null)} // 👉 Gắn ở đây
      >
        <div className="min-w-[287px] h-full">
          {listCategories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCategory(category.name)}
              className={`flex min-h-[72px] px-6 items-center justify-between py-2 w-full cursor-pointer 
              ${
                hoveredCategory === category.name
                  ? "bg-[#F4F6F8] shadow-[3px_0px_0px_0px_#0D57C6_inset]"
                  : "bg-white"
              } 
              group/category hover:bg-[#F4F6F8] hover:shadow-[3px_0px_0px_0px_#0D57C6_inset]`}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/images/icons/filter.svg"
                  alt="icon"
                  className="w-5 h-5 text-gray-500"
                />
                <span
                  className={`text-sm text-gray-700 
                ${
                  hoveredCategory === category.name
                    ? "text-[#024897] font-semibold"
                    : ""
                } 
                group-hover/category:text-[#024897] group-hover/category:font-semibold`}
                >
                  {category.name}
                </span>
              </div>
              <GrFormNext className="text-gray-500" />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 py-6">
          {hoveredCategory && (
            <div>
              <div className="bg-white rounded-2xl p-3 flex items-center gap-2 w-fit">
                <img
                  src="/images/product1.png"
                  alt=""
                  className="size-[70px]"
                />
                <p className="text-[#1C252E] font-semibold">
                  {hoveredCategory}
                </p>
              </div>
            </div>
          )}

          <div className="col-span-2">
            <h4 className="font-bold mb-2">Sản Phẩm Bán Chạy</h4>
            <div className="flex gap-4 overflow-x-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
                {productsToShow.slice(0, 5).map((product, index) => {
                  const discount = Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100
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
      </div>
    );
      
};
export default Categories;  
