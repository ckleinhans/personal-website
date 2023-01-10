import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function TermsPage() {
  return (
    <>
      <Seo title="Terms of Use" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="terms" heading="Terms of Use" />
      </Page>
    </>
  );
}
