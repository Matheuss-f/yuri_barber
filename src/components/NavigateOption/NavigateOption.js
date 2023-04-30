import React from "react";
import { TextNavigate } from "./style";

const NavigateOption = ({ text, to }) => {

  return(
    <TextNavigate to={to}>{text}</TextNavigate>
  );
};

export default NavigateOption;
