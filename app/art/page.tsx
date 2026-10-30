import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Art",
  description: "Art by Narayan Mishra.",
  alternates: {
    canonical: "/art",
  },
};

export default function ArtPage() {
  return <Container className="min-h-screen">{null}</Container>;
}
