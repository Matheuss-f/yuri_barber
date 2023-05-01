import React from "react";
import {
  ContainerButtons,
  ContainerButtonsMobile,
  ContainerContent,
  ContainerDesktop,
  ContainerHome, ContainerMobile, ImageHome, SubtitleHome, TitleHome, VideoHome
} from "./style"
import ImageBg from "../../../assets/images/bg_image.png";
import VideoBg from "../../../assets/videos/video_bg.mp4";
import AdvancedButton from "../../AdvancedButton/AdvancedButton";
import FixedMenu from "../../FixedMenu/FixedMenu";

const Home = () => {

  return(
    <ContainerHome id="home">
      <ContainerDesktop>
        <VideoHome src={VideoBg} loop autoPlay muted />
        <FixedMenu />
        <ContainerContent>
          <TitleHome>YURI BARBER</TitleHome>
          <SubtitleHome>O <span>BRABO</span></SubtitleHome>
          <ContainerButtons>
            <AdvancedButton text={'Agendar horário'} isLink href="https://contate.me/yuri_barber"/>
            <AdvancedButton text={'Galeria de fotos'} href="/#galeria" isLink target={"_self"}/>
          </ContainerButtons>
        </ContainerContent>
      </ContainerDesktop>

      <ContainerMobile>
        <ImageHome src={ImageBg} />
          <FixedMenu />
          <ContainerContent>
            <TitleHome>YURI BARBER</TitleHome>
            <SubtitleHome>O <span>BRABO</span></SubtitleHome>
            <ContainerButtonsMobile>
              <AdvancedButton text={'Agendar horário'} isLink href="https://contate.me/yuri_barber"/>
              <AdvancedButton text={'Galeria de fotos'} href="/#galeria" isLink target={"_self"}/>
            </ContainerButtonsMobile>
          </ContainerContent>
      </ContainerMobile>

    </ContainerHome>

  )
}

export default Home;
