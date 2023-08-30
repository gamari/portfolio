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

      <Section title="Social" className="py-10">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
          お問い合わせ
        </h2>

        <SocialMedias />
      </Section>
    </Layout>
  );
};

export default index;
