import React from "react";
import logo from "../assets/logo.png";
import usa from "../assets/usa.png";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { TiArrowRepeat } from "react-icons/ti";
import wallpaper from '../assets/wallpaper.jpg';
import kitob_1 from '../assets/kitob_1.jpg'
import kitob_2 from "../assets/kitob_2.jpg";
import kitob_3 from "../assets/kitob_3.jpg";
import kitob_4 from "../assets/4.jpg";
import kitob_5 from "../assets/5.jpg";
import kitob_6 from "../assets/6.jpg";
import kitob_7 from "../assets/7.jpg";
import kitob_8 from "../assets/8.jpg";
import kitob_9 from "../assets/9.jpg";
import kitob_10 from "../assets/10.jpg";




import deal_1 from '../assets/deals/1.jpg'
import deal_2 from '../assets/deals/2.jpg'
import deal_3 from '../assets/deals/3.jpg'
import deal_4 from '../assets/deals/4.jpg'
import deal_5 from '../assets/deals/5.jpg'
import deal_6 from '../assets/deals/6.jpg'
import deal_7 from '../assets/deals/7.jpg'
import deal_8 from '../assets/deals/8.jpg'
import Product from '../components/Product'




import deal_2_1 from '../assets/deal2/1.jpg'
import deal_2_2 from '../assets/deal2/2.jpg'
import deal_2_3 from '../assets/deal2/3.jpg'
import deal_2_4 from '../assets/deal2/4.jpg' 
import deal_2_5 from '../assets/deal2/5.jpg' 
import deal_2_6 from '../assets/deal2/6.jpg' 
import deal_2_7 from '../assets/deal2/7.jpg' 
import deal_2_8 from '../assets/deal2/8.jpg' 
import deal_2_9 from '../assets/deal2/9.jpg' 

const Navbar = () => {
  const buttons = [
    "Today's Deals",
    "New Products",
    "Seller",
    "Home", 
    "Coupons",
    "Accessories"
    ];



    const products = [
      { title: "Survivor", image: kitob_1 , price:"35$"},
      { title: "Bermuda", image: kitob_2 , price:"25$"},
      { title: "Criminal", image: kitob_3, price:"18$" },
      { title: "Que Bueno", image: kitob_4, price:"13$" },
      { title: "Vitalik Buterin", image: kitob_5 , price:"29$"},
      { title: "I trust in you", image: kitob_6, price:"38$"},
      { title: "Learned Optimism", image: kitob_7 , price:"11$"},
      { title: "Moon over Macau", image: kitob_8 , price:"12$"},
      { title: "Do You Speak", image: kitob_9 , price:"20$"},
      { title: "Piano", image: kitob_10 , price:"15$"},
    ];


    const deals = [
      { title: "Superman", image: deal_1 , price:"35$"},
      { title: "Big", image: deal_2 , price:"25$"},
      { title: "Good Eats", image: deal_3, price:"18$" },
      { title: "The Ultimate", image: deal_4, price:"13$" },
      { title: "Schwanzenger", image: deal_5 , price:"29$"},
      { title: "Sunny Hostin", image: deal_6, price:"38$"},
      { title: "In order to live", image: deal_7 , price:"11$"},
      { title: "I know about", image: deal_8 , price:"12$"},
    ];


    const deals2 = [
      { title: "New arrivals in Toys", image: deal_2_1 , price:"35$"},
      { title: "Shop activity trackers and smartwatches", image: deal_2_2 , price:"25$"},
      { title: "Discover fashion trends", image: deal_2_3, price:"18$" },
      { title: "Create with strip lights", image: deal_2_4, price:"13$" },
      { title: "Shop Pet supplies", image: deal_2_5 , price:"29$"},
      { title: "Kindle E readers", image: deal_2_6, price:"38$"},
      { title: "Kindle E readers", image: deal_2_7 , price:"11$"},
      { title: "Shop Laptops & Tablets", image: deal_2_8 , price:"12$"},
      { title: "Shop Laptops & Tablets", image: deal_2_9 , price:"12$"},
    ];
    

  return (
<div>
<div className="bg-[#131921] p-4 flex items-center justify-between md:px-8">

      {/* Left  */}


      <div className="flex items-center  shrink-0">
        <div className="h-12 flex">
      <img src={logo}  className="object-cover"/>
    </div>

    <div className=" hidden text-white/70 pl-6 sm:flex items-center hover:scale-110">
      <BiWorld className="text-[20px] mr-1"/>
      <p className="">Location</p>
    </div>
    </div>
    



    {/* Middle */}
    <div className="flex items-center w-full">

      {/*Input */}
      <div className="hidden sm:flex relative w-full mx-4">

  
<input type = "search" placeholder="Search..." className="py-2 rounded-full pl-12 placeholder:text-[#131921] outline-0 w-full" />
<button className="absolute bg-orange-400 h-full w-12 right-0 flex items-center justify-center rounded-r-full text-white">
  <FiSearch className="text-[25px] mr-1"/>
</button>


<button className="absolute text-[#131921] h-full w-12 left-0 flex items-center justify-center rounded-r-full">
  <GoSettings/>
</button>
</div>


{/* FLAG */}

<div className=" text-white md:flex items-center font-bold cursor-pointer mr-4 hidden shrink-0">
<img src={usa} alt="" className="w-10 mr-1"/>
  <p>US</p>
  <TiArrowRepeat className="text-[15px] mt-3"/>
</div>
    </div>


    {/* Right */}

    <div className="relative flex items-center justify-center text-white text-[28px]">
      <BsCart2/>

      <div className="absolute text-[16px] h-full -top-3.5 right-2.1 text-orange-400" >0</div>
      
    
    
    
    </div>









    </div>

<div className=" bg-[#232f3e]">

  <div className="flex h-8 justify-between items-center md:max-w-[70vw] mx-auto px-10">
    {buttons.map((button) => 
    <div className="group whitespace-nowrap">  <div className="text-gray-200/70 hover:text-white cursor-pointer px-[0.7rem]">{button}</div> 
    <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div></div>
  
    )}
  </div>
</div>






<div className="relative w-full bg-[#eaeded] mx-auto">
      <div className="mx-auto  w-full lg:w-[90vw] xl:w-[70vw]">
        <div className="absolute  grad w-full lg:w-[90vw] flex   h-[15rem] sm:h-[21rem] md:h-[25rem] z-10 xl:w-[70vw]"></div>
        <div className=" w-full  lg:w-[90vw] flex relative  h-[15rem]  sm:h-[21rem] md:h-[25rem] xl:w-[70vw]">
          <img
            src={wallpaper}
            alt=""
            className="absolute object-cover w-full  lg:w-[90vw] z-0 h-[15rem] sm:h-[21rem] md:h-[25rem] xl:w-[70vw]"
          />
        </div>
      </div>
    </div>







 
  
    <div className="bg-[#eaeded]  w-full">

    <div className="py-2 mx-auto w-[80vw] xl:w-[70vw] font-semibold text-[20px]">Top Sellers in Books for you</div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5  mx-auto w-[80vw]  ">
        {products.map((product) => (
          <Product title={product.title} image={product.image} price = {product.price}/>
        ))}
      </div>
    </div>



















    <div className="bg-[#eaeded]  w-full pb-4">

      <div className="py-2 mx-auto w-[80vw] xl:w-[70vw] font-semibold text-[20px]">Deals</div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  mx-auto w-[80vw] xl:w-[70vw] gap-5  pt-4">
        {deals.map((deal) => (
          <Product title={deal.title} image={deal.image} price = {deal.price} />
        ))}
      </div>
    </div>




    
    <div className="bg-[#eaeded]  w-full pb-4">

      <div className="py-2 mx-auto w-[80vw] xl:w-[70vw] font-semibold text-[20px]">Deals</div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3  mx-auto w-[100vw] xl:w-[95vw] gap-2  pt-4">
        {deals2.map((deal) => (
          <Product title={deal.title} image={deal.image} price = {deal.price} />
        ))}
      </div>
    </div>



















<div className="h-12 shrink-0 text-center my-12 text-[18px]">

  <p>See personalized recommendations</p>
  <button className="bg-orange-400 w-44 rounded-[1rem] "><a>Sign In</a></button>
  
  <p className="">New customer? Start here.</p>
</div>










    <div className=" h-[30rem] bg-[#232f3e] text-[15px] text-white flex items-center justify-center w-full">
    <div className="flex justify-between w-full px-44">
      <div className="leading-7" >
        <p className="font-bold">Get to Know Us</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>About Amazon</p>
        <p>Investor Relations</p>
        <p>Amazon Devices</p>
        <p>Amazon Science</p>
      </div>
      <div className="leading-7">
        <p className="font-bold">	
          Make Money with Us
         
          
          
          
          
          
          
          </p>
        <p> Sell products on Amazon</p>
        <p>Sell on Amazon Business</p>
        <p>Sell apps on Amazon</p>
        <p>Become an Affiliate</p>
        <p>Advertise Your Products</p>
        <p>Self-Publish with Us</p>

        <p>Host an Amazon Hub</p>

        <p>›See More Make Money with Us</p>
      </div>
      <div className="leading-7">
        <p className="font-bold">Amazon Payment Products</p>
        <p>Amazon Business Card</p>
        <p>Shop with Points</p>
        <p>Reload Your Balance</p>
        <p>Amazon Currency Converter</p>
        
      </div>
      <div className="leading-7">
        <p className="font-bold">Let Us Help You</p>
        <p>Amazon and COVID-19</p>
        <p>Your Account</p>
        <p>Your Orders</p>
        <p>Shipping Rates & Policies</p>
        <p>Returns & Replacements</p>
        <p>Manage Your Content and Devices</p>
        <p>Amazon Assistant</p>
        <p>Help</p>
      </div>

      
    </div>




    </div>




    <div className=" h-[40rem] bg-[#131A22] text-[14px] text-white flex items-center justify-center w-full">
    <div className="flex justify-between w-full px-44">
      <div className="leading-10" >
        <p className="font-bold">
          Amazon Music <br/> 
          Stream millions <br/>
          of songs</p>
        <p>AmazonGlobal <br/>
Ship Orders<br/>
Internationally</p>
        <p>ComiXology <br/>
Thousands of<br/>
Digital Comics</p>
        <p>Prime Video Direct <br/>
Video Distribution <br/>
Made Easy</p>
        
      </div>
     
      
      <div className="leading-10" >
        <p className="font-bold">
        Amazon Advertising <br/>
Find, attract, and <br/>
engage customers</p>
        <p>	Home Services <br/>
Experienced Pros <br/>
Happiness Guarantee</p>
        <p>DPReview <br/>
Digital<br/>
Photography</p>
        <p>	Shopbop <br/>
Designer<br/>
Fashion Brands</p>
        
      </div>

      <div className="leading-10" >
        <p className="font-bold">
          Amazon Music <br/> 
          Stream millions <br/>
          of songs</p>
        <p>AmazonGlobal <br/>
Ship Orders<br/>
Internationally</p>
        <p>ComiXology <br/>
Thousands of<br/>
Digital Comics</p>
        <p>Prime Video Direct <br/>
Video Distribution <br/>
Made Easy</p>
        
      </div>
      <div className="leading-10" >
        <p className="font-bold">
          Amazon Music <br/> 
          Stream millions <br/>
          of songs</p>
        <p>AmazonGlobal <br/>
Ship Orders<br/>
Internationally</p>
        <p>ComiXology <br/>
Thousands of<br/>
Digital Comics</p>
        <p>Prime Video Direct <br/>
Video Distribution <br/>
Made Easy</p>
        
      </div>
      <div className="leading-10" >
        <p className="font-bold">
          Amazon Music <br/> 
          Stream millions <br/>
          of songs</p>
        <p>AmazonGlobal <br/>
Ship Orders<br/>
Internationally</p>
        <p>ComiXology <br/>
Thousands of<br/>
Digital Comics</p>
        <p>Prime Video Direct <br/>
Video Distribution <br/>
Made Easy</p>
        
      </div>
      <div className="leading-10" >
        <p className="font-bold">
          Amazon Music <br/> 
          Stream millions <br/>
          of songs</p>
        <p>AmazonGlobal <br/>
Ship Orders<br/>
Internationally</p>
        <p>ComiXology <br/>
Thousands of<br/>
Digital Comics</p>
        <p>Prime Video Direct <br/>
Video Distribution <br/>
Made Easy</p>
        
      </div>
      
      
    </div>

    


    </div>

    <div className="text-center h-[5rem] bg-[#131A22] text-[24px]  text-white justify-between ">

      <a className="hover:underline duration-100 ease-out cursor-pointer mr-10"> Conditions of Use</a>
      <a className="hover:underline duration-100 ease-out cursor-pointer">Privacy Notice</a>
      <a className="hover:underline duration-100 ease-out cursor-pointer ml-10 ">Your Ads Privacy Choices</a> <br/>

      <a className="text-[16px]">© 2006-2023, Normurodov Sardorbek</a>



    </div>
    </div>
    
  );
};

export default Navbar;
