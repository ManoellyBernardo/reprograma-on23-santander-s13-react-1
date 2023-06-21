import Subtitle from './Subtitle';
import Text from './Text';
import Image from './Image';

import fotoManu from '../assets/foto-manu.jpeg';

function Bio() {
  return(
    <section>
      <div>
        <Image img={fotoManu}/>
        <Subtitle text='Prazer, Manoelly, mais conhecida como Manu 😉'/>
        <Text text='Sou graduanda em Análise e Desenvolvimento de Sistemas e aluna {reprograma} do curso de front end. Como nerd assumida, gostaria de compartilhar uma lista do que considero importante para alguém ser considerado um verdadeiro nerd, de acordo com a minha percepção: '/>
      </div>
    </section>
  );
}

export default Bio;