import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import * as S from "./styles";

export default function Search({ searchTerm, setSearchTerm, handleFetch }) {
  const handleInput = (e) => {
    setSearchTerm(e ? e : '')
  }

  const handleEnter = (e) => {
    if(e.keyCode === 13 && searchTerm.length > 0) {
      handleFinder()
    }
  }

  const handleFinder = () => {
    handleFetch()
  }

  return(
    <S.SearchGroup>
      <InputText 
        placeholder="Pesquise seu repositório" 
        onChange={e => handleInput(e.target.value)} 
        onKeyDown={(e) => handleEnter(e)}
      />
      <Button 
        onClick={() => searchTerm && handleFinder()} 
        icon="pi pi-search" 
      />
    </S.SearchGroup>
  )
}