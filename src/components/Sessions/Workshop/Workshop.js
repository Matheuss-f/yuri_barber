import React from "react";
import TitleUnderline from "../../TitleUnderline/TitleUnderline";
import { Container, ContainerContent, ContainerContentMobile, ContainerDescription, ContainerDescriptionMobile, ContainerDesktop, ContainerMobile, ContainerVideo, ContainerVideoMobile, VideoWorkshop, VideoWorkshopMobile } from "./style";
import WorkshopVideo from "../../../assets/videos/workshop_video.mp4";

const Workshop = () => {

  return(
    <Container id="workshop">
      <ContainerDesktop>
        <TitleUnderline text="Workshop 2023"/>
        <ContainerContent>
          <ContainerDescription>
            Workshop realizado na cidade de <span>Cosmópolis</span>, com<br/>participações especiais de alguns barbeiros da cidade.<br/>
            Levamos algumas tecnicas inovadoras para apresentar ao público, e é claro uma das maiores técnicas,<br/> o famoso <span>NEVOU</span>.
            Confira o vídeo para saber um pouco sobre o evento!
          </ContainerDescription>
          <ContainerVideo>
            <VideoWorkshop src={WorkshopVideo} controls/>
          </ContainerVideo>
        </ContainerContent>
      </ContainerDesktop>

      <ContainerMobile>
        <TitleUnderline text="Workshop"/>
        <ContainerContentMobile>
          <ContainerDescriptionMobile>
            Workshop realizado na cidade de <span>Cosmópolis</span>, com participações especiais de alguns barbeiros da cidade.
            Levamos algumas tecnicas inovadoras para apresentar ao público, e é claro uma das maiores técnicas, o famoso <span>NEVOU</span>.
            Confira o vídeo para saber um pouco sobre o evento!
          </ContainerDescriptionMobile>
          <ContainerVideoMobile>
            <VideoWorkshopMobile src={WorkshopVideo} controls/>
          </ContainerVideoMobile>
        </ContainerContentMobile>
      </ContainerMobile>
    </Container>

  );
};

export default Workshop;
