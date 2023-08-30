import Link from "next/link";
import React from "react";
import Hero from "../../components/templates/Hero";
import Layout from "../../components/templates/layouts/Layout";
import Section from "../../components/templates/Section";
import Works from "../../components/organisms/Works";

const index = () => {
  return (
    <Layout>
      <Hero title="制作物" />

      <Section className="pb-24">
        <Works />
      </Section>
    </Layout>
  );
};

export default index;
