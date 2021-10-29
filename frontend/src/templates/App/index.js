import * as Styled from './styles';
import {mock} from './mock';
import {dadosUsina} from './dadosUsina';
import {dadosClientes} from './dadosClientes';
import {Menu} from '../../components/Menu'
import {GridCRUD} from '../../components/GridCRUD'
import {GridGraphic} from '../../components/GridGraphic'
import {GridLogic} from '../../components/GridLogic'
import {Footer} from '../../components/Footer'

function Home() {

  const links = mock.links

  const logoData = mock.logoData
  const section_graphic = mock.section_graphic
  const graphic = dadosUsina
  const CRUD = dadosClientes
  const section_crud = mock.section_crud
  const section_logic = mock.section_logic
  const footer = mock.footer_text

  return (
    <div className="App">
     <Styled.Wrapper>
       <Menu links={links} logoData={logoData} />
       <GridGraphic title={section_graphic.title} graphic={graphic}
       background={section_graphic.background} id={section_graphic.id}/>
       <GridCRUD title={section_crud.title} grid={CRUD} description={section_crud.description}
        background={section_crud.background} id={section_crud.id}/>
       <GridLogic title={section_logic.title} description={section_logic.description}
       background={section_logic.background} graphic={graphic} id={section_logic.id} user={CRUD} />

       <Footer text={footer}/>
     </Styled.Wrapper>
    </div>
  );
}

export default Home;
