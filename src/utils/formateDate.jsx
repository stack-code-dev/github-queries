import { format } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR'

export const handleformatDate = (date) => {
  const parseDate = new Date(date)
  const formattedDate = format(parseDate, "d 'de' MMMM 'de' yyyy", { locale: ptBR })

  return `Atualizado em ${formattedDate}`
}