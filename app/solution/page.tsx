import { Metadata } from "next";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Solution from "./Solution";

export const metadata: Metadata = {
  title: "Industrial Solutions | Customized Power Systems",
  description: "Discover our comprehensive energy solutions for residential, commercial, and industrial applications. Custom-engineered power architectures for maximum efficiency.",
  keywords: [
    "LiFePO4 Battery",
    "Energy Storage",
    "Powerwall",
    "Solar Inverter",
    "EV Battery",
    "Lithium Battery Manufacturer",
    "Industrial Power Solutions",
    "GoodPower",
    "Lovosis",
    "Battery Management System",
    "BMS",
    "Solar Energy Solutions"
  ],
  authors: [{ name: "GoodPower Team" }],
  creator: "GoodPower",
  publisher: "GoodPower",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Industrial Solutions | Customized Power Systems",
    description: "Discover our comprehensive energy solutions for residential, commercial, and industrial applications.",
    url: "/solution",
    siteName: "GoodPower",
    images: [
      {
        url: "/banner/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "GoodPower Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Solutions | Customized Power Systems",
    description: "Discover our comprehensive energy solutions for residential, commercial, and industrial applications.",
    images: ["/banner/banner1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SolutionPage() {
  return (
    <>
      <Navbar />
      <Solution />
      <Footer />
    </>
  );
}