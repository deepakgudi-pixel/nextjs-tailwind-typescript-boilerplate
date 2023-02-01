import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boiler Plate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-black">Boilerplate for nextjs-typescript-tailwind</div>;
    </div>
  );
};

export default Home;
