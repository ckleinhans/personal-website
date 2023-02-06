import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Caelan Kleinhans" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="My Skills" />
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Blog"]}
        /> */}
        {/* <ProjectsSection sectionId="projects" heading="My Projects" /> */}
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
