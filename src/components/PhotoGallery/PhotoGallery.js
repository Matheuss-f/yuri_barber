import React from "react";
import TitleUnderline from "../TitleUnderline/TitleUnderline";
import { Container, ContainerDesktop, ContainerMobile, ContainerPhotos } from "./style";
import GalleryCard from "../GalleryCard/GalleryCard";
import ImgOne from "../../assets/images/image_one.jpg";
import ImgTwo from "../../assets/images/image_two.jpg";
import ImgThree from "../../assets/images/image_three.jpg";
import ImgFour from "../../assets/images/image_four.jpg";
import ImgFive from "../../assets/images/image_five.jpg";
import ImgSix from "../../assets/images/image_six.jpg";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";

const PhotoGallery = () => {

  return (
    <Container id="galeria">
      <ContainerDesktop>
        <TitleUnderline text={'Galeria de fotos'} />
        <ContainerPhotos>
          <GalleryCard src={ImgOne}/>
          <GalleryCard src={ImgTwo}/>
          <GalleryCard src={ImgThree}/>
        </ContainerPhotos>
        <ContainerPhotos>
          <GalleryCard src={ImgFour}/>
          <GalleryCard src={ImgFive}/>
          <GalleryCard src={ImgSix}/>
        </ContainerPhotos>
      </ContainerDesktop>

      <ContainerMobile>
        <TitleUnderline text={'Galeria'} />
        <GalleryCarousel src={[
          {
            url: ImgOne,
          },
          {
            url: ImgTwo,
          },
          {
            url: ImgThree,
          },
          {
            url: ImgFour,
          },
          {
            url: ImgFive,
          },
          {
            url: ImgSix,
          },
          ]}
        />
      </ContainerMobile>

    </Container>
  );
};

export default PhotoGallery;
