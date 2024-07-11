import { useEffect, useState } from "react"
import movies from './movies.json'

export function Filter() {

    // const [contador, setContador] = useState(0)
    const [filtro, setFiltro] = useState('todos')
    const [lista, setLista] = useState(movies)
    
    useEffect(() => {
        // console.log('renderizou!!!', contador)
        if(filtro === 'todos') {
            setLista(movies)
        } else {
            const novaLista = movies.filter(item => item.category === filtro)
            setLista(novaLista)   
        }

    }, [filtro])

    return (
        <div>
            <span>Filtros:</span>
            <div style={{ marginBottom: 32, display: 'flex', gap: 16 }}>
                <button onClick={() => setFiltro('todos')}>Todos</button>
                <button onClick={() => setFiltro('filmes')}>Filmes</button>
                <button onClick={() => setFiltro('series')}>Series</button>
                <button onClick={() => setFiltro('animes')}>Animes</button>
            </div>

            <strong>Lista:</strong>
            <ul>
                {
                    lista.map((movie) => (
                        <li key={movie.title}>{movie.title} - ({movie.category})</li>
                    ))
                }
            </ul>
        </div>
    )
}