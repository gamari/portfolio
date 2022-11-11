import React from "react";
import Hero from "../../components/templates/Hero";
import Layout from "../../components/templates/layouts/Layout";
import Section from "../../components/templates/Section";

const index = () => {
  return (
    <Layout>
      <Hero title="制作物" />

      <Section>
        <div className="flex items-center justify-center h-96">
          <div>
            <h3>クローン</h3>
            <a href="/clone/twitter">Twitterクローン</a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default index;
