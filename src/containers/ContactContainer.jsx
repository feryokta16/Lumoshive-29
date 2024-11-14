import React from "react";
import "../components/Contact/FormContactStyles.css";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import FormContactComponent from "../components/Contact/FormContactComponent";
import MetaComponents from "../components/Meta/MetaComponents";
import JsonComponent from "../components/Meta/JsonComponent";

const ContactContainer = () => {
  return (
    <>
      <MetaComponents
        title={"Contact"}
        description={"ini adalah hamalaman Contact"}
        keywords={"latest post, blog, blog"}
      />
      <JsonComponent
        title={"Contact"}
        description={"ini adalah halamanan Contact"}
        author={"Arif"}
        datePublished={"2022-02-02"}
      />
      <AboutComponent title="Contact" subtitle="Home / Contact" />
      <div className="bg-color-container-contact">
        <FormContactComponent />
      </div>
      <BannerComponent />
    </>
  );
};

export default ContactContainer;
