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
        <NavigateOption text={'Home'} to={'/home'}/>
        <NavigateOption text={'Sobre'} to={'/about'}/>
        <NavigateOption text={'Serviços'} to={'/services'}/>
        <NavigateOption text={'Galeria de fotos'} to={'/gallery'}/>
        <NavigateOption text={'Contato'} to={'/contact'}/>
        <ButtonSchedule><a href="https://contate.me/yuri_barber" target="_blank" rel="noreferrer">Agendar</a></ButtonSchedule>
      </ContainerMenuNavigate>
    </Container>
  );

}

export default FixedMenu
