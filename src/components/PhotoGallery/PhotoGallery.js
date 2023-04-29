import React from "react";
import TitleUnderline from "../TitleUnderline/TitleUnderline";
import { Container, ContainerPhotos } from "./style";
import GalleryCard from "../GalleryCard/GalleryCard";
import ImgOne from "../../assets/images/img_one.jpg";
import ImgTwo from "../../assets/images/img_two.webp";

const PhotoGallery = () => {

  return (
    <Container>
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
    </Container>
  );
};

export default PhotoGallery;
