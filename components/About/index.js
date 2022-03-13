import { Box, Typography } from "@mui/material";
import Josh from "./josh.png"
import Philipp from "./philipp.png";
import Laura from "./lauraEdit.png";
import Thom from "./thomEdit.png";
import Image from "next/image";

function About() {
  return (
    <Box>
      <Box
        display="flex"
        flex={2}
        alignContent="center"
        flexDirection="column"
        justifyContent="center"
        pr={2}
        pl={3}
        pt={2}
        pb={3}
        sx={{ py: 6, width: "100%", background: "#" }}
      >
        <Typography variant="h4">Our Mission</Typography>
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
      <Box sx={{ py: 6 }} pl={3}>
      <Typography variant="h4">Meet the Team</Typography>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ p: 5 }}>
          <div>
        <Image sx={{ p: 3 }} alt="Joshua Cross" src={Josh} />
        <Typography variant="h6" sx={{ textAlign:"center"}}>Joshua Cross</Typography>
        <Typography variant="h6" sx={{ textAlign:"center"}}>Hipster - UI/UX</Typography>

        </div>
        <div>
        <Image sx={{ p: 3 }} alt="Philipp Albrecht" src={Philipp} />
        <Typography variant="h6" sx={{ textAlign:"center"}}>Philipp Albrecht</Typography>
        <Typography variant="h6" sx={{ textAlign:"center"}}>Hacker - Frontend</Typography>


        </div>
        <div>
        <Image sx={{ p: 3 }} alt="Laura Kelly" src={Laura} />
        <Typography variant="h6" sx={{ textAlign:"center"}}>Laura Kelly</Typography>
        <Typography variant="h6" sx={{ textAlign:"center"}}>Joshua Cross</Typography>


        </div>
        <div>
        <Image sx={{ p: 3 }} alt="Thom Kelly" src={Thom} />
        <Typography variant="h6" sx={{ textAlign:"center"}}>Thom Kelly</Typography>
        <Typography variant="h6" sx={{ textAlign:"center"}}>Hacker - Backend</Typography>


        </div>
      </Box>
    </Box>
  );
}

export default About;
