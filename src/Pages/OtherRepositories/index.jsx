import { useState } from "react";
import Search from "../../Components/Search";
import { requestHeaders } from "../../services/requestHeaders";
import { api } from "../../services/api";
import Loading from "../../Components/Loading";
import MessageNotFound from "../../Components/MessageNotFound";
import { handleformatDate } from "../../utils/formateDate";

import * as S from "./styles";

export default function OtherRepositories() {
  const [ repositoriesList, setRepositoriesList ] = useState(() => {
    const sessionRepositories = 
      JSON.parse(sessionStorage.getItem('@github-queries:repositories')) ?? [];

    return sessionRepositories
  });
  const [ isLoading, setLoading ] = useState(false);
  const [ searchNotFound, setSearchNotFound ] = useState(false);
  const [ repo, setRepo ] = useState('')

  const handleGetUsers = async () => {
    setLoading(true)
    try{
      const response = await api.get(`/search/repositories?q=${repo}`, requestHeaders())

      const data = response.data.items;

      if(response.status !== 200) {
        throw new Error(`Erro na pesquisa: ${response.status}`)
      }

      setRepositoriesList(data)
      sessionStorage.setItem('@github-queries:repositories', JSON.stringify(data))

      data.length == 0 && setSearchNotFound(true)
      
    } catch (error) {
      console.error('Erro ao carregar os dados:', error)
      setSearchNotFound(true)
      setRepositoriesList([])
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Container>
      <Search
        searchTerm={repo}
        setSearchTerm={setRepo}
        handleFetch={handleGetUsers}
        placeholder={'Pesquisa por repositórios'}
      />
      
      {isLoading ? (
        <Loading />
      ) : (
        <S.Wrapper>
          {repositoriesList.length > 0 ? (
            repositoriesList.map((item, index) => (
              <S.Content key={index}>
                <S.Repositories>
                  <S.HeaderRepo>
                    <S.Title href={item.html_url} target="_blank">
                      {item.name}
                    </S.Title>
                    <S.Tag>
                      {item.visibility}
                    </S.Tag>
                  </S.HeaderRepo>

                  <S.Details>
                    {item.description ?? 'Sem descrição'}
                  </S.Details>

                  <S.Footer>
                    <S.LeftSide>
                      <S.Language>
                        <i className="pi pi-code"></i>
                        {item.language}
                      </S.Language>

                      <S.Star>
                        <i className="pi pi-star"></i>
                        {item.stargazers_count}
                      </S.Star>

                      <S.Forks>
                        <i className="pi pi-share-alt"></i>
                        {item.forks_count}
                      </S.Forks>
                    </S.LeftSide>

                    <S.LastUpdated>
                      {handleformatDate(item.updated_at)}
                    </S.LastUpdated>
                  </S.Footer>
                </S.Repositories>
              </S.Content>
            ))
          ) : (
            searchNotFound && <MessageNotFound message={'Repositório'} />
          )}
        </S.Wrapper>
      )}
    </S.Container>
  )
}
