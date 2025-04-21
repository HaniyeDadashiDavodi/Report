import React from "react";
import Map from "../organisms/Map";
import FormReport from "../organisms/FormReport";
function Report() {
  return (
    <div className=" flex flex-col-reverse md:flex-row w-full h-screen overflow-hidden">
      {/* RIGHT */}
      <div className="w-full md:w-1/2  h-[50vh] md:h-[100vh] overflow-hidden relative">
        <Map />
      </div>
      {/* LEFT */}
      <form className="w-full md:w-1/2 flex flex-col gap-2.5 p-8 bg-[#fdf7f4] flex-1 overflow-y-auto">
        <FormReport />
      </form>
    </div>
  );
}

export default Report;
