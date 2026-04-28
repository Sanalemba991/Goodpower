import Image from "next/image";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Fun from "./component/Fun";
import ProductsCases from "./component/ProductsCases";
import Testimonial from "./component/Testimonal";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/> 
    <Fun/>
    <ProductsCases/>
    <Testimonial/>
    </>
  );
}
