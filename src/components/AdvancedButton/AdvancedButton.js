import React from "react";
import { Button } from "./style";

const AdvancedButton = ({ text, onClick, isLink, href }) => {

  return(
    <Button onClick={onClick}>{isLink ? <a href={href} target="_blank" rel="noreferrer">{text}</a> : text}</Button>
  );
};

export default AdvancedButton;
