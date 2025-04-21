import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const allowedFormats = ["image/png", "image/jpeg"];
    const files = Array.from(e.target.files).filter((file) =>
      allowedFormats.includes(file.type)
    );

    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };
  const removeImage = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  return (
    <>
      <div>
        <div className="flex flex-col gap-2.5">
          <h2 className="text-[#685752] font-bold text-xl">ارسال عکس‌ها</h2>
          <div
            className="border border-[#997c70] border-dashed p-4 flex flex-col items-center rounded-2xl gap-2.5 relative"
            onClick={() => document.getElementById("file-input").click()}
          >
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              id="file-input"
              className="hidden"
            />
            <CloudUploadOutlinedIcon
              sx={{ fontSize: "56px", color: "#685752" }}
            />
            <p className="text-center text-[#685752] text-sm font-semibold">
              عکس های مربوط به گزارش را اینجا بکشید و رها کنید.یا برای انتخاب از
              دستگاه خود کلیک کنید.
            </p>
            <p className="text-[#b1b1b1] text-center text-sm">
              حداکثر 5 تصویر|فرمت های مجاز:PNG,JPG|حجم هر تصویر تا 5 مگابایت
            </p>
            <button className=" cursor-pointer bg-[#685752] text-white px-4 py-2 justify-center items-center flex rounded-md">
              جستجو
            </button>
          </div>

          <div className="flex flex-wrap  gap-4 mt-4 overflow-x-auto max-h-22">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`uploaded-${index}`}
                  className="w-22 h-22 object-cover rounded-md"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 left-1 py-1"
                >
                  <ClearIcon style={{ color: "#d7d8d8", fontSize: "44px" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUpload;
