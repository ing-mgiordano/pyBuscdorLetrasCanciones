import { useState, createContext } from "react"
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')
    const [letra, setLetra] = useState('')

    const busquedaLetra = async (busqueda) => {
        try {
            const {artista, cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            
            const resultado = await axios.get(url) //el get se puede eliminar porq es el metodo por default
            /* console.log(resultado) */
            const {data} = resultado
            /* console.log(data.lyrics) */
            setLetra(data.lyrics)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra
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