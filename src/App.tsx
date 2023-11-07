import './App.css'
import Books from './components/books'
import data from './data'

function App() {

  return (
    <>
      <div className='container'>
        <div className="row">
          <Books Livros={data} />
        </div>
      </div>
    </>
  )
}

export default App
