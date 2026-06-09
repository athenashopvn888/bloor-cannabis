import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Bloor Cannabis Dispensary | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Bloor Cannabis Dispensary in Toronto.",
  alternates: {
    canonical: "https://bloorcanabisdispensary.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
