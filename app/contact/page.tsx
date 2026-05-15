import { Metadata } from "next";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote",
  description: "Contact GoodPower for inquiries about our LiFePO4 battery solutions, energy storage systems, or custom power architectures. Our engineering team is ready to assist.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
