import {
  Container, ContainerImage, ContainerMenuNavigate, LogoImage, ButtonSchedule
} from "./style"

import NavigateOption from "../NavigateOption/NavigateOption";
import Logo from "../../assets/images/logo_barber.jpg"

const FixedMenu = () => {

  return (
    <Container>
      <ContainerImage>
        <LogoImage src={Logo}/>
      </ContainerImage>
      <ContainerMenuNavigate>
        <NavigateOption text={'Home'} href={'https://pt-br.facebook.com/'}/>
        <NavigateOption text={'Sobre'} href={'https://pt-br.facebook.com/'}/>
        <NavigateOption text={'Serviços'} href={'https://pt-br.facebook.com/'}/>
        <NavigateOption text={'Galeria de fotos'} href={'https://pt-br.facebook.com/'}/>
        <NavigateOption text={'Contato'} href={'https://pt-br.facebook.com/'}/>
        <ButtonSchedule><a href="https://contate.me/yuri_barber" target="_blank" rel="noreferrer">Agendar</a></ButtonSchedule>
      </ContainerMenuNavigate>
    </Container>
  );

}

export default FixedMenu
