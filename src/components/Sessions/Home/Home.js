import React from "react";
import {
  ContainerButtons,
  ContainerContent,
  ContainerHome, SubtitleHome, TitleHome, VideoHome
} from "./style"
import VideoBg from "../../../assets/videos/video_bg.mp4"
import AdvancedButton from "../../AdvancedButton/AdvancedButton";
import FixedMenu from "../../FixedMenu/FixedMenu";

const Home = () => {

  return(
    <ContainerHome id="home">
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
    </ContainerHome>

  )
}

export default Home;
