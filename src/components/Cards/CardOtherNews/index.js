import React from "react";
import { CardOther } from "./style";
import {CardLink} from "../style"
import { Flex, Box } from "rebass";
import { css } from "frontity";
const CardOtherNews = ({ imagen }) => {
  return (
    <Box
      width={[
        1, // 100% width on small screens
        1 / 2, // 50% width from the next breakpoint and up
        1 / 2, // 33% width from the next breakpoint and up
        1 / 2, // 25% width for all larger breakpoints
      ]}
      px={"14px"}
      marginBottom ={"0.5em"}
    >
      <CardLink href="/">
        <CardOther>
          <img width="100%" src={imagen} />
        </CardOther>
        <h2
          css={css`
            margin-top: 0.3em;
            font-size: 1.35em;
          `}
        >
          Titulo noticia
        </h2>
      </CardLink>
    </Box>
  );
};

export default CardOtherNews;
