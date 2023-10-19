import './App.css'

function App() {

  const cidade = 'Birigui';
  const atletas = ["Siban", "Renato Cariane", "Alex dinossauro", "João Alberto", "Mariana"];
  const processadores = [
    {
      id: 1,
      title: "i5",
      preco: 3000,
    },
    {
      id: 2,
      title: "i7",
      preco: 6000,
    },
    {
      id: 3,
      title: "i9",
      preco: 9000,
    },
  ]
  return (
    <>
      <h1>Minha cidade é: {cidade}</h1>

      {atletas.map((e) => ( 
        <h2>{e}</h2>
      ))}

      {
        processadores.map((e) => (
          <div>
            <h2>{e.title}</h2>
            <h3>{e.preco}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
