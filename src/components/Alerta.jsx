import useLetras from "../hooks/useLetras"
import Spinner from "./Spinner"

const Alerta = ({children}) => {

    const {cargando} = useLetras()

    return (

        cargando ? <Spinner /> :
        <div className="alerta">
            {children}
        </div>
    )
}

export default Alerta
