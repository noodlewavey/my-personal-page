import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Head from "next/head";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import CircularImage from "../components/CircularImage";

const Home: NextPage = () => {
  return (
    <Layout isHome>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="M-Portfólio"
        description="Your minimalist, personal portfolio"
      />

      <Card />
      <Card2 />
    </Layout>
  );
};

export default Home;
