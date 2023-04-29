import React from "react";
import { ContactIcon, Container, ContainerContact, TextContact } from "./style";

const ContactComponent = ({src, text, span}) => {

  return(
    <Container>
      <ContainerContact>
        <ContactIcon src={src}/>
        <TextContact><span>{span}</span> {text}</TextContact>
      </ContainerContact>
    </Container>
  );
};

export default ContactComponent;
