import React from "react";
import { connect, Global, css } from "frontity";
import App from "./components";
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
        <Global
          styles={css`
            body {
              font-family: "Roboto";
              margin: 0px;
              padding-top: 4rem;
            }
          `}
        />
        <App data={data} state={state} actions={actions} />
    </>
  );
};
export default connect(Root);
