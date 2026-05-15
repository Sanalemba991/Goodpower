import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Industrial Power Products | Battery Cells & BMS",
  description: "Explore our catalogue of industrial-grade LiFePO4 battery cells, cylindrical cells, and advanced Battery Management Systems (BMS). Precision-engineered for global infrastructure.",
  keywords: ["Prismatic LFP Cell", "Cylindrical Cell", "Battery Management System", "BMS", "Industrial Power Catalogue"],
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}