import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ShareStory from "../../assets/share-story.jpg";
import PeaceOfMind from "../../assets/peace-of-mind.jpg";
import BecomeALearner from "../../assets/become-a-learner.jpeg";

function Instructions() {
  return (
    <Box>
      <Box
        display="flex"
        sx={{ py: 6, flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          display="flex"
          flex={2}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={4}
          pl={3}
          pt={2}
          pb={3}
          sx={{ py: 6, width: "100%", background: "#" }}
        >
          <Typography variant="h4">Share Your Story</Typography>
          <Typography>
            This is a paragraph Ipsum labore ut tempor anim ut veniam sint
            reprehenderit. Cillum do proident laboris eiusmod exercitation id eu
            id laborum. Occaecat cillum sint est exercitation ad cillum. Aliqua
            exercitation nisi laborum occaecat irure tempor laboris dolor anim
            ea. Incididunt nisi aliquip reprehenderit enim voluptate enim labore
            enim. Aliqua cupidatat labore enim officia laborum elit adipisicing
            deserunt dolor cillum pariatur mollit ex sunt.
          </Typography>
        </Box>
        <Box
          display="flex"
          flex={1}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={4}
          pl={3}
          pt={2}
          pb={3}
          sx={{ py: 6, background: "#e3b4b4" }}
        >
          <Image src={ShareStory} alt="share story" />
        </Box>
      </Box>
      <Box
        display="flex"
        sx={{ py: 12, flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          display="flex"
          flex={1}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={4}
          pl={3}
          pt={2}
          pb={3}
          sx={{ background: "#98CAD2" }}
        >
          <Image src={PeaceOfMind} alt="share story" />
        </Box>
        <Box
          display="flex"
          flex={2}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={4}
          pl={3}
          pt={2}
          pb={3}
          sx={{ py: 6, width: "100%", background: "#" }}
        >
          <Typography sx={{ textAlign: "right" }} variant="h4">
            Receive Peace of Mind
          </Typography>
          <Typography sx={{ textAlign: "right" }}>
            This is a paragraph Ipsum labore ut tempor anim ut veniam sint
            reprehenderit. Cillum do proident laboris eiusmod exercitation id eu
            id laborum. Occaecat cillum sint est exercitation ad cillum. Aliqua
            exercitation nisi laborum occaecat irure tempor laboris dolor anim
            ea. Incididunt nisi aliquip reprehenderit enim voluptate enim labore
            enim. Aliqua cupidatat labore enim officia laborum elit adipisicing
            deserunt dolor cillum pariatur mollit ex sunt.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        sx={{ py: 12, flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          display="flex"
          flex={2}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={4}
          pl={3}
          pt={2}
          pb={3}
          sx={{ py: 6, width: "100%", background: "#" }}
        >
          <Typography variant="h4">Become a Learner and Grow</Typography>
          <Typography>
            This is a paragraph Ipsum labore ut tempor anim ut veniam sint
            reprehenderit. Cillum do proident laboris eiusmod exercitation id eu
            id laborum. Occaecat cillum sint est exercitation ad cillum. Aliqua
            exercitation nisi laborum occaecat irure tempor laboris dolor anim
            ea. Incididunt nisi aliquip reprehenderit enim voluptate enim labore
            enim. Aliqua cupidatat labore enim officia laborum elit adipisicing
            deserunt dolor cillum pariatur mollit ex sunt.
          </Typography>
        </Box>
        <Box
          display="flex"
          flex={1}
          alignContent="center"
          flexDirection="column"
          justifyContent="center"
          pr={4}
          pl={3}
          pt={2}
          pb={3}
          sx={{ py: 6, background: "#e37965" }}
        >
          <Image src={BecomeALearner} alt="share story" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ py: 6 }}>
        <Button
          variant="contained"
          sx={{
            py: 3,
            maxWidth: 200,
            backgroundColor: "#98CAD2",
            color: "#ffffff",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Instructions;
