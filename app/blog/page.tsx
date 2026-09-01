import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SEO_PAGES } from "../lib/seoPages";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Bloor Cannabis Store Guides",
  description: "Store guides and locally useful information from Bloor Cannabis Dispensary in Toronto.",
  alternates: { canonical: "https://bloorcannabisdispensary.com/blog/" },
};

export default function BlogPage(){return <main className={styles.page}><Navbar /><header className={styles.hero}><p>Bloor Cannabis · Store guides</p><h1>Local information</h1><span>Store information, product-category explainers and visit planning for adult customers 19+.</span></header><section className={styles.grid}>{SEO_PAGES.map((post,index)=><Link href={`/info/${post.slug}`} className={styles.card} key={post.slug}><small>{String(index+1).padStart(2,"0")}</small><i aria-hidden="true">{post.icon}</i><h2>{post.h1}</h2><p>{post.heroTagline}</p><strong>Read guide →</strong></Link>)}</section><Footer /></main>}
