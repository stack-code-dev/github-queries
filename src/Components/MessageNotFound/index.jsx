import * as S from './styles';

import notfound from '../../images/notfound-image.svg'

export default function MessageNotFound({ message }) {
  return (
    <S.Container>
      <img src={notfound} alt="img-not-found" />
      <S.Message>
        {`${message} não encontrado`}
      </S.Message>
    </S.Container>
  )
}
