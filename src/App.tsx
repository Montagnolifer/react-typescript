import Book from "./components/book";
import "./App.css";
import { book1, book2, book3 } from "./data";

function App() {

  return (
    <>
      <Book livro={book1} />
      <Book livro={book2} />
      <Book livro={book3} />
    </>
  )
}

export default App