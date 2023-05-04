import React from "react";
import TitleUnderline from "../../TitleUnderline/TitleUnderline";
import { Container, ContainerContact, ImageLogo } from "./style";
import Logo from "../../../assets/images/logo_img.png";
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
        <ContactComponent isLink src={WhatsIcon} text={'99654-8647'} span={'19'} href={'https://contate.me/yuri_barber'}/>
        <ContactComponent isLink src={IgIcon} text={'yuribarber_obrabo'} span={'@'} href={'https://www.instagram.com/yuribarber_obrabo/'}/>
        <ContactComponent src={LocalizationIcon} text={'Monte Castelo, 123, Jardim de Faveri'} span={'rua'}/>
      </ContainerContact>
    </Container>
  );
};

export default Contact;
