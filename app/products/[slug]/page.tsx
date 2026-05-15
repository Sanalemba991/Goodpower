import { Metadata } from "next";
import { getProductBySlug } from "@/lib/api";
import ProductDetailClient from "./ProductDetailClient";
import { SITE_NAME } from "../../shared-metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${product.category}`,
    description: product.description,
    keywords: [...product.features, product.category, product.name],
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} - ${SITE_NAME}`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}