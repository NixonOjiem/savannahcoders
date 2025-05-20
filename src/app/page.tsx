"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Banner from "@/components/Banner";
import InformationComponent from "@/components/InformationComponent";
import MobileNavigationBar from "@/components/MobileNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/global.css";
import { Parallax } from "react-scroll-parallax";

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

        <MobileNavigationBar />
      </div>
    </ParallaxProvider>
  );
}

