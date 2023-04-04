import Link from "next/link";
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
            {/* <h3>クローン</h3>
            <Link href="/clone/twitter">Twitterクローン</Link> */}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default index;
