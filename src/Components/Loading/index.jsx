import { ProgressSpinner } from 'primereact/progressspinner';
import * as S from './styles';

export default function Loading() {
  return(
    <S.Container>
      <ProgressSpinner />
    </S.Container>
  )
}
