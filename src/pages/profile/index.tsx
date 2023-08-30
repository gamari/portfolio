import Head from "next/head";
import React from "react";
import FlowItem from "../../features/templates/components/FlowItem";
import Hero from "../../features/templates/components/Hero";
import Layout from "../../features/base/components/Layout";
import Section from "../../features/base/components/container/Section";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Gamari Portfolio</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="PROFILE." />

      <Section title="自己紹介">
        <main className="flex flex-col bg-white">
          <div className="flex items-center justify-center border-b-2 border-black"></div>

          {/* TODO: 個人的なことを書く */}
          <Flow />
        </main>
      </Section>
    </Layout>
  );
};

const Flow = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex items-center justify-center pt-10 mx-auto text-2xl">
        ＜経歴＞
      </div>
      <div className="container flex flex-wrap px-5 py-12 mx-auto">
        <FlowItem
          number={1}
          title={"2019/04~ SIer/SES企業に入社"}
          content={
            "未経験からSIer兼SESの企業に入社。最初の４ヶ月は研修を行い、サプライチェーンに関するゲームを作成。その傍ら３つの資格を獲得する。"
          }
          skill={"Java/OracleDB"}
        />
        <FlowItem
          number={2}
          title={"2019/08~"}
          content={
            "金融関係のソースコードマイグレーションプロジェクトに参画。自動生成されたソースコードに対してテストコードを作成する業務に従事。JUnitを利用してカバレッジ100%を目指した。"
          }
          skill={"Java/JUnit5/OracleDB/"}
        />
        <FlowItem
          number={3}
          title={"2019/12~"}
          content={
            "テスト案件が終わったため、社内システムの運用保守を担当。担当したアプリケーションは「POSデータ分析ツール」と「家計簿システム」の2つ。"
          }
          skill={"Java/SpringBoot/OracleDB/AWS/EC2/Redshift"}
        />
        <FlowItem
          number={4}
          title={"2020/08~"}
          content={
            "予てより希望していた常駐勤務。企業情報分析ツールの開発保守を担当。主にマスターメンテアプリケーションと、名刺に関わるAPIに従事。"
          }
          skill={"Java/SpringBoot/Python/Django/AWS/"}
        />
        <FlowItem
          number={5}
          title={"~現在"}
          content={
            "休養や「スキルアップ」を図りたいという理由のために前職を退職。セキュリティなどに興味を持ち始めており、今後はその方向を個人的には勉強したいと考えています。"
          }
          skill={"Java/Kotlin/Python/Golang/Rust/セキュリティ/...etc"}
        />
      </div>
    </section>
  );
};

export default index;
