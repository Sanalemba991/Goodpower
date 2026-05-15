import { Metadata } from "next";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import About from "./About";

export const metadata: Metadata = {
  title: "About Us | Leading Energy Innovation",
  description: "Learn more about GoodPower's mission to power the future with sustainable LiFePO4 battery technology and industrial energy solutions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
