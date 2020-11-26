import React from "react";
import { connect } from "frontity";
const Link = ({ href,  className, actions, children }) => {
  return (
      <a
      className = {className}
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </a>
  );
};

export default connect(Link);
