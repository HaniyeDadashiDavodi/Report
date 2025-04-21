import React from "react";
import { useState } from "react";
import items from "../../data/FormItems";
function CategorySelector() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <>
      <div>
        <h2 className="text-[#685752] font-bold text-xl"> انتخاب دسته بندی</h2>
        <p className="text-[#8d7f7b] font-semibold text-sm">
          نوع مشکلی که میخوای گزارش بدی رو انتخاب کن این کمک میکنه که گزارش
          سریعتر بررسی بشه
        </p>
        <ul className="mt-6 p-4 grid grid-cols-2 gap-2.5">
          {items.map((item, index) => (
            <li
              key={item.index}
              className="flex gap-2.5 justify-start items-start cursor-pointer"
              onClick={() => setSelectedIndex(index)}
              style={{
                color: selectedIndex === index ? "#8eb486" : "#685752",
              }}
            >
              <span className="bg-white border  rounded-2xl flex items-center p-4">
                {item.icon}
              </span>
              <span className="">
                <p className="font-bold text-md">{item.header}</p>
                <p className="font-medium text-sm">{item.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategorySelector;
