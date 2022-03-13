import PageLayout from "../../layouts/PageLayout";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  Button,
  Box,
  Dialog,
  TextField,
  Chip,
} from "@mui/material";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import Image from "next/image";
import PiChart from "../../assets/pi-chart.png";
import BarChart from "../../assets/bar-chart.png";
import axios from "axios";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { eachOfSeries } from "async";

const Learner = ({ learner, investments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState("");

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
              <Typography>{learner.tradeFocus}</Typography>
              <Typography>{learner.investmentNeeds}</Typography>
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
              <LinkedIn sx={{ color: "#0e76a8" }} fontSize="large" />
              <Facebook sx={{ color: "#3b5998" }} fontSize="large" />
              <Instagram sx={{ color: "#E1306C" }} fontSize="large" />
            </Grid>
          </Grid>
        </Card>
        <Box pt={3} pb={3} display="flex" justifyContent="center" width="100%">
          <Button
            sx={{ background: "#E37965" }}
            variant="contained"
            size="large"
            onClick={() => setIsModalOpen(true)}
          >
            Fund This Learner
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ width: "100%", background: "#E3B4B4" }}>
              <Box p={3}>
                <Typography variant="h5">Where I am</Typography>
                <Typography>{learner.whereIam}</Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ width: "100%", background: "#98CAD2" }}>
              <Box p={3}>
                <Typography variant="h5">Where I wanna be</Typography>
                <Typography>{learner.whereIWannaBe}</Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ width: "100%", background: "#E37965", color: "white" }}>
              <Box p={3}>
                <Typography variant="h5">
                  What do I need to get there
                </Typography>
                <Typography>{learner.whatDoINeed}</Typography>
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
          <Typography variant="h6">Current Investments</Typography>

          <Grid container spacing={2}>
            {investments.map((investment, idx) => {
              return (
                <Grid key={idx} item xs={12} sx={{ cursor: "pointer" }}>
                  <Card>
                    <Grid container spacing={2} item>
                      <Grid item>
                        <Avatar
                          variant="square"
                          src={investment.funder.avatar}
                          alt="Learner"
                          sx={{ height: 100, width: 100 }}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6">
                          {investment.funder.firstName}{" "}
                          {investment.funder.lastName}
                        </Typography>

                        <Typography>
                          <strong>Location:</strong>&nbsp;
                          {investment.funder.city}, {investment.funder.state}
                        </Typography>
                        <Chip
                          sx={{ background: "#98CAD2" }}
                          label={investment.funder.investmentInterests}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Typography>
                          <strong>Pleged:</strong>&nbsp;
                          <NumberFormat
                            thousandSeparator
                            prefix="$"
                            displayType="text"
                            placeholder="Enter Amount"
                            value={investment.amount}
                          />
                        </Typography>
                        <Typography>
                          <strong>Status:</strong>&nbsp;
                          {investment.status}
                        </Typography>
                        <Typography>
                          <strong>Funder Bio:</strong>&nbsp;
                          {investment.funder.bio}
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

      <Dialog onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <Box minWidth={400} py={3} px={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <NumberFormat
                label="Investment Amount"
                thousandSeparator
                prefix="$"
                customInput={TextField}
                placeholder="Enter Amount"
                onChange={setInvestmentAmount}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                borderRadius={4}
                backgroundColor="#E3B4B4"
                height={150}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography sx={{ fontWeight: 500, fontSize: 22 }}>
                  Donate
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                borderRadius={4}
                backgroundColor="#98CAD2"
                height={150}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography sx={{ fontWeight: 500, fontSize: 22 }}>
                  Lender
                </Typography>
                <Typography sx={{ fontWeight: 200, fontSize: 16 }}>
                  I want my money back
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                borderRadius={4}
                backgroundColor="#E37965"
                height={150}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography sx={{ fontWeight: 500, fontSize: 22 }}>
                  Investor
                </Typography>
                <Typography sx={{ fontWeight: 200, fontSize: 16 }}>
                  I want my money back +
                </Typography>
                <Box display="flex" alignItems="center">
                  <NumberFormat
                    thousandSeparator
                    prefix="$"
                    customInput={TextField}
                    placeholder="Enter Amount"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="contained"
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </PageLayout>
  );
};

export default Learner;

const getLearner = async (learnerId) => {
  const { data: learner } = await axios.get(
    `https://5zyb68jrp6.execute-api.us-east-1.amazonaws.com/prod/api/v1/learner/${learnerId}`
  );
  return learner;
};

const getLearnerInvestments = async (learnerId) => {
  const { data: investments } = await axios.get(
    `https://5zyb68jrp6.execute-api.us-east-1.amazonaws.com/prod/api/v1/learner/${learnerId}/investment`
  );
  return investments;
};

const getFunder = async (funderId) => {
  const { data: funders } = await axios.get(
    `https://5zyb68jrp6.execute-api.us-east-1.amazonaws.com/prod/api/v1/funder/${funderId}`
  );
  return funders;
};

export async function getServerSideProps({ query, params }) {
  const { learnerId } = params;
  const learner = await getLearner(learnerId);
  const { investments } = await getLearnerInvestments(learnerId);

  let investmentsWithFunders = [];
  await eachOfSeries(investments, async (investment) => {
    const funder = await getFunder(investment.funderId);

    const newInvestment = {
      ...investment,
      funder,
    };

    investmentsWithFunders.push(newInvestment);
  });

  return {
    props: {
      learner,
      investments: investmentsWithFunders,
    },
  };
}
