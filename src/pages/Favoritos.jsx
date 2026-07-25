import { BookPdfLoad } from "../components/BookPdfLoad"
import { BookForm } from "../components/BookForm"
export const Favoritos = () => {
  return (
    <div className="flex flex-row gap-10 justify-center">
      <BookPdfLoad></BookPdfLoad>
      <BookForm></BookForm>
    </div>
  )
}
