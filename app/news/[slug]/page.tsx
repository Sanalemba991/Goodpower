import { Metadata } from "next";
import NewsDetailClient, { newsData } from "./NewsDetailClient";
import { SITE_NAME } from "../../shared-metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsData[slug as keyof typeof newsData];

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | ${post.category}`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + "...",
    alternates: {
      canonical: `/news/${slug}`,
    },
    openGraph: {
      title: `${post.title} - ${SITE_NAME}`,
      description: post.category,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function NewsDetailPage() {
  return <NewsDetailClient />;
}
