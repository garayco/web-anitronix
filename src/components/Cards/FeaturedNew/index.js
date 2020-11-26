import React from "react";
import imagen2 from "./imagen.png";
import { css } from "frontity";
import { CardLink } from "../style";
import { CardFeaturedNew } from "./style";

const FeaturedNew = (props) => {
  return (
    <>
      <CardLink href="/">
        <CardFeaturedNew>
          <img width="100%" src={imagen2} />
        </CardFeaturedNew>
        <h1
          css={css`
            margin-top: 0.3em;
            margin-bottom: 0;
          `}
        >
          Titulo de noticia destacada
        </h1>
        <p
          css={css`
            margin-top: 0.3em;
          `}
        >
          El nuevo videojuego de la franquicia confirma su ambientación con una
          ilustración de BossLogic que se hizo esperar.
        </p>
      </CardLink>
    </>
  );
};

export default FeaturedNew;
