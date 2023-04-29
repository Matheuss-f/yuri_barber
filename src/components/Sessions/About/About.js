import React from "react";
import { Container, ContainerContent, DescriptionText, ImageAbout, } from "./style";
import TextUnderline from "../../TitleUnderline/TitleUnderline";
import ImgAbout from "../../../assets/images/image_about.jpg"

const About = () => {

  return(
    <Container>
      <TextUnderline text={'Sobre'} />
      <ContainerContent>
          <DescriptionText>
            A melhor barbearia do interior de <span>São Paulo</span><br/>localizada na cidade de <span>Cosmópolis</span>,  realizando o<br/>melhor atendimento e o melhor serviço de barbearia.<br/><br/>
            Sempre atento a <span>modernidade</span> para proporcionar o<br/>melhor aos clientes. A meta sempre foi satisfação do<br/><span>cliente em primeiro lugar</span>.
          </DescriptionText>
          <ImageAbout src={ImgAbout}/>
      </ContainerContent>
    </Container>
  );
};

export default About;
