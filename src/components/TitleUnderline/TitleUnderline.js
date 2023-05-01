import React from "react";
import { AboutTitle, AboutTitleMobile, ContainerTitle, Underline } from "./style";

const TextUnderline = ({text, textMobile, mobileHidden}) => {

  return(
    <ContainerTitle>
      <AboutTitle>{mobileHidden ? textMobile : text}</AboutTitle>
      <Underline />
    </ContainerTitle>
  );
};

export default TextUnderline;
