import { useState } from "react";
import { api } from "../../services/api";
import { requestHeaders } from "../../services/requestHeaders";
import MessageNotFound from "../../Components/MessageNotFound";
import Search from "../../Components/Search";
import Loading from "../../Components/Loading";

import * as S from "./styles";

export default function SearchUsers () {
  const [ userData, setUserData ] = useState(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem('@github-queries:findUser')) ?? {};
    
    return sessionUser
  });
  const [ isLoading, setLoading ] = useState(false);
  const [ searchNotFound, setSearchNotFound ] = useState(false);
  const [ user, setUser ] = useState('')

  const handleGetUsers = async () => {
    setLoading(true)
    try{
      const response = await api.get(`/users/${user}`, requestHeaders())

      const data = response.data;

      if(response.status !== 200) {
        throw new Error(`Erro na pesquisa: ${response.status}`)
      }

      setUserData(data)
      sessionStorage.setItem('@github-queries:findUser', JSON.stringify(data))
      
    } catch (error) {
      console.error('Erro ao carregar os dados:', error)
      setSearchNotFound(true)
      setUserData([])
    } finally {
      setLoading(false);
    }
  }

  return(
    <S.Container>
      <Search 
        searchTerm={user}
        setSearchTerm={setUser}
        handleFetch={handleGetUsers}
        placeholder={'Pesquisa por usuário'}
      />

      {isLoading ? <Loading /> :
        (Object.keys(userData).length > 0 ?
          <S.Content>
            <S.UserImage>
              <img src={userData.avatar_url} alt="user-image" />
            </S.UserImage>
            <S.CentralContent>
              <S.UserTitle>
                <S.UserName href={userData.html_url} target="_blank">
                  {userData.name}
                </S.UserName>
                <S.LoginName>
                  {userData.login}
                </S.LoginName>
              </S.UserTitle>

              <S.Details>
                {userData.bio}
              </S.Details>

              <S.Footer>
                <S.City>
                  {userData.location}
                </S.City>

                <S.RepositoriesNumber>
                  <i className="pi pi-book"></i>
                  {userData.public_repos}
                </S.RepositoriesNumber>

                <S.Follows>
                  <i className="pi pi-users" style={{ fontSize: '1.3rem' }}></i>
                  {userData.followers}
                </S.Follows>
              </S.Footer>
            </S.CentralContent>

            <S.RightSide>
              <S.Repositories>
                Repositorios
              </S.Repositories>
            </S.RightSide>
          </S.Content>
          : searchNotFound && <MessageNotFound message={'Usuário'} />
        )
      }
    </S.Container>
  )
}