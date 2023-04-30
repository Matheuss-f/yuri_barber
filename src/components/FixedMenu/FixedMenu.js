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
        <NavigateOption text={'Home'} href={'/#home'}/>
        <NavigateOption text={'Sobre'} href={'/#sobre'}/>
        <NavigateOption text={'Serviços'} href={'/#servicos'}/>
        <NavigateOption text={'Galeria de fotos'} href={'/#galeria'}/>
        <NavigateOption text={'Contato'} href={'/#contato'}/>
        <ButtonSchedule><a href="https://contate.me/yuri_barber" target="_blank" rel="noreferrer">Agendar</a></ButtonSchedule>
      </ContainerMenuNavigate>
    </Container>
  );

}

export default FixedMenu
