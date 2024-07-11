import { useRef } from "react"
import { useForm } from "../hooks/useForm"
import { Input } from "../components/input"
import { Button } from "../components/button"

export function RefsControlled() {
    const { handleSubmit, isSubmitting } = useForm()
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const inputNameRef = useRef(null)
    const inputEmailRef = useRef(null)
     // function onSubmit(event) {
  //   event.preventDefault()
  //   // const formdata = new FormData(event.target)

  //   const data = {
  //     name: inputNameRef.current.value,
  //     email: inputEmailRef.current.value,
  //   }

  //   // fetch('/example', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(data)
  //   // })

  //   console.log(data)
  //   // console.log('submit')
  // }

    return (
        // <div ref={referencia}>
        <div className="form-control">
            <h1>Cadastra-se</h1>
            {/* <!-- --> */}
            {/* <button onClick={adicionarMaisUm}>Adicionar +1</button> */}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* {
                false && <input type="text" ref={inputNameRef} />
            }
            */}
            {/* <input type="text" ref={inputEmailRef} /> */}

            <Input id="input-name" ref={inputNameRef} label="Nome" name="name" placeholder="Seu nome" type="text" 
            // onChange={event => setName(event.target.value)} value={name} 
            />
            <Input id="input-email" ref={inputEmailRef} label="Email" name="email" placeholder="Seu e-mail" type="email" 
            // onChange={event => setEmail(event.target.value)} value={email} 
            />
            <Button disabled={isSubmitting}>{isSubmitting ? 'Carregando...': 'Cadastrar'}</Button>
            </form>
        </div> 
    )
}