import React from "react";
import Form from "../../features/contact/components/Form";
import SocialMedias from "../../features/templates/components/SocialMedias";
import Hero from "../../features/templates/components/Hero";
import Layout from "../../features/base/components/Layout";
import Section from "../../features/base/components/container/Section";

const index = () => {
  return (
    <Layout>
      <Hero title="CONTACT." />

      <Section title="Social">
        <SocialMedias />
      </Section>

      <Form />
    </Layout>
  );
};

export default index;
