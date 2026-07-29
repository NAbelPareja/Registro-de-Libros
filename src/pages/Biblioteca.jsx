import { BookList } from "../components/BookList"
import { Navbar } from "../components/Navbar"
import { useBooks } from "../hooks/useBooks"

export const Biblioteca = () => {
  const {listaBooks} =useBooks()

  return (
    <div className="flex flex-row space-between">
      <div className="w-1/5">
        <Navbar></Navbar>
      </div>
      <div>
        <BookList listaBooks= {listaBooks}></BookList>
      </div>
    </div>
  )
}
