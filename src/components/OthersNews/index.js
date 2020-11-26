import React from "react";
import imagen from "./imagenOther.png";
import CardOtherNews from "../Cards/CardOtherNews";
import { Flex, Box } from "rebass";
const OthersNews = () => {
  return (
    <Flex flexWrap="wrap">
      <CardOtherNews imagen={imagen} />
      <CardOtherNews imagen={imagen} />
      <CardOtherNews imagen={imagen} />
      <CardOtherNews imagen={imagen} />
    </Flex>
  );
};

export default OthersNews;
