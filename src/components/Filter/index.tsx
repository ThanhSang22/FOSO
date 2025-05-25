import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const filterOptions = [
  {
    title: "Danh mục sản phẩm",
    type: "checkbox",
    name: "categories",
    options: [
      { label: "Lọc gió Động cơ - Air Filter", count: 24 },
      { label: "Lọc Nhiên Liệu - Fuel Filter", count: 24 },
      { label: "Bộ lọc dầu", count: 24 },
      { label: "Chưa phân loại", count: 24 },
      { label: "Khác", count: 24 },
    ],
  },
  {
    title: "Khoảng giá",
    type: "button",
    name: "priceRange",
    options: [
      { label: "Dưới 100,000 đ", value: "under-100" },
      { label: "100,000 đ – 300,000 đ", value: "100-300" },
      { label: "300,000 đ – 500,000 đ", value: "300-500" },
      { label: "Trên 500,000 đ", value: "above-500" },
    ],
  },
  {
    title: "Thương hiệu",
    type: "checkbox",
    name: "brands",
    options: [
      { label: "Asakashi", count: 24 },
      { label: "Bosch", count: 24 },
      { label: "Huyndai", count: 24 },
    ],
  },
  {
    title: "Năm sản xuất",
    type: "checkbox",
    name: "years",
    options: [
      { label: "2021", count: 24 },
      { label: "2020", count: 24 },
      { label: "2019", count: 24 },
      { label: "2018", count: 24 },
    ],
  },
  {
    title: "Xuất xứ",
    type: "checkbox",
    name: "origins",
    options: [
      { label: "Đức", count: 24 },
      { label: "Nhật Bản", count: 24 },
      { label: "Trung Quốc", count: 24 },
    ],
  },
];

const Filter = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-[315px] h-fit">
      <h2 className="font-semibold text-2xl mb-4 flex items-center space-x-3 text-[#0373F3]">
        <img src="/images/icons/filter.svg" alt="filter" className="size-8" />
        Bộ lọc
      </h2>

      {filterOptions.map((section, index) => {
        const isOpen = openSections[section.name] ?? true;

        return (
          <div
            key={section.name}
            className={`mb-4 ${
              index === filterOptions.length - 1
                ? ""
                : "border-b border-[#919EAB33] pb-3"
            }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => toggleSection(section.name)}
            >
              <h3 className="font-semibold text-base">{section.title}</h3>
              {isOpen ? (
                <FaChevronUp className="text-gray-500 text-sm" />
              ) : (
                <FaChevronDown className="text-gray-500 text-sm" />
              )}
            </div>

            {isOpen && (
              <div>
                {section.type === "checkbox" &&
                  section.options.map((opt, idx) => (
                    <label
                      key={idx}
                      className="flex items-center mb-2 space-x-2 cursor-pointer"
                    >
                      <input type="checkbox" />
                      <span>
                        {opt.label}
                        {"count" in opt ? ` (${opt.count})` : ""}
                      </span>
                    </label>
                  ))}

                {section.type === "button" &&
                  section.options.map((opt, idx) => (
                    <button
                      key={idx}
                      className="w-full mb-2 p-2 border rounded text-sm hover:bg-gray-100"
                    >
                      {opt.label}
                    </button>
                  ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
