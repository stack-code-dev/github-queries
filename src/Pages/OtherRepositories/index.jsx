import * as S from "./styles";

export default function MyRepositories() {
  return (
    <S.Container>
      <S.Repositories>
        <S.HeaderRepo>
          <S.Title>
            disney-details
          </S.Title>
          <S.Tag>
            Public
          </S.Tag>
        </S.HeaderRepo>

        <S.Details>
          Challenge-SC
        </S.Details>

        <S.Footer>
          <S.LeftSide>
            <S.Language>
              <i className="pi pi-code"></i>
              CSS
            </S.Language>

            <S.Star>
              <i className="pi pi-star"></i>
              2
            </S.Star>

            <S.Forks>
              <i className="pi pi-share-alt"></i>
              3
            </S.Forks>
          </S.LeftSide>

          <S.LastUpdated>
            Updated on Dec 29, 2023
          </S.LastUpdated>
        </S.Footer>
      </S.Repositories>
    </S.Container>
  )
}
