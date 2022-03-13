import PageLayout from "../layouts/PageLayout";
import styles from "../styles/Home.module.css";
import HeroArt from "../assets/hero-art.png";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <Box display="flex" sx={{ background: "#D9D0B8" }}>
        <Box
          display="flex"
          flex={1}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={2}
          pl={2}
          pt={3}
          pb={3}
        >
          <Typography variant="h1" sx={{ color: "#33523E", fontSize: 36 }}>
            WE ARE LEARNER
          </Typography>
          <Typography variant="h6" gutterBottom>
            Funding the future of tomorrow one learner at a time
          </Typography>
          <Button
            variant="contained"
            sx={{ maxWidth: 150, backgroundColor: "#EAEAEA", color: "black" }}
          >
            Get Started
          </Button>
        </Box>

        <Box flex={2}>
          <Image src={HeroArt} alt="Hero art" />
        </Box>
      </Box>
    </PageLayout>
  );
}
