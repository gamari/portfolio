import React from "react";
import { NextPage } from "next";

import Layout from "../../features/base/components/Layout";
import Hero from "../../features/templates/components/Hero";
import Section from "../../features/base/components/container/Section";
import Link from "next/link";

type Props = {};

const index: NextPage<Props> = () => {
  return (
    <Layout>
      <Hero title="Blog." />

      <Section className="pb-10">
        <div className="text-3xl font-bold">記事サイト</div>

        <p className="p-4 text-gray-600">
          以下のサイトにて記事を書いています。
        </p>

        <div className="border rounded-lg p-4 flex flex-row">
          <Link href="https://qiita.com/Gamari0009" target="_blank">
            <div className="bg-[rgb(85,197,0)] text-2xl text-white p-2 rounded-lg cursor-pointer">
              <div>Qiita</div>
            </div>
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default index;
