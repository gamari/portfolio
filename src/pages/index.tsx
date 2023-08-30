import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../features/base/components/Layout";
import Logo from "../features/base/components/Logo";
import { links } from "../data";

const Home: NextPage = () => {
  return (
    <Layout isTop={true}>
      <div className="hero">
        <MainLogo />
        <Menu />
      </div>
    </Layout>
  );
};

const MainLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <Logo className="w-32 h-32 text-gray-800" />

      <div className="mb-2 text-6xl">GAMARI</div>
      <div className="text-xl">WEB ENGINEER</div>
    </div>
  );
};

const Menu = () => {
  return (
    <nav className="flex flex-row space-x-4 font-bold">
      {links.map((item) => {
        if (item.title == "Top") return;
        return (
          <div key={item.title}>
            <Link href={item.link}>
              <a className="hover:scale-110">{item.title}</a>
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Home;
