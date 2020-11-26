import React from "react";
import LastNews from "../LastNews";
import FeaturedNew from "../Cards/FeaturedNew";
import { Flex, Box } from "rebass";
import OtherNews from "../OthersNews";
import { css } from "frontity";
const Home = () => {
  return (
    <div
      css={css`
        margin-top: 2em;
      `}
    >
      <Flex flexWrap="wrap" marginBottom="3em" mx={-2}>
        <Box marginBottom="2em" width={[
          1,    // 100% width on small screens
          1,  // 50% width from the next breakpoint and up
          1/2,  // 33% width from the next breakpoint and up
          1/2   // 25% width for all larger breakpoints
        ]} px={"5px"}>
          <FeaturedNew />
        </Box>
        <Box  width={[
          1,    // 100% width on small screens
          1,  // 50% width from the next breakpoint and up
          1/2,  // 33% width from the next breakpoint and up
          1/2   // 25% width for all larger breakpoints
        ]} px={"5px"}>
          <OtherNews />
        </Box>
      </Flex>

      <h2>Ultimas noticias:</h2>
      <LastNews />
    </div>
  );
};

export default Home;
