import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Bloor Cannabis Dispensary | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Bloor Cannabis Dispensary.",
  alternates: {
    canonical: "https://bloorcanabisdispensary.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
