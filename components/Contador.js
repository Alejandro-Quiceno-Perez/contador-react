const Contador = () => {

    const [contador, setContador] = React.useState(0);
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);
    return (
        <div>
            <h1 className={contador < 0 ? "menor" : "mayor"} > Contador: {contador} </h1>
            <button class="btn-aumentar" onClick={sumar} >Aumentar</button>
            <button class="btn-disminuir" onClick={restar} >Disminuir</button>
        </div>
    )
}