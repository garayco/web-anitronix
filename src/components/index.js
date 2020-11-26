import React from "react";

//import { connect } from "frontity";
/* import Link from "./frontityComponents/Link";
import List from "./frontityComponents/List";
import Post from "./frontityComponents/Post"; */
import Navbar from "./Navbar";
import Home from "./Sections/Home";
import { Box } from "rebass";
const Index = ({ data, state, actions }) => {

  return (
    <>
      <Navbar />
      {/*       <p>Estamos en {data.link} </p> */}
      {/* Container */}
      <Box
        sx={{
          // maxWidth: 512,
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
        {/*         <main>
          {data.isArchive && <List state={state} data={data} />}
          {data.isPost && <Post state={state} data={data} />}
          {data.isPostType && <Post state={state} data={data} />}
          {data.isPage && <Post state={state} data={data} />}
        </main> */}
        <Home />
      </Box>
    </>
  );
};

export default Index;
