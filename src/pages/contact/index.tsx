import React, { useState } from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import Form from "../../components/organisms/contact/Form";
import SocialMedias from "../../components/organisms/SocialMedias";
import Hero from "../../components/templates/Hero";
import Layout from "../../components/templates/layouts/Layout";
import Section from "../../components/templates/Section";

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
