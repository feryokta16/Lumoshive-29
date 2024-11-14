import React from "react";
import HeroSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import { servicesData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import AboutComponent from "../components/About/AboutComponent";
import MetaComponents from "../components/Meta/MetaComponents";
import JsonComponent from "../components/Meta/JsonComponent";

const ServicesContainer = () => {
  return (
    <>
      <MetaComponents
        title={"Services"}
        description={"ini adalah halamanan Services"}
        keywords={"Services"}
      />
      <JsonComponent
        title={"Services"}
        description={"ini adalah halamanan Services"}
        author={"Arif"}
        datePublished={"2022-02-02"}
      />
      <AboutComponent title={"Services"} subtitle={"Home / Services"} />
      <HeroSection />
      <TitlePageComponent title="Our Services" description="Our Expertise" />
      <ExpertiseSection services={servicesData} />
      <BannerComponent />
    </>
  );
};

export default ServicesContainer;
