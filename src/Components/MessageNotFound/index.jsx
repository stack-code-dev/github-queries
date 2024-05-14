import * as S from './styles';

import notfound from '../../images/notfound-image.svg'

export default function MessageNotFound() {
  return (
    <S.Container>
      <img src={notfound} alt="img-not-found" />
      <S.Message>
        Usuário não encontrado
      </S.Message>
    </S.Container>
  )
}
