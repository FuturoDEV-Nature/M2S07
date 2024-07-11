import { useState } from "react"
import { Contador } from "./components/contador"
import { Item } from "./components/item"
import { Soma } from "./components/soma"
import { Filter } from "./components/filter"
import { News } from "./components/news"

function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')


  function handleRemove(id) {
    console.log(id)
  }

  function onSubmit() {
    const data = { 
      nome, 
      email
    }

    console.log(data)
  }

  return (
    <div>
        
        <ul>
        
        <Item />
        {
          Array.from({ length: 10 }).map((item, index) => {
            return (
              <li key={index} >
                <button onClick={() => handleRemove(index)} style={{ display: 'block' }}>{index} - Deletar</button>
              </li>
            )
          })
        }

        </ul>
        <Soma numero1={10} numero2={30} /> <br />
        <Soma numero1={15} numero2={30} />
        <hr />
        <br />

        <div className="list-contador">
         <Contador />
         <Contador />
        </div> 

        {/* <h1>Nome é: {nome}</h1> */}
         <p>Nome: {nome}</p>
        <p>Email: {email}</p>

        <input 
          type="text" 
          placeholder="Informe seu nome" 
          onChange={event => setNome(event.target.value)}  
        />

        
        <input 
          type="email" 
          placeholder="Informe seu email" 
          onChange={event => setEmail(event.target.value)}  
        />

          <button onClick={onSubmit}>Enviar dados</button> 
          
        
      <Filter />

      <hr />

      <News />
    </div>
  )
}

export default App
