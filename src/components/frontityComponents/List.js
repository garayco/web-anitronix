import React from "react";
import Link from "./Link";

const List = ({ data, state }) => {
  return (
    <div>
      {data.items.map((item) => {
        return (
          <div key={item.id}>
            {item.type} – {item.id} – {item.link}
          </div>
        );
      })}

      {data.items.map(({ id, type }) => {
        const item = state.source[type][id];
         return (
          <Link key={id} href={item.link}>
            {item.title.rendered}
          </Link>
        );
      })} 
    </div>
  );
};

export default List;
