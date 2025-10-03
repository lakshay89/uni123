import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import CounterSection from "./Components/CounterSection/Counter";
import Tranding from "./Components/TrandingProducts/Tranding";
import Category from "./Components/Categories/Categories";
import BestSellerProduct from "./Components/BestSellerProduct/BestSellerProduct";
import Testimonial from "./Components/Testimonial/Testimonial";
import Banner from "./Components/Banner/Banner";
import ServicesSection from "./Components/Services/Services";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import BestProduct from "./Components/BestProduct/BestProduct";

export default function Home() {
  return (
   <>
     <Header/>
    <Category/>
    <BrandCarousel/>
    {/* <BestSellerProduct/> */}
     <CounterSection/>
    {/* <Banner/> */}
      <BestProduct/>
     <Tranding/>
     <Testimonial/>
     <ServicesSection/>
   </>
  );
}
