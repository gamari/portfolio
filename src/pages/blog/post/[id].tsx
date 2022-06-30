import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { client } from "../../../apis/MicrocmsApi";
import Markdown from "../../../components/atoms/markdown/Markdown";
import Layout from "../../../components/templates/layouts/Layout";
import Section from "../../../components/templates/Section";
import { PostType } from "../../../types/PostType";

type Props = {
  post: PostType;
};

const index: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <h2 className="hero">
        <div className="mb-3 text-4xl">Title.</div>
        <div className="text-xl">{post?.title}</div>
      </h2>
      <main>
        <Section>
          <div className="flex items-center justify-center">
            <div className="px-3 py-2 mb-6 text-2xl font-bold text-white rounded-full bg-baseblue">
              {post.category?.name || "カテゴリーなし"}
            </div>
          </div>
          <Markdown content={post?.content || ""} />
        </Section>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const post = await client.get({ endpoint: "blogs", contentId: id as string });

  return { props: { post } };
};

export default index;
