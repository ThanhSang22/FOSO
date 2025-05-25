import React from "react";
import { BsDropletFill } from "react-icons/bs";
import { FaGooglePlay, FaApple, FaChevronUp } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const features = [
  {
    icon: "/images/icons/shipping.svg",
    title: "Miễn phí vận chuyển",
    desc: "Với hoá đơn từ 1 triệu",
  },
  {
    icon: "/images/icons/support.svg",
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
  },
  {
    icon: "/images/icons/fast-delivery.svg",
    title: "Giao hàng nhanh 2h",
    desc: "Trong vòng bán kính 10km nội thành TP HCM",
  },
  {
    icon: "/images/icons/return.svg",
    title: "30 ngày đổi trả",
    desc: "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
  },
];

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 py-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4"
          >
            <img src={item.icon} alt={item.title} className="w-8 h-8" />
            <div>
              <h4 className="font-semibold text-[#1C252E]">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-[#F8FBFF] text-sm text-gray-700 bg-bgFooter bg-no-repeat bg-cover">
        <div className="bg-[#EAF2FD] px-6 py-4">
          <div className="flex justify-between items-center gap-2 container !p-0 mx-auto">
            <div className="flex items-center gap-2">
              <img src="/images/end icon.png" alt="Map" className="h-5" />
              <span className="font-medium">
                Xem hệ thống 88 cửa hàng trên toàn quốc
              </span>
            </div>
            <button className="bg-white text-blue-600 font-medium px-4 py-1 rounded-full border hover:shadow whitespace-nowrap">
              Xem ngay →
            </button>
          </div>
        </div>

        <div className="px-6 !py-[56px] grid grid-cols-1 gap-8 xl:flex xl:justify-between mx-auto container">
          <div className="space-y-2">
            <h3 className="font-bold uppercase text-sm text-gray-800">
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <p>
              Tax code: <strong>0305094228</strong>
            </p>
            <p>
              Address:{" "}
              <span className="text-gray-600">
                13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
              </span>
            </p>
            <p>
              Phone number: <strong>0283 760 7607</strong>
            </p>
            <p>
              Opening hour:{" "}
              <span className="text-gray-600">
                09:00 - 22:00 from Mon - Fri
              </span>
            </p>
            <img
              src="/images/bo cong thuong.png"
              alt="Đã thông báo BCT"
              className="h-10 mt-2"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8">
            <div>
              <h4 className="font-semibold mb-2">Sitemap</h4>
              <ul className="space-y-1">
                <li>About</li>
                <li>Article</li>
                <li>Cart</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li className="font-bold">— Privacy Policy</li>
                <li>Cookie policy</li>
                <li>Delivery policy</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-2">Download App</h4>
              <div className="space-y-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg min-w-[215px] md:w-full">
                  <FaGooglePlay className="text-[36px]" />
                  <div className="flex flex-col items-start text-base font-semibold">
                    <p className="font-normal text-sm">Get it on</p>
                    Google Play Store
                  </div>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg min-w-[215px] md:w-full">
                  <FaApple className="text-[36px]" />{" "}
                  <div className="flex flex-col items-start text-base font-semibold">
                    <p className="font-normal text-sm">Download from</p>
                    Apple App Store
                  </div>{" "}
                </button>
                <div className="flex items-center gap-2">
                  <img src="/images/vn.svg" alt="vn" className="size-6" />
                  VI <RiArrowDropDownLine className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end px-6 pb-4 fixed bottom-0 right-0">
          <button
            className="p-2 rounded-full border hover:bg-gray-100 bg-white shadow-md"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaChevronUp />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
