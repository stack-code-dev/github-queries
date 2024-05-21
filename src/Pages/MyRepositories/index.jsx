import { useEffect, useState } from "react";
import Search from "../../Components/Search";
import { requestHeaders } from "../../services/requestHeaders";
import { api } from "../../services/api";
import MessageNotFound from "../../Components/MessageNotFound";
import Loading from "../../Components/Loading";
import { handleformatDate } from "../../utils/formateDate";

import * as S from "./styles";
import { useAuth } from "../../hooks/auth";

export default function MyRepositories() {
  const [ repositoriesData, setRepositoriesData ] = useState([])
  const [ repositoriesFiltered, setRepositoriesFiltered ] = useState([])
  const [ isLoading, setLoading ] = useState(false);
  const [ searchNotFound, setSearchNotFound ] = useState(false);
  const { user, setUser } = useAuth();


  const handleGetUsers = async () => {
    setLoading(true)
    try{
      const response = await api.get(`/users/${user.githubName}/repos`, requestHeaders())

      const data = response.data;

      if(response.status !== 200) {
        throw new Error(`Erro na pesquisa: ${response.status}`)
      }
      
      setRepositoriesData(data)
      setRepositoriesFiltered(data)
      
    } catch (error) {
      console.error('Erro ao carregar os dados:', error)
      setSearchNotFound(true)
      setRepositoriesData([])
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetUsers();
  }, [])

  return (
    <S.Container>
      <Search
        searchTerm={user}
        setSearchTerm={setUser}
        data={repositoriesData}
        setRepositoriesFiltered={setRepositoriesFiltered}
        placeholder={'Filtrar seus repositórios'}
      />

    { isLoading ? ( 
      <Loading />
      ) : (
        <S.Wrapper>
          {repositoriesFiltered.length > 0 ? (
            repositoriesFiltered.map((item, idx) => (
              <S.Content key={idx}>
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
      )
    }
    </S.Container>
  )
}
