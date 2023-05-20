import React from "react";

const Product = ({ title, image, price}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full pb-3 ">
      <p className="font-bold text-[20px] pt-2   text-start">{title}</p>
      <div className="bg-[#eaeded] p-4 mt-2 mx-6">
        <img src={image} className="h-[15rem] sm:h-[8rem] md:h-[6rem] xl:h-[10rem] hover:scale-110 duration-100 ease-out"/>
      </div>
      

      <div className=" bg-orange-400 hover:bg-orange-300 duration-100 ease-out text-white font-bold w-[10rem] text-center mt-2 py-1 rounded-full">
      <span className="font-bold text-[15px] pt-2 ">{price} </span>
        <button>BUY</button>
      </div>
    </div>
  );
};

export default Product;
