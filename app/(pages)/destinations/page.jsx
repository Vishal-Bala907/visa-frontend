import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import Information from "@/components/pages/destinations/Information";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import Faq from "@/components/pages/destinations/Faq";
import Hero from "@/components/pages/destinations/Hero";
import Process from "@/components/pages/destinations/Process";
import TourList1 from "@/components/pages/destinations/TourList";
import TourSlider from "@/components/pages/destinations/TourSlider";
import React from "react";
import Documents from "@/components/pages/destinations/Documents";

export const metadata = {
  title: "Destinations || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header2 />
        <Hero />
        {/* <SpacialOffer /> */}
        <TourList1 />
        <Process />
        <Documents />
        <TestimonialOne />
        <TourSlider />
        <Faq />
        {/* <Information /> */}
        {/* <ArticlesOne /> */}
        <FooterTwo />
      </main>
    </>
  );
}
