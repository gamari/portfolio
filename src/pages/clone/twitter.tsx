import Head from "next/head";
import React from "react";
import Sidebar from "../../components/clone/twitter/Sidebar";
import Timeline from "../../components/clone/twitter/Timeline";
import Widgets from "../../components/clone/twitter/Widgets";

const twitter = () => {
  return (
    <div>
      <Head>
        <title>Twitter-Clone</title>
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Timeline />
        <Widgets />
      </main>
    </div>
  );
};

export default twitter;
