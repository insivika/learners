import { Box, Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/logo.png";

const Navigation = () => {
  return (
    <Container component="navigation">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        pb={2}
      >
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <Box display="flex" sx={{ color: "#274A5E" }}>
          <Box mr={2} sx={{ fontWeight: 500 }}>
            <Link href="/">Home</Link>
          </Box>
          <Box mr={2} sx={{ fontWeight: 500 }}>
            <Link href="/about">About</Link>
          </Box>
          <Box mr={2} sx={{ fontWeight: 500 }}>
            <Link href="/learners">Learners</Link>
          </Box>
          <Box mr={2} sx={{ fontWeight: 500 }}>
            <Link href="/funders">Funders</Link>
          </Box>
          <Box mr={2} sx={{ fontWeight: 500 }}>
            <Link href="/contact">Contact</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Navigation;
