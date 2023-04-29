import React from "react";
import { AboutTitle, ContainerTitle, Underline } from "./style";

const TextUnderline = ({text}) => {

  return(
    <ContainerTitle>
      <AboutTitle>{text}</AboutTitle>
      <Underline />
  </ContainerTitle>
  );
};

export default TextUnderline;
