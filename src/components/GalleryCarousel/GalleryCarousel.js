import React from 'react';
import Carousel from 'react-elastic-carousel';

import { Container, Image, ContainerItems } from './style';

function CategoryCarousel({src}) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
  ];

  return (
    <Container>
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {src && src.map(image => (
          <ContainerItems key={image.index}>
            <Image src={image.url} alt="corte-imagem" />
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}

export default CategoryCarousel;
