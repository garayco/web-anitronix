import React from "react";
import Link from "../frontityComponents/Link";
import { css } from "frontity";
import { Box, Flex } from "rebass";

import { Nav, Header, NavBarLinks, NavbarHeaderLink } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Box
        sx={{
          // maxWidth: 512,
          display : "flex",
          mx: "auto",
          px: 3,
          maxWidth: [
            "540px", // 100% width on small screens
            "720px", // 50% width from the next breakpoint and up
            "960px", // 33% width from the next breakpoint and up
            "1140px", // 25% width for all larger breakpoints
          ],
        }}
      >
        <Header>
          <NavbarHeaderLink href="/">Anitronix</NavbarHeaderLink>
        </Header>

        <NavBarLinks>
          <Link className="nav-link" href="/noticias">
            Noticias
          </Link>
          <Link className="nav-link" href="/pagina-de-prueba">
            Portafolio
          </Link>
          <Link className="nav-link" href="/pagina-de-prueba">
            Contacto
          </Link>
        </NavBarLinks>
      </Box>
    </Nav>
  );
};

export default Navbar;
