import React from "react";
import { ContainerCard, ImageService, TitleService } from "./style";

const ServicesCards = ({src, text, span}) => {

  return (
    <ContainerCard>
      <ImageService src={src}/>
      <TitleService>{text} <span>{span}</span></TitleService>
    </ContainerCard>
  );
};

export default ServicesCards;
