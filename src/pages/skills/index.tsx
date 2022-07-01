import React from "react";
import Hero from "../../components/templates/Hero";
import Layout from "../../components/templates/layouts/Layout";
import Section from "../../components/templates/Section";

const index = () => {
  return (
    <Layout>
      <Hero title="(準備中)" />

      <Section title="React/Next.js">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Card title={"TEST"} category={"React"}>
                <div>aaa</div>
              </Card>
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </Section>
      <Section title="Java/SpringBoot">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Card title={"TEST"} category={"React"}>
                <div>aaa</div>
              </Card>
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </Section>
    </Layout>
  );
};

const Card = ({ category, title, children }: any) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <img
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            {category}
          </h2>
          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
            {title}
          </h1>
          <div className="mb-3 leading-relaxed">{children}</div>
          <div className="flex flex-wrap items-center ">
            <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
