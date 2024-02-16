const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <div className="contenedorResultado">
      <img
        className="imgResultado"
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div className="parrafos">
        <p>
          El Precio es de: <span>{PRICE}</span>
        </p>
        <p>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </p>
        <p>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </p>
        <p>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </p>
        <p>
          Última Actualización: <span>{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
