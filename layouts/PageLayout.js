import Head from "next/head";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import { Container } from "@mui/material";

const PageLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Container component="main">{children}</Container>
      <Footer />
    </>
  );
};

export default PageLayout;
