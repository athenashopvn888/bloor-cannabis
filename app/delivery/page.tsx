import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Bloor Cannabis Dispensary | Toronto",
  description: "Get notified when Bloor Cannabis Dispensary launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://bloorcanabisdispensary.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
