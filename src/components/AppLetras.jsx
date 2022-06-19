import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import Spinner from "./Spinner"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

  const {alerta, letra, cargando} = useLetras()

  return (
    <>
      <header>Búscador de Letras de Canciones</header>

      <Formulario />

      <main>
        {alerta ? <Alerta>{alerta}</Alerta> : 
        letra ? <Letra /> :
        cargando ? <Spinner /> :
        <p className="text-center">
          Busca canciones de tus artistas favoritos
        </p>}
      </main>
    </>
  )
}

export default AppLetras
