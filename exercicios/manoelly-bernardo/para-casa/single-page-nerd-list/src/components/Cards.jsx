import Subtitle from './Subtitle';
import Text from './Text';
import Image from './Image';

function Cards() {
  return(
    <section>
      <div>
        <Subtitle text='Ciência, minha musa'/>
        <Text text='Biologia, Física, Matemática, Astronomia e muito mais. As diversas facetas dessa belíssima arte fascinam qualquer nerd que se preze. Todo nerd verdadeiro aprecia o que é cientificamente comprovado.'/>
        <Image img={'https://www.oficinadanet.com.br/media/post/15974/750/gif_1.gif'}/>
      </div>
      <div>
        <Subtitle text='Esquecer o mundo real e passar horas jogando'/>
        <Text text='Sejam os clássicos como Zelda e Mario, sejam as séries populares e mais atuais com protagonistas overpower como Lara Croft e Geralt, sejam os amados RPGs, ou até mesmo jogos de tabuleiro e cartas colecionáveis. Não tem jeito, se você é nerd, você ama um bom joguinho. Não negue.'/>
        <Image img={'https://media4.giphy.com/media/y0NFayaBeiWEU/giphy.gif?cid=ecf05e475v8pbrzft8rp285g9hjces2bftapt54cglsa0wcf&ep=v1_gifs_search&rid=giphy.gif&ct=g'}/>
      </div>
      <div>
        <Subtitle text='Ser um(a) devorador(a) de livros/quadrinhos/mangás'/>
        <Text text='Livros, quadrinhos e mangás - todo nerd que se preze passa horas mergulhado em mundos e realidades únicas, vivenciando aventuras épicas e intrigas angustiantes. Experiências que só uma boa leitura pode proporcionar.'/>
        <Image img={'https://3.bp.blogspot.com/-e1WqWaVAA50/UK6ZiInrvII/AAAAAAAADEs/44wXDyLfUGQ/s1600/gato-lendo-livroa.gif'}/>
      </div>
      <div>
        <Subtitle text='Maratonar uma boa série'/>
        <Text text='Horas maratonando... O mundo lá fora pode estar pegando fogo, mas o que está na sua frente te prende de uma maneira que nada mais importa. E se essa série for Game of Thrones, Stranger Things, The Big Bang Theory, Vikings, The Last of Us, pegue sua carteira e coloque o selo de "eu sou nerd".'/>
        <Image img={'https://i0.wp.com/designculture.com.br/wp-content/uploads/2018/07/maratona.gif?resize=500%2C270&ssl=1'}/>
      </div>
      <div>
        <Subtitle text='Se render ao mundo incrível e diversificado dos animes'/>
        <Text text='Naruto, Dragon Ball, One Piece, Fullmetal Alchemist, Death Note - clássicos dos animes aos quais você, nerd, com certeza já se rendeu.'/>
        <Image img={'https://thumbs.gfycat.com/WealthyBelovedGreatdane-max-1mb.gif'}/>
      </div>
    </section>
  )
}

export default Cards;