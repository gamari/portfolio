import { GetServerSideProps, NextPage } from "next";
import React from "react";

import { client } from "../../apis/MicrocmsApi";
import Layout from "../../components/templates/layouts/Layout";
import { PostType } from "../../types/PostType";
import PostViewList from "../../components/organisms/blog/PostViewList";
import Hero from "../../components/templates/Hero";

type Props = {
  posts: PostType[];
};

const index: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Hero title="Blog." />

      <main>
        <PostViewList posts={posts} />
      </main>
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
