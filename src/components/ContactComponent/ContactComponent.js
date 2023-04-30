import React from "react";
import { ContactIcon, Container, ContainerContact, LinkContact, TextContact } from "./style";

const ContactComponent = ({src, text, span, href, isLink}) => {

  return(
    <Container>
      <ContainerContact>
        <LinkContact href={href} isLink={isLink}>
          <ContactIcon src={src}/>
          <TextContact><span>{span}</span> {text}</TextContact>
        </LinkContact>
      </ContainerContact>
    </Container>
  );
};

export default ContactComponent;
