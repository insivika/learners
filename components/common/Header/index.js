import Head from "next/head";

const Header = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
