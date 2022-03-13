import axios from "axios";
import Link from "next/link";
import PageLayout from "../../layouts/PageLayout";
import { Card, Grid, Avatar, Typography, Button } from "@mui/material";

const Learners = ({ learners }) => {
  return (
    <PageLayout title={"Learners"}>
      <Grid container spacing={2}>
        {learners.map((learner) => {
          return (
            <Link
              key={learner.learnerId}
              href={`/learner/${learner.learnerId}`}
            >
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
                      <Typography>{learner.tradeFocus}</Typography>
                      <Typography>{learner.investmentNeeds}</Typography>
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
  try {
    const { data: learners } = await axios.get(
      "https://5zyb68jrp6.execute-api.us-east-1.amazonaws.com/prod/api/v1/learner"
    );
    return learners;
  } catch (error) {
    console.log(error);
  }
};

export async function getServerSideProps({ query }) {
  const { learners } = await getLearners();

  return {
    props: {
      learners,
    },
  };
}
