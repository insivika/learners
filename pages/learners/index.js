import axios from "axios";
import NumberFormat from "react-number-format";
import Link from "next/link";
import PageLayout from "../../layouts/PageLayout";
import { Card, Grid, Avatar, Typography, Button } from "@mui/material";

const Learners = ({ learners }) => {
  return (
    <PageLayout title={"Learners"}>
      <Grid container spacing={2}>
        {learners.map((learner) => {
          return (
            <Link key={learner.id} href={`/learner/${learner.id}`}>
              <Grid item xs={12} sx={{ cursor: "pointer" }}>
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
                      xs={7}
                      sx={{
                        maxHeight: 100,
                        overflow: "hidden",
                      }}
                    >
                      <Typography variant="h6">Bio:</Typography>
                      <Typography>{learner.bio}</Typography>
                    </Grid>
                    <Button
                      sx={{ alignSelf: "center", backgroundColor: "#98CAD2" }}
                      variant="contained"
                    >
                      View
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </PageLayout>
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
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
