import { useEffect, useState } from "react"

export function News() {

    const [carregando, setCarregando] = useState(true)
    const [title, setTitle] = useState(null)

    async function getNews() {
        try {
            const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
            const data = await response.json()
    
            setTitle(data.items[0].titulo)
        } catch (error) {
            alert("Error ao carregar noticia")
        } finally {
            setCarregando(false)
        }

    }

    useEffect(() => {
        getNews()
        // console.log('RENDERIZOU!!!')
    }, [])

    return (
        <div className="contador">
            <strong style={{ display: 'block' }}>Noticia do dia</strong>
            {
                carregando ? <strong style={{ display: 'block' }}>Carregando...</strong> : (
                    <p>
                        {title}
                    </p>
                )
            }
        </div>
    )
}