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

export default function Home() {
  return (
    <ParallaxProvider>
      <div>
        <NavigationBar />
        {/* <Parallax speed={-50}>
          <Banner />
        </Parallax> */}

        <Banner />
        <Parallax speed={-30}>
          <InformationComponent />
        </Parallax>

        <Parallax speed={-1}>
          <TheTeam />
        </Parallax>

        <Parallax speed={20}>
          <OurStats />
        </Parallax>

        <Parallax speed={20}>
          <OurPricing />
        </Parallax>

        <Parallax speed={-30}>
          <Footer />
        </Parallax>

        <MobileNavigationBar />
      </div>
    </ParallaxProvider>
  );
}

