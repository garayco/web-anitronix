import React from "react";

import CardNews from "../Cards/CardNews";
import { css } from "frontity";

import { Flex } from "rebass";

const LastNews = () => {
  return (
    <>
      <Flex flexWrap="wrap" mx={-2}>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews /> 
      </Flex>
    </>
  );
};

export default LastNews;
