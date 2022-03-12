import axios from "axios";
import NumberFormat from "react-number-format";
import Link from "next/link";

import { Card, Container, Grid, Avatar, Typography, Box } from "@mui/material";

const Learners = ({ learners }) => {
  console.log(learners);
  return (
    <Container>
      <Grid container spacing={1}>
        {learners.map((learner) => {
          return (
            <Grid key={learner.id} item xs={12}>
              <Card>
                <Box>
                  <Grid container item>
                    <Grid item>
                      <Box mr={1}>
                        <Avatar
                          variant="square"
                          src={learner.avatar}
                          alt="Learner"
                          sx={{ height: 100, width: 100 }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
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
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Learners;

const getLearners = async () => {
  //   const { data: learners } = await axios.get("/api/learners");
  //   return learners;
};

export async function getServerSideProps({ query }) {
  const learners = await getLearners();

  return {
    props: {
      learners: [
        {
          avatar: "https://picsum.photos/id/1/200/200",
          firstName: "Michelle",
          lastName: "Learner",
          id: 123,
          bio: "test",
          trade: "Software Engineer",
          focus: "test",
          location: "Nashville, TN",
          investmentNeeds: {
            seeking: 10000,
          },
        },
        {
          avatar: "https://picsum.photos/id/2/200/200",
          firstName: "Josh",
          lastName: "Cross",
          id: 123,
          bio: "test",
          trade: "Plumber",
          focus: "test",
          location: "Nashville, TN",
          investmentNeeds: {
            seeking: 10000,
          },
        },

        {
          avatar: "https://picsum.photos/id/3/200/200",
          firstName: "Philipp",
          lastName: "Albrecht",
          id: 123,
          bio: "test",
          trade: "HVAC",
          focus: "test",
          location: "Nashville, TN",
          investmentNeeds: {
            seeking: 10000,
          },
        },
        {
          avatar: "https://picsum.photos/id/4/200/200",
          firstName: "Philipp",
          lastName: "Albrecht",
          id: 123,
          bio: "test",
          trade: "HVAC",
          focus: "test",
          location: "Nashville, TN",
          investmentNeeds: {
            seeking: 10000,
          },
        },
        {
          avatar: "https://picsum.photos/id/5/200/200",
          firstName: "Philipp",
          lastName: "Albrecht",
          id: 123,
          bio: "test",
          trade: "HVAC",
          focus: "test",
          location: "Nashville, TN",
          investmentNeeds: {
            seeking: 10000,
          },
        },
      ],
    },
  };
}
