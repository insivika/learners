import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box display="flex" sx={{flexDirection: { xs: 'column', md: 'row' } }}
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
        <Typography variant="h4">About</Typography>
        <Typography>
          This is a paragraph Ipsum labore ut tempor anim ut veniam sint
          reprehenderit. Cillum do proident laboris eiusmod exercitation id eu
          id laborum. Occaecat cillum sint est exercitation ad cillum. Aliqua
          exercitation nisi laborum occaecat irure tempor laboris dolor anim ea.
          Incididunt nisi aliquip reprehenderit enim voluptate enim labore enim.
          Aliqua cupidatat labore enim officia laborum elit adipisicing deserunt
          dolor cillum pariatur mollit ex sunt.
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
        sx={{ py: 6, background: "#98CAD2" }}
      >
        Image
      </Box>
    </Box>
  );
}

export default About;
