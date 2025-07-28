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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 py-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white rounded-xl shadow-[0px_8px_16px_0px_#919EAB29] p-4"
          >
            <img src={item.icon} alt={item.title} className="size-12 aspect-square" />
            <div>
              <h4 className="font-bold text-base text-[#1C252E]">{item.title}</h4>
              <p className="text-sm text-[#637381] font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="bg-white text-sm text-gray-700 bg-bgFooter bg-blend-overlay bg-no-repeat bg-cover">
        <div className="bg-[#E6F1FF] px-6 py-6">
          <div className="flex justify-between items-center gap-2 container !p-0 mx-auto">
            <div className="flex items-center gap-2">
              <img src="/images/end icon.png" alt="Map" className="size-8 md:size-12 aspect-square" />
              <span className="font-medium text-base md:text-xl xl:text-[28px]/[32px] text-[#1C252E]">
                Xem hệ thống 88 cửa hàng trên toàn quốc
              </span>
            </div>
            <button className="bg-white text-[#025FCA] font-semibold text-base md:text-lg xl:text-xl px-4 py-1 rounded-full border-none hover:shadow whitespace-nowrap flex items-center gap-1 md:gap-3 md:h-[56px]">
              Xem ngay <img src="/images/icons/iconNext.svg" alt="iconNext" className="size-5 md:size-8 aspect-square" />
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(/images/Footer.png)",
          }}
          className="px-6 !py-[56px] flex-col xl:flex-row gap-6 xl:flex xl:justify-between mx-auto container text-[#637381] bg-no-repeat bg-cover bg-right">
          <div className="space-y-8 text-sm xl:text-base xl:w-[45%]">
            <h3 className="font-bold uppercase text-base md:text-lg xl:text-xl text-[#013065]">
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <div className="space-y-1">
              <p>
              Tax code: <strong>0305094228</strong>
            </p>
            <p>
              Address:{" "}
              <a target="_blank" href="https://maps.app.goo.gl/YsJsLCVGveBgZACA9" className="font-semibold">
                13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
              </a>
            </p>
            <p>
              Phone number: <a href="tel:+0283 760 7607" className="underline font-semibold">0283 760 7607</a> 
            </p>
            <p>
              Opening hour:{" "}
              <strong>
                09:00 - 22:00 from Mon - Fri
              </strong>
            </p>
            </div>
            <img
              src="/images/bo cong thuong.png"
              alt="Đã thông báo BCT"
              className="max-w-[200px] w-full mt-2"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-8 text-sm xl:text-base">
            <div>
              <h4 className="font-semibold mb-2 text-base md:text-lg xl:text-xl text-[#013065]">Sitemap</h4>
              <ul className="space-y-1">
                <li>About</li>
                <li>Article</li>
                <li>Cart</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-base md:text-lg xl:text-xl text-[#013065]">Legal</h4>
              <ul className="space-y-1">
                <li className="font-semibold text-[#1C252E]">— Privacy Policy</li>
                <li>Cookie policy</li>
                <li>Delivery policy</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-2 text-base md:text-lg xl:text-xl text-[#013065]">Download App</h4>
              <div className="space-y-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl min-w-[215px] md:w-full">
                  <FaGooglePlay className="text-[30px]" />
                  <div className="flex flex-col items-start text-base font-semibold">
                    <p className="font-normal text-sm">Get it on</p>
                    Google Play Store
                  </div>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl min-w-[215px] md:w-full">
                  <FaApple className="text-[30px]" />{" "}
                  <div className="flex flex-col items-start text-base font-semibold">
                    <p className="font-normal text-sm">Download from</p>
                    Apple App Store
                  </div>{" "}
                </button>
                <div className="flex items-center gap-2 text-base xl:text-xl justify-end">
                  <img src="/images/vn.svg" alt="vn" className="size-6" />
                  VI <RiArrowDropDownLine className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end px-6 pb-4 fixed bottom-0 right-0">
          <button
            className="p-2 rounded-full border border-[#013065] hover:bg-gray-100 shadow-md"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/images/icons/dropBlack.svg" alt="drop" className={`size-4 aspect-square transition-all duration-300`} />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
