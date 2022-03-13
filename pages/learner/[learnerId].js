import PageLayout from "../../layouts/PageLayout";
import { Card, Grid, Avatar, Typography, Button, Box } from "@mui/material";
import NumberFormat from "react-number-format";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import Image from "next/image";
import PiChart from "../../assets/pi-chart.png";
import BarChart from "../../assets/bar-chart.png";

const Learner = ({ learner }) => {
  return (
    <PageLayout>
      <Grid container>
        <Card>
          <Grid container spacing={2} item>
            <Grid item>
              <Avatar
                variant="square"
                src={learner.avatar}
                alt="Learner"
                sx={{ height: 100, width: 100 }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">
                {learner.firstName} {learner.lastName}
              </Typography>
              <Typography>{learner.location}</Typography>
              <Typography>
                <NumberFormat
                  thousandSeparator
                  fixedDecimalScale
                  displayType="text"
                  prefix="$"
                  value={learner.investmentNeeds.seeking}
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                maxHeight: 100,
                overflow: "hidden",
              }}
            >
              <Typography variant="h6">Bio:</Typography>
              <Typography>{learner.bio}</Typography>
            </Grid>
            <Grid
              xs={2}
              item
              container
              alignContent="center"
              justifyContent="center"
            >
              <LinkedIn />
              <Facebook />
              <Instagram />
            </Grid>
          </Grid>
        </Card>
        <Box pt={3} pb={3} display="flex" justifyContent="center" width="100%">
          <Button
            sx={{ background: "#E37965" }}
            variant="contained"
            size="large"
          >
            Fund This Learner
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ width: "100%", background: "#E3B4B4" }}>
              <Box p={3}>
                <Typography variant="h5">Where I am</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ width: "100%", background: "#98CAD2" }}>
              <Box p={3}>
                <Typography variant="h5">Where I wanna be</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ width: "100%", background: "#E37965", color: "white" }}>
              <Box p={3}>
                <Typography variant="h5">
                  What do I need to get there
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: 2 }}>
          <Box p={2}>
            <Typography variant="h6">Job Market Stats</Typography>
            <Box display="flex" justifyContent="space-around">
              <Box>
                <Typography>Racial Makeup</Typography>
                <Image height={200} width={200} src={PiChart} alt="pi chart" />
              </Box>

              <Box>
                <Typography>Market Growth</Typography>
                <Image height={200} src={BarChart} alt="pi chart" />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid container>
          <Typography variant="h6">Current Investors</Typography>

          <Grid container spacing={2}>
            {learner.investors.map((investor, idx) => {
              return (
                <Grid key={idx} item xs={12} sx={{ cursor: "pointer" }}>
                  <Card>
                    <Grid container spacing={2} item>
                      <Grid item>
                        <Avatar
                          variant="square"
                          src={investor.avatar}
                          alt="Learner"
                          sx={{ height: 100, width: 100 }}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6">
                          {investor.firstName} {investor.lastName}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Learner;

const getLearner = async () => {
  //   const { data: learners } = await axios.get("/api/learners");
  //   return learners;
};

export async function getServerSideProps({ query }) {
  const learner = await getLearner();

  return {
    props: {
      learner: {
        avatar: "https://picsum.photos/id/1/200/200",
        firstName: "Michelle",
        lastName: "Learner",
        id: 123,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        trade: "Software Engineer",
        focus: "test",
        location: "Nashville, TN",
        investmentNeeds: {
          seeking: 10000,
        },
        investors: [
          {
            avatar: "https://picsum.photos/id/10/200/200",
            firstName: "Pam",
            lastName: "Beesley",
          },
          {
            avatar: "https://picsum.photos/id/11/200/200",
            firstName: "Michael",
            lastName: "Scott",
          },
        ],
      },
    },
  };
}
