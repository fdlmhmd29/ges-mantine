import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Yellow
import Preloader from "../Preloader";
import SectionDivider from "../SectionDivider";
const Hero = dynamic(() => import("./Hero"), {
  suspense: true,
});
const Banner = dynamic(() => import("./Banner"), {
  suspense: true,
});
const Description = dynamic(() => import("./Description"), {
  suspense: true,
});
const Customers = dynamic(() => import("./Customer"), {
  suspense: true,
});
const Portfolio = dynamic(() => import("./Portfolio"), {
  suspense: true,
});
const Services = dynamic(() => import("./Services"), {
  suspense: true,
});

export default function LandingPage() {
  return (
    <Suspense>
      <Hero />
      <Banner />
      <Description />
      <SectionDivider />
      <Customers />
      <Portfolio />
      <Services />
    </Suspense>
  );
}
