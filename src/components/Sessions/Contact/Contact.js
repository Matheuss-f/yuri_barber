import React from "react";
import TitleUnderline from "../../TitleUnderline/TitleUnderline";
import { Container, ContainerContact, ImageLogo } from "./style";
import Logo from "../../../assets/images/logo_barber.jpg";
import WhatsIcon from "../../../assets/images/wpp_icon.png";
import IgIcon from "../../../assets/images/ig_icon.webp";
import LocalizationIcon from "../../../assets/images/localization_icon.png";
import ContactComponent from "../../ContactComponent/ContactComponent";

const Contact = () => {

  return(
    <Container id="contato">
      <TitleUnderline text={'Contato'}/>
      <ImageLogo src={Logo}/>
      <ContainerContact>
        <ContactComponent src={WhatsIcon} text={'9999-9999'} span={'19'}/>
        <ContactComponent src={IgIcon} text={'yuribarber_obrabo'} span={'@'}/>
        <ContactComponent src={LocalizationIcon} text={'Avenida, 123, centro'} span={'rua'}/>
      </ContainerContact>
    </Container>
  );
};

export default Contact;
