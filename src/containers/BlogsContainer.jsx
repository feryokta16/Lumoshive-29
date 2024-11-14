import React from "react";
import BlogTopComponent from "../components/BlogTop/BlogTopComponent";
import BlogBottomComponent from "../components/BlogBottom/BlogBottomComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import AboutComponent from "../components/About/AboutComponent";
import MetaComponents from "../components/Meta/MetaComponents";
import JsonComponent from "../components/Meta/JsonComponent";

const BlogsContainer = () => {
  return (
    <div>
      <MetaComponents
        title={"Blog"}
        description={"ini adalah halamanan Blog"}
        keywords={"latest post, blog, blog"}
      />
      <JsonComponent
        title={"Blog"}
        description={"ini adalah halamanan Blog"}
        author={"Arif"}
        datePublished={"2022-02-02"}
      />
      <AboutComponent title="Blogs" subtitle="Home / Blogs" />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogTopComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
    </div>
  );
};

export default BlogsContainer;
