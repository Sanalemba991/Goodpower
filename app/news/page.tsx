import { Metadata } from "next";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import News from "./News";

export const metadata: Metadata = {
  title: "News & Updates | Energy Industry Insights",
  description: "Stay updated with the latest news, product launches, and technological breakthroughs in the energy storage and battery industry from GoodPower.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <News />
      <Footer />
    </>
  );
}
