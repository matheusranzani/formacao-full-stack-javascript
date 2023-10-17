import styled from 'styled-components';

import { livros } from '../UltimosLancamentos/dadosUltimosLancamentos';
import imagemLivro from '../../imagens/livro2.png';

import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo
        cor="#EB9B00"
        tamanhoFonte="50px"
      >
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        { livros.map(livro => (
          <img src={livro.src} alt='livro'/>
        )) }
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}