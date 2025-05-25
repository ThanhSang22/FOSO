import ProductCard from "@/components/Card";
import Categories from "@/components/Category";
import { FaPhoneAlt } from "react-icons/fa";
import { FiCamera, FiMenu, FiSearch } from "react-icons/fi";

const NavDesktop = () => {
  return (
    <header className="bg-white shadow-md hidden xl:flex flex-col">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-sm">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-1">
          <div className="flex items-center gap-2">
            <img src="/images/Sale.png" alt="Check" className="h-4" />
            <span>
              Nhập mã <span className="font-bold text-[#FACA4A]">NEWBIE</span>{" "}
              giảm ngay 10% cho lần đầu mua hàng.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-white text-xs" />
              <span>
                Hotline:{" "}
                <span className="text-[#FACA4A] font-semibold">
                  0283 760 7607
                </span>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/Smartphone.png" alt="App" className="h-4" />
              <span>Tải ứng dụng</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 !py-5 flex flex-col gap-3 container mx-auto">
        <div className="flex justify-between items-center gap-4 text-[#1C252E]">
          <img
            src="/images/logo_sunfil1.png"
            alt="Sunfil Logo"
            className="h-[111px]"
          />

          <div className="flex-1 flex items-center border border-blue-500 rounded-full px-4 py-2 max-w-2xl">
            <input
              type="text"
              placeholder="Tìm sản phẩm"
              className="flex-1 outline-none text-disabled placeholder:text-disabled"
            />
            <FiCamera className="mx-2 text-gray-500" />
            <button className="text-white bg-blue-600 py-3 px-6 rounded-full cursor-pointer">
              <FiSearch />
            </button>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center gap-1">
              <img src="/images/vn.svg" alt="vn" className="size-5" />
              <span>VI</span>
            </div>
            <div className="relative flex items-center gap-1 group/cart hover:bg-[#E6F1FF] rounded-full transition-all duration-300">
              <div className="relative flex items-center gap-1 cursor-pointer h-full py-1 px-2">
                <img src="/images/Cart.svg" alt="vn" className="size-5" />
                <span>Giỏ hàng</span>
                <span className="absolute -top-3 left-2 text-white bg-red-500 text-xs px-1 rounded-full">
                  12
                </span>
              </div>
              <div className="absolute left-0 top-full min-w-[400px] mt-1 p-8 bg-[#F4F6F8] z-50 invisible opacity-0 group-hover/cart:visible group-hover/cart:opacity-100 transition-all duration-300 shadow-2xl rounded-lg">
                <ProductCard
                  image={"/images/product1.png"}
                  title={"Lọc dầu ô tô – Toyota Vios"}
                  price={1900000}
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/user.svg" alt="vn" className="size-5" />
              <span>Tài khoản</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-2 cursor-pointer">
                <FiMenu /> Danh Mục Sản Phẩm
              </button>
              <Categories />
            </div>
            <span className="hover:text-blue-700 cursor-pointer hover:font-medium transition-all duration-300">
              Về Chúng Tôi
            </span>
            <span className="hover:text-blue-700 cursor-pointer hover:font-medium transition-all duration-300">
              Bài Viết
            </span>
            <span className="hover:text-blue-700 cursor-pointer hover:font-medium transition-all duration-300">
              Catalog
            </span>
            <span className="hover:text-blue-700 cursor-pointer hover:font-medium transition-all duration-300">
              Liên Hệ
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-1">
              <img src="/images/clock.svg" alt="vn" className="size-5" /> Hỗ trợ
              24/7
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/Hand Money.svg" alt="vn" className="size-5" />{" "}
              Miễn Phí Vận Chuyển
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/truck_fill.svg" alt="vn" className="size-5" />{" "}
              Giao Hàng Nhanh 2h
            </div>
            <div className="flex items-center gap-1">
              <img src="/images/arrow.svg" alt="vn" className="size-5" /> 30
              Ngày Đổi Trả
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavDesktop;
