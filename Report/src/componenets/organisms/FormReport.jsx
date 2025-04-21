import React from "react";
import InputField from "../atoms/InputField";
import FileUpload from "../molecules/FileUpload";
import CategorySelector from "../molecules/CategorySelector";
function FormReport() {
  return (
    <>
      {/* UP */}
      <div className="flex justify-between gap-5">
        {/* UPRIGHT */}
        <div className="flex flex-col gap-2.5">
          <h1 className="text-[#685752] font-bold text-xl">عنوان گزارش</h1>
          <p className="text-[#8d7f7b] font-semibold text-sm">
            یک جمله کوتاه و واضح برای عنوان مشکلت بنویس
          </p>

          <InputField
            placeholder={"مثلا: سطل زباله کنار پارک پر شده"}
            className={
              "focus:outline-none text-[#b1b1b1] text-sm font-semibold bg-white rounded-full border border-[#997c70] px-4 py-1 w-full"
            }
          />
          <h2 className="text-[#685752] font-bold text-xl">توضیح مشکل</h2>
          <p className="text-[#8d7f7b] font-semibold text-sm">
            چی شده، ار کی شروع شده،چقدر خطرناک یا آزاردهنده هست؟{" "}
          </p>

          <textarea
            placeholder="سطل زباله چند روزه تخلیه نشده و بوی بد ایجاد کرده آدرس حدودی مثلا:"
            className="focus:outline-none text-[#b1b1b1] text-sm font-semibold bg-white rounded-2xl border border-[#997c70] px-4 py-1 w-full h-[100px]"
          ></textarea>
          <h2 className="text-[#685752] font-bold text-xl">آدرس حدودی</h2>

          <InputField
            placeholder={"تهران خیابان ولیعصر نرسیده به پارک دانشجو"}
            className={
              "focus:outline-none text-[#b1b1b1] text-sm font-semibold bg-white rounded-full border border-[#997c70] px-4 py-1 w-full"
            }
          />
        </div>
        {/* UPLEFT */}
        <FileUpload />
      </div>
      {/* DOWN */}
      <CategorySelector />
      <input
        type="submit"
        className="cursor-pointer bg-[#f6a03d] rounded-full px-20 py-2 w-fit m-auto shadow-[0px_4px_6px_rgba(0,0,0,0.3)]"
        value="ثبت گزارش"
      />
    </>
  );
}

export default FormReport;
