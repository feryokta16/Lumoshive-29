import React from "react";
import OurWorkComponent from "../components/OurWork/OurWorkComponent";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaComponents from "../components/Meta/MetaComponents";
import JsonComponent from "../components/Meta/JsonComponent";

const PortofolioContainer = () => {
  return (
    <>
      <MetaComponents
        title={"Portofolio"}
        description={"ini adalah hamanan Portofolio"}
        keywords={"our work, portfolio"}
      />
      <JsonComponent
        title={"Portfolio"}
        description={"ini adalah halamanan Portofolio"}
        author={"Arif"}
        datePublished={"2022-02-02"}
      />
      <AboutComponent title={"Portfolio"} subtitle={"Home / Portfolio"} />
      <OurWorkComponent />
      <BannerComponent />
    </>
  );
};

export default PortofolioContainer;
