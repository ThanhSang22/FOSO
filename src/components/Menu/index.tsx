import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const items = [
  { name: "Home", icon: <span>🏠</span>, href: "/" },
  { name: "Về chúng tôi", icon: <span>ℹ️</span>, href: "/about" },
  { name: "Bài viết", icon: <span>📝</span>, href: "/posts" },
  { name: "Catalog", icon: <span>📦</span>, href: "/catalog" },
  { name: "Liên hệ", icon: <span>📞</span>, href: "/contact" },
];


const Menu = ({ open, setOpen }: MenuProps) => {
    const [translateX, setTranslateX] = useState(-400);

    useEffect(() => {
      setTranslateX(open ? 0 : -400);
    }, [open]);
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ease-out ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{ transform: `translateX(${translateX}px)` }}
      onClick={() => setOpen(false)}
    >
      <div
        className="h-full overflow-y-auto z-[60] bg-white border border-black/10 shadow-2xl bg-primary50 w-[280px] rounded-e-3xl flex flex-col items-center gap-6 p-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Link href="/" className="flex items-center gap-[20px]">
          <img src="/images/logo_sunfil1.png" alt="logo" className="h-14"/>
        </Link>
        <div className="flex flex-col gap-1 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex items-center gap-[10px] rounded-full px-4 py-3`}
            >
              <div className={`transition-all duration-300 ease-in-out`}>
                {item.icon}
              </div>
              <p
                className={`text-base font-philosopher transition-all duration-300 ease-in-out`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu
