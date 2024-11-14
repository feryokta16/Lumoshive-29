import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import { leadersData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaComponents from "../components/Meta/MetaComponents";
import JsonComponent from "../components/Meta/JsonComponent";

const AboutContainer = () => {
  return (
    <div>
      <MetaComponents
        title={"About"}
        description={"ini adalah halamanan About"}
        keywords={"about, about us, leaders"}
      />
      <JsonComponent
        title={"About"}
        description={"ini adalah halamanan About"}
        author={"Arif"}
        datePublished={"2022-02-02"}
      />
      <About title="About" subtitle="Home / About" />
      <AboutUS />
      <Card leadersData={[...leadersData, ...leadersData]} />
      <BannerComponent />
    </div>
  );
};

export default AboutContainer;
