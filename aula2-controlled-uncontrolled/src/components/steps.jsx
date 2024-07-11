import { useEffect, useRef, useState } from "react"
import { Input } from './input'

export function Steps() {
    const [step, setStep] = useState(1)
    const inputName = useRef(null)
    const inputEmail = useRef(null)

    useEffect(() => {
        if(step === 1 && inputName.current) {
            inputName.current.focus()
        }

        if(step === 2 && inputEmail.current) {
            inputEmail.current.focus()
        }
    }, [step])

    return (
        <div>
            <div style={{ marginBottom: 32}}>
                {step === 1 && <span>passo 1</span>}
                {step === 2 && <span>passo 2</span>}
            </div>
            
            
            {/* <div style={{ height: '150vh' }}>

            </div> */}

            <form style={{ marginBottom: 32}}>
                {step === 1 && (
                    <section>
                        <Input ref={inputName} placeholder="Nome" />
                    </section>
                )}

                {step === 2 && (
                    <section>
                        <Input ref={inputEmail} placeholder="Informe seu e-mail" />
                    </section>
                )}
            </form>

            <button onClick={() => setStep(prevState => prevState - 1)}>Voltar</button>
            <button onClick={() => setStep(prevState => prevState + 1)}>Próximo</button>
            
        </div>
    )
}