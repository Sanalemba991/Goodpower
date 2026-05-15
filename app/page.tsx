import Image from "next/image";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Fun from "./component/Fun";
import ProductsCases from "./component/ProductsCases";
import Testimonial from "./component/Testimonal";
import Footer from "./component/Footer";
import StructuredData from "./component/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoodPower | Advanced LiFePO4 Battery & Energy Storage Solutions",
  description: "Global leader in industrial power architectures. Providing high-performance LiFePO4 batteries, Powerwalls, and solar solutions for a sustainable future.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {

  return (
    <>
    <StructuredData />
    <Navbar/>
    <Banner/> 
    <Fun/>
    <ProductsCases/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
