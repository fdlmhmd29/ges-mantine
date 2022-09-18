import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import BannerNew from "../Banner";

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
// const Portfolio = dynamic(() => import("./Portfolio"), {
//   suspense: true,
// });
const Porto = dynamic(() => import("./Porto"), {
  suspense: true,
});

const Highlight = dynamic(() => import("./Highlight"), {
  suspense: true,
});

const Contact = dynamic(() => import("./Contact"), {
  suspense: true,
});

export default function LandingPage() {
  return (
    <Suspense fallback={<Preloader />}>
      <Hero />
      <Banner />
      <Description />
      <SectionDivider />
      <Customers />
      <Highlight />
      <SectionDivider />
      <Contact />
      <Porto />
      {/* <BannerNew /> */}
      {/* <Portfolio /> */}
      {/* <Services /> */}
    </Suspense>
  );
}
