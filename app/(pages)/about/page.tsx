import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO description",
  keywords: ["AboutPage", "text", "next"],
};

const AboutPage = () => {
  return <h1>About Page</h1>;
};

export default AboutPage;
