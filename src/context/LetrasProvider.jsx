import { useState, createContext } from "react"
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState(false)

    const busquedaLetra = async (busqueda) => {
        setCargando(true)
        try {
            const {artista, cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            
            const resultado = await axios.get(url) //el get se puede eliminar porq es el metodo por default
            /* console.log(resultado) */
            const {data} = resultado
            /* console.log(data.lyrics) */
            setLetra(data.lyrics)
            setAlerta('')
        } catch (error) {
            setAlerta('Canción no encontrada')
        }
        setCargando(false)
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra,
                letra,
                cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}
export default LetrasContext