// import { useState } from "react"    

import { useState } from "react"

async function api(url = '', data) {
    console.log(url, data)
    return new Promise(resolve => setTimeout(resolve, 3000))
}

/*** Custom hook */
export function useForm() {
    // const [contador, setContador] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    // function adicionarMaisUm() {
    //     setContador(prevState => prevState + 1)
    // }

    
    async function handleSubmit(event) {
        event.preventDefault()
        setIsSubmitting(true)

        const formdata = new FormData(event.target)
        const data = { 
            name: formdata.get('name'),
            email: formdata.get('email')
        }
        /** Simulando uma chamada para uma API */
        await api('/usuario/cadastro', data)

        setIsSubmitting(false)
    }

    return {
        // contador,
        // adicionarMaisUm,
        exemplo: "teste",
        handleSubmit,
        isSubmitting,
        // ....
    }
}