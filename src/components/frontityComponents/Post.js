import React from "react";

const Post = ({ data, state }) => {
  const post = state.source[data.type][data.id];
  return (
    <div>
      <div>
        <h2>{post.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
};

export default Post;
