"use client";

import { Heroes } from "@/components/blocks/heroes";
import { Hero } from "@/components/blocks/hero";
import { Cases } from "@/components/blocks/cases";
import { Testimonials } from "@/components/blocks/testimonials";
import { Features } from "@/components/blocks/features";
import { Pricings } from "@/components/blocks/pricings";
import { Stats } from "@/components/blocks/stats";
import { CTAs } from "@/components/blocks/ctas";
import { Blogs } from "@/components/blocks/blogs";
import { FAQs } from "@/components/blocks/faqs";
import { Contacts } from "@/components/blocks/contacts";
import { Footers } from "@/components/blocks/footers";

export default function Home() {
  return (
    <>
          
      <Heroes />
      <Cases />
      <Testimonials />
      <Features />
      <Pricings />
      <Stats />
      <CTAs />
    </>
  );
}
