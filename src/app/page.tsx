"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Banner from "@/components/Banner";
import InformationComponent from "@/components/InformationComponent";
import MobileNavigationBar from "@/components/MobileNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/global.css";
import { Parallax } from "react-scroll-parallax";
import TheTeam from "@/components/TheTeam";
import OurStats from "@/components/OurStats";
import OurPricing from "@/components/OurPricing";
import Footer from "@/components/Footer";
import TestingComponent from "@/components/TestingComponent";

export default function Home() {
  return (
    <ParallaxProvider>
      <div>
        <NavigationBar />
        <Banner />
        {/* <InformationComponent /> */}
        <Parallax speed={-10} className="parallax-layer">
          <InformationComponent />
        </Parallax>

        <Parallax speed={20}>
          <TheTeam />
        </Parallax>


        <OurStats />


        <Parallax speed={20}>
          <OurPricing />
        </Parallax>

        {/* <Parallax speed={-30}>
          <TestingComponent />
        </Parallax> */}


        <Footer />


        <MobileNavigationBar />
      </div>
    </ParallaxProvider>
  );
}

