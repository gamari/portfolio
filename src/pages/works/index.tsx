import Link from "next/link";
import React from "react";
import Hero from "../../features/templates/components/Hero";
import Layout from "../../features/base/components/Layout";
import Section from "../../features/base/components/container/Section";
import Works from "../../features/work/components/Works";

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
