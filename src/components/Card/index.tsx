import React from "react";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isHotDeal?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  isHotDeal = false,
}) => {
  return (
    <div className="max-w-xs rounded-xl shadow-md bg-white p-4 space-y-3 h-full">
      <div className="bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full object-cover aspect-square"
        />
      </div>

      {isHotDeal && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-[#B71D18] gradientWarning px-3 py-1 rounded-full font-semibold flex items-center gap-[6px]">
            <img src="/images/icons/fire.svg" alt="fire" className="size-4 aspect-square"/>
            Giá cực sốc
          </span>
        </div>
      )}

      <div className="font-semibold text-[#1C252E] text-sm xl:text-base leading-tight line-clamp-2 min-h-10">
        {title}
      </div>

      <div className="text-[#B71D18] text-lg xl:text-xl font-bold">
        {price.toLocaleString()} đ
      </div>

      {originalPrice && discount && (
        <div className="flex items-center space-x-2 text-sm">
          <span className="line-through text-[#919EAB]">
            {originalPrice.toLocaleString()} đ
          </span>
          <span className="text-[#B71D18] font-medium">-{discount}%</span>
        </div>
      )}

      <button className="w-full bg-[#E6F1FF] text-[#025FCA] cursor-pointer font-bold py-2 rounded-lg hover:bg-blue-200 transition text-sm flex items-center justify-center h-9">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductCard;
