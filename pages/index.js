import PageLayout from "../layouts/PageLayout";
import About from "../components/About";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";
import HeroArt from "../assets/hero-art.png";
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from "@mui/material";
import Image from "next/image";

export default function Home() {

  return (
    <PageLayout sx={{ background: "#eaeaea" }}>
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
        ></Box>
      </Box>

      {/* Three Box Mission */}
      <Box sx={{ py: 6 }} maxWidth="full">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              display="flex"
              flex={1}
              alignContent="center"
              flexDirection="column"
              justifyContent="center"
              sx={{ height: "100%", background: "#E3B4B4" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Build
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More...</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              display="flex"
              flex={1}
              alignContent="center"
              flexDirection="column"
              justifyContent="center"
              sx={{ height: "100%", background: "#98CAD2" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Get Funded
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More...</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              display="flex"
              flex={1}
              alignContent="center"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%", background: "#E37965" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Grow
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More...</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* ABOUT */}
      <About></About>
      {/* CONTACT */}
      <Box>
        <Contact></Contact>
      </Box>
    </PageLayout>
  );
}
