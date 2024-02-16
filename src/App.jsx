import { useEffect, useState } from "react";
import Formulario from "../components/Formulario";
import Spinner from "../components/Spinner";
import Resultado from "../components/Resultado";

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }

      cotizarCripto()
    }
  }, [monedas])

  return (
    <div className="contenedor">
      <img
        src="../img/imagen-criptos.png"
        alt="imagenes criptomonedas"
        className="imagen"
      />

      <div>
        <h1 className="heading">Cotiza Criptomonedas al Instante</h1>
        <Formulario setMonedas={setMonedas}/>
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </div>
  );
}

export default App;
