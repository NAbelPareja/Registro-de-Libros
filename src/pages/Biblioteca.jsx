import { BookList } from "../components/BookList"
import { Navbar } from "../components/Navbar"

export const Biblioteca = () => {
  return (
    <div className="flex flex-row space-between">
      <div className="w-1/5">
        <Navbar></Navbar>
      </div>
      <div>
        <BookList></BookList>
      </div>
    </div>
  )
}
