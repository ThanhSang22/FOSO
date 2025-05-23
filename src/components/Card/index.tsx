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
          <span className="text-sm text-white bg-yellow-400 px-3 py-1 rounded-full font-medium flex items-center">
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            Giá cực sốc
          </span>
        </div>
      )}

      <div className="font-semibold text-gray-800 leading-tight line-clamp-2 min-h-10">
        {title}
      </div>

      <div className="text-red-600 text-xl font-bold">
        {price.toLocaleString()} đ
      </div>

      {originalPrice && discount && (
        <div className="flex items-center space-x-2 text-sm">
          <span className="line-through text-gray-400">
            {originalPrice.toLocaleString()} đ
          </span>
          <span className="text-red-500">-{discount}%</span>
        </div>
      )}

      <button className="w-full bg-blue-100 text-blue-600 cursor-pointer font-semibold py-2 rounded-xl hover:bg-blue-200 transition">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductCard;
