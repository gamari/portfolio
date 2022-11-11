import React from "react";
import Card from "../../components/molecules/Card";
import Hero from "../../components/templates/Hero";
import Layout from "../../components/templates/layouts/Layout";
import Section from "../../components/templates/Section";

const index = () => {
  return (
    <Layout>
      <Hero title="技術" />

      {/* React */}
      <Section title="React/Next.js">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Card
                title={"LPサンプル"}
                category={"React"}
                url="/skills/lp/sample01"
              >
                <div>LP制作物1</div>
              </Card>
            </div>
          </div>
        </section>
      </Section>

      {/* Java */}
      <Section title="Java/SpringBoot">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Card />
            </div>
          </div>
        </section>
      </Section>
    </Layout>
  );
};

export default index;
