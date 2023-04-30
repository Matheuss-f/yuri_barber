import React from "react";
import { Button } from "./style";

const AdvancedButton = ({ text, onClick, isLink, href, target }) => {

  return(
    <Button onClick={onClick}>{isLink ? <a href={href} target={target ? target : "_blank"} rel="noreferrer">{text}</a> : text}</Button>
  );
};

export default AdvancedButton;
