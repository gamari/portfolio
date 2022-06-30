import { GetServerSideProps, NextPage } from "next";
import React from "react";

import { client } from "../../apis/MicrocmsApi";
import Layout from "../../components/templates/layouts/Layout";
import { PostType } from "../../types/PostType";
import PostViewList from "../../components/organisms/blog/PostViewList";
import Hero from "../../components/templates/Hero";
import Section from "../../components/templates/Section";

type Props = {
  posts: PostType[];
};

const index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Hero title="Blog." />

      <Section>
        <PostViewList posts={posts} />
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await client.get({ endpoint: "blogs" });

  const posts: PostType[] = data["contents"];

  return {
    props: {
      posts,
    },
  };
};

export default index;
