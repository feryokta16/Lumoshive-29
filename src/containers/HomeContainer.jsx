import React from "react";
import HeroComponent from "../components/Hero/HeroComponent";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import HeroServiceSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import CardComponent from "../components/Card/CardComponent";
import { planingData, servicesData, leadersData } from "../utils/data";
import FormContactComponent from "../components/Contact/FormContactComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import TestimonialComponent from "../components/Testimonial/TestimonialComponent";
import BlogBottomComponenet from "../components/BlogBottom/BlogBottomComponent";
import MetaComponents from "../components/Meta/MetaComponents";
import JsonComponent from "../components/Meta/JsonComponent";

const HomeContainer = () => {
  return (
    <>
      <MetaComponents
        title={"Home"}
        description={"ini adalah hamanan home"}
        keywords={"Home, about, services, contact"}
      />
      <JsonComponent
        title={"Home"}
        description={"ini adalah halamanan Home"}
        author={"Arif"}
        datePublished={"2022-02-02"}
      />
      <HeroComponent />
      <AboutUsComponent />
      <TitlePageComponent title={"Planning"} description={"Our Work"} />
      <ExpertiseSection services={planingData} />
      <HeroServiceSection page={"home"} />
      <TitlePageComponent title={"Services"} description={"Our Expertice"} />
      <ExpertiseSection services={servicesData} />
      <TestimonialComponent />
      <CardComponent leadersData={leadersData} />
      <div className="bg-color-container-contact">
        <FormContactComponent page={"home"} />
      </div>
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogBottomComponenet />
      <BannerComponent />
    </>
  );
};

export default HomeContainer;
