import React from "react";
import TitleUnderline from "../../TitleUnderline/TitleUnderline"
import { Container, ContainerCards, ContainerCardsMobile, ContainerContentMobile, ContainerDesktop } from "./style";
import BarberIcon from "../../../assets/images/barber_icon.png";
import EyebrowIcon from "../../../assets/images/eyebrow_icon.png";
import HairIcon from "../../../assets/images/hair_icon.png";
import PaintIcon from "../../../assets/images/paint_icon.svg";
import ServicesCards from "../../ServicesCards/ServicesCards";

const Services = () => {

  return(
    <Container id="servicos">
      <ContainerDesktop>
        <TitleUnderline text={'Serviços'}/>
        <ContainerCards>
          <ServicesCards text={'Design de'} span={'barba'} src={BarberIcon}/>
          <ServicesCards text={'Corte de'} span={'cabelo'} src={HairIcon}/>
        </ContainerCards>
        <ContainerCards>
          <ServicesCards text={'Design'} span={'sombrancelha'} src={EyebrowIcon}/>
          <ServicesCards text={'Coloração de'} span={'cabelo'} src={PaintIcon}/>
        </ContainerCards>
      </ContainerDesktop>

      <ContainerCardsMobile>
        <TitleUnderline text={'Serviços'}/>
        <ContainerContentMobile>
          <ServicesCards text={'Design de'} span={'barba'} src={BarberIcon}/>
          <ServicesCards text={'Corte de'} span={'cabelo'} src={HairIcon}/>
          <ServicesCards text={'Design'} span={'sombrancelha'} src={EyebrowIcon}/>
          <ServicesCards text={'Coloração de'} span={'cabelo'} src={PaintIcon}/>
        </ContainerContentMobile>
      </ContainerCardsMobile>
    </Container>
  );
};

export default Services;
