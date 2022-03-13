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
        <Image src={Logo} alt="Logo" />
        <Box display="flex">
          <Box mr={1} sx={{ fontWeight: 500 }}>
            <Link href="/">Home</Link>
          </Box>
          <Box mr={1} sx={{ fontWeight: 500 }}>
            <Link href="/about">About</Link>
          </Box>
          <Box mr={1} sx={{ fontWeight: 500 }}>
            <Link href="/learn">Learn</Link>
          </Box>
          <Box mr={1} sx={{ fontWeight: 500 }}>
            <Link href="/fund">Fund</Link>
          </Box>
          <Box mr={1} sx={{ fontWeight: 500 }}>
            <Link href="/contact">Contact</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Navigation;