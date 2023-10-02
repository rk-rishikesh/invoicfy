import React from "react";

function Section1() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32">
      <div
        className="text-gray-700 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl"
        style={{ fontFamily: "Glass Antiqua, sans-serif" }}
      >
        INVOICYFY
      </div>

      <div className="text-gray text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-4 md:mt-8 mb-8 text-center">
        Welcome to Invoicify, where token payments become next-gen NFT invoices!
        Ditch the boring paper trails and ride the wave of interchain
        transactions.
      </div>

      <div className="mt-4">
        <button className="bg-[#354F52] text-white py-2 px-4 rounded-md hover:bg-[#25383C] transition duration-300 text-sm sm:text-base">
          Create Invoice
        </button>
      </div>
    </div>
  );
}

export default Section1;
