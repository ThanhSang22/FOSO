import { FiCamera, FiMenu, FiSearch } from 'react-icons/fi';

type NavMobileProps = {
  onClick: () => void;
};

const NavMobile = ({ onClick }: NavMobileProps) => {
  return (
    <header className="bg-white shadow-md xl:hidden flex flex-col justify-center items-center gap-3 px-4 py-5 w-full">
      <div className="flex gap-2 justify-between items-center w-full">
        <button onClick={onClick}>
          <FiMenu size={24} />
        </button>
        <img
          src="/images/logo_sunfil1.png"
          alt="Sunfil Logo"
          className="h-10"
        />
        <div className="relative flex items-center gap-1 cursor-pointer">
          <img src="/images/Cart.svg" alt="vn" className="size-8" />
          <span className="absolute -top-3 left-4 text-white bg-red-500 text-xs px-1 rounded-full">
            12
          </span>
        </div>
      </div>
      <div className="flex-1 flex items-center border border-blue-500 rounded-full pl-4 max-w-2xl w-full">
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
    </header>
  );
}

export default NavMobile
