import { useState } from "react"
import useLetras from "../hooks/useLetras"


const Formulario = () => {

    const {setAlerta} = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Coloca nombre de Artista y Canción')
            return
        }
    }

    return (
        <form
           onSubmit={handleSubmit} 
        >
            <legend>
                Busca por Artista y Canción
            </legend>

            <div className="form-grid">
                <div>
                    <label>Artista</label>
                    <input
                        type="text"
                        name="artista"
                        placeholder="Nombre Artista"
                        value={busqueda.artista}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: [e.target.value]
                        })}
                    />
                </div>

                <div>
                    <label>Canción</label>
                    <input
                        type="text"
                        name="cancion"
                        placeholder="Nombre Canción"
                        value={busqueda.cancion}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: [e.target.value]
                        })}
                    />
                </div>

                <input type="submit" value="Buscar" />
            </div>
        </form>
    )
}

export default Formulario
