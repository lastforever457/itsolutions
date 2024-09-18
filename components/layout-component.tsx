"use client";

import React, { useEffect } from "react";
import TopButton from "@/components/top-button";
import "aos/dist/aos.css";
import AOS from "aos";
import MainHeader from "@/components/main-header";
import { BrowserRouter } from "react-router-dom";
import FooterComponent from "@/components/footer";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 800,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <html lang="en">
      <body className={`antialiased flex flex-col`}>
        <BrowserRouter>
          <MainHeader />
          {children}
          <FooterComponent />
          <TopButton />
        </BrowserRouter>
      </body>
    </html>
  );
};

export default LayoutComponent;
