import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Header9 from "@/components/layout/header/Header9";
import Register from "@/components/pages/Register";
import React from "react";

export const metadata = {
  title: "Register || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Register />
        <FooterOne />
      </main>
    </>
  );
}
