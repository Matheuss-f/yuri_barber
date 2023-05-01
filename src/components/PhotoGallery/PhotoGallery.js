import React from "react";
import TitleUnderline from "../TitleUnderline/TitleUnderline";
import { Container, ContainerDesktop, ContainerMobile, ContainerPhotos } from "./style";
import GalleryCard from "../GalleryCard/GalleryCard";
import ImgOne from "../../assets/images/img_one.jpg";
import ImgTwo from "../../assets/images/img_two.webp";
import GalleryCarousel from "../GalleryCarousel/GalleryCarousel";

const PhotoGallery = () => {

  return (
    <Container id="galeria">
      <ContainerDesktop>
        <TitleUnderline text={'Galeria de fotos'} />
        <ContainerPhotos>
          <GalleryCard src={ImgOne}/>
          <GalleryCard src={ImgTwo}/>
          <GalleryCard src={ImgOne}/>
        </ContainerPhotos>
        <ContainerPhotos>
          <GalleryCard src={ImgTwo}/>
          <GalleryCard src={ImgOne}/>
          <GalleryCard src={ImgTwo}/>
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
            url: ImgOne,
          },
          {
            url: ImgTwo,
          },
          ]}
        />
      </ContainerMobile>

    </Container>
  );
};

export default PhotoGallery;
