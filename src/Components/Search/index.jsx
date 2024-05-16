import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import * as S from "./styles";

export default function Search({ 
  searchTerm, 
  data,
  setRepositoriesFiltered,
  setSearchTerm, 
  handleFetch, 
  placeholder 
}) {
  const handleInput = (e) => {
    setSearchTerm(e.target.value ? e.target.value : '')
  }
  
  const handleEnter = (e) => {
    if(e.keyCode === 13 && searchTerm.length > 0) {
      handleFinder()
    }
  }
  
  const handleFilterRepositories = (e) => {
    if(!setRepositoriesFiltered) return
    
    const value = e.target.value;
    const searchTermLower = value.toLowerCase();

    const dataFiltered = data.filter(item => {
      const itemNameLower = item.name.toLowerCase()
      
      return itemNameLower.includes(searchTermLower)
    })

    setRepositoriesFiltered(dataFiltered)
  }


  const handleFinder = () => {
    handleFetch && handleFetch();
  }

  return(
    <S.SearchGroup>
      <InputText 
        placeholder={placeholder} 
        onChange={e => {handleInput(e), handleFilterRepositories(e)}} 
        onKeyDown={(e) => handleEnter(e)}
      />
      <Button 
        onClick={() => searchTerm && handleFinder()} 
        icon="pi pi-search" 
      />
    </S.SearchGroup>
  )
}