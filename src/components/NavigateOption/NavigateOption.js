import React from "react";
import { TextNavigate } from "./style";

const NavigateOption = ({ text, href, onClick }) => {

  return(
    <TextNavigate href={href} onClick={onClick}>{text}</TextNavigate>
  );
};

export default NavigateOption;
