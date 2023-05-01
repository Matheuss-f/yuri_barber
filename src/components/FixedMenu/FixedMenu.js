import {
  ContainerImage, ContainerMenuNavigate, LogoImage, ButtonSchedule, ContainerMenuNavigateMobile, ContainerHamburger, ContainerImageMobile, ContainerDesktop, ContainerMobile
} from "./style"

import NavigateOption from "../NavigateOption/NavigateOption";
import Logo from "../../assets/images/logo_barber.jpg"
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons"

const FixedMenu = () => {
  const[isVisible, setIsVisible] = useState(false)
  const[hiddenImage, setHiddenImage] = useState(false)

  const handleClick = () => {
    setHiddenImage(!hiddenImage)
    setIsVisible(!setIsVisible)
  }


  return (
    <>
      <ContainerDesktop>
        <ContainerImage>
          <LogoImage src={Logo}/>
        </ContainerImage>
        <ContainerMenuNavigate>
          <NavigateOption text={'Home'} href={'/#home'}/>
          <NavigateOption text={'Sobre'} href={'/#sobre'}/>
          <NavigateOption text={'Serviços'} href={'/#servicos'}/>
          <NavigateOption text={'Galeria de fotos'} href={'/#galeria'}/>
          <NavigateOption text={'Contato'} href={'/#contato'}/>
          <ButtonSchedule><a href="https://contate.me/yuri_barber" target="_blank" rel="noreferrer">Agendar</a></ButtonSchedule>
        </ContainerMenuNavigate>
      </ContainerDesktop>

      <ContainerMobile>
        {!hiddenImage && (
          <ContainerImageMobile>
            <LogoImage src={Logo}/>
          </ContainerImageMobile>
        )}
        {isVisible && (
          <ContainerMenuNavigateMobile>
            <NavigateOption text={'Home'} href={'/#home'} onClick={() => handleClick()}/>
            <NavigateOption text={'Sobre'} href={'/#sobre'} onClick={() => handleClick()}/>
            <NavigateOption text={'Serviços'} href={'/#servicos'} onClick={() => handleClick()}/>
            <NavigateOption text={'Galeria'} href={'/#galeria'} onClick={() => handleClick()}/>
            <NavigateOption text={'Contato'} href={'/#contato'} onClick={() => handleClick()}/>
          </ContainerMenuNavigateMobile>
        )}
        <ContainerHamburger>
          <MenuOutlined style={{ color: "#f9aa33", fontSize: '30px' }} onClick={() => {
            setIsVisible(!isVisible);
            setHiddenImage(!hiddenImage);
          }}/>
        </ContainerHamburger>
      </ContainerMobile>
    </>
  );

}

export default FixedMenu
