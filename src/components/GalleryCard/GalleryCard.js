import React from "react";
import { Container, PhotoImage } from "./style";


const GalleryCard = ({src}) => {

  return(
    <Container>
      <PhotoImage src={src}/>
    </Container>
  );
};

export default GalleryCard;
