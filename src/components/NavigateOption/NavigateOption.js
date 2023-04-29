import React from "react";
import { TextNavigate } from "./style";

const NavigateOption = ({ text, href }) => {

  return(
    <TextNavigate href={href}>{text}</TextNavigate>
  );
};

export default NavigateOption;
