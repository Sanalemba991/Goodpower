import { Metadata } from "next";

export const BASE_URL = "https://profile.lovosis.in";
export const SITE_NAME = "GoodPower";

export const sharedMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Advanced LiFePO4 Battery & Energy Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "GoodPower provides premium LiFePO4 battery solutions, energy storage systems, and industrial power architectures. Safe, reliable, and high-performance lithium technology for homes and industries.",
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
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: BASE_URL,
    title: SITE_NAME,
    description: "Advanced LiFePO4 Battery & Energy Solutions for the Next Generation.",
    images: [
      {
        url: "/banner/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "GoodPower Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Advanced LiFePO4 Battery & Energy Solutions.",
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
