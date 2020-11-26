import React from "react";
import { Card, BoddyCard } from "./style";
import { CardLink } from "../style";
import { css } from "frontity";
import imagen from "./imagenCard.png";
import { Box } from "rebass";

const CardNews = ({ img, title, shortDescription, date }) => {
  return (
    <>
      <Box
        width={[
          1, // 100% width on small screens
          1 / 2, // 50% width from the next breakpoint and up
          1 / 3, // 33% width from the next breakpoint and up
          1 / 3, // 25% width for all larger breakpoints
        ]}
        px={"14px"}
        my={3}
        sx={{
          display: "grid",
          /*       gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))', */
        }}
      >
       <CardLink href="/">
          <Card>
            <img src={imagen} />
            <BoddyCard>
              <h5>Titulo de la noticia</h5>
              <p>
                El nuevo videojuego de la franquicia confirma su ambientación
                con una ilustración de BossLogic que se hizo esperar.
              </p>
            </BoddyCard>
          </Card>
        </CardLink>
      </Box>
    </>
  );
};

export default CardNews;
