import type { Metadata } from "next";
import Container from "@/components/container";
import { ParallaxScroll } from "@/components/parallax-scroll";
import { Subheading } from "@/components/subheading";

export const metadata: Metadata = {
  title: "Art",
  description: "Art by Narayan Mishra.",
  alternates: {
    canonical: "/art",
  },
};

export default function ArtPage() {
  const images = Array.from(
    { length: 20 },
    (_, index) => `/art/Day (${index + 1}).jpeg`,
  );

  return (
    <Container className="min-h-screen">
      <section className="pt-10 pb-4">
        <Subheading>Art</Subheading>
      </section>
      <ParallaxScroll images={images} className="mx-auto" />
    </Container>
  );
}
