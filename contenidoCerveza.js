



const retornoCardContenido = (contenido) => {

    const { imagen, marca, tipo, precio } = contenido
    return `<div class="card__sectionProducto">
    <a href="#"><img class="card__sectionProducto__image" src="${imagen}"
            alt="phmetro4" /></a>
    <a href="#" class="card__sectionProducto__title">
        <p> ${marca} </p>
    </a>
    <p class="precio"><span>$${precio}</span>
    <a href="#" class="card__product__actionCarrito">Añadir al carrito</a>
</div>`
}




const retornoCardError = () => {
    return `<div class="center white-text">
            <br><br><br><br>
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4>
                <br><br>
                    <i class="large material-icons">sentiment_very_dissatisfied</i>
                    <br><br>
                    </div>`
}

let stockProd;

const obtenerContenido = (URL) => {
    let cardsAmostrar = ""
    fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {

           stockProd=data;
            for (contenido of data) {

                cardsAmostrar += retornoCardContenido(contenido)
            }
            contenidoDOM.innerHTML = cardsAmostrar
        })


        .catch((error) => contenidoDOM.innerHTML = retornoCardError())
        .finally(() => cargandoDOM.innerHTML = "")
}




const buscarProductos  = document.querySelector("#busquedaproducto")

buscarProductos.addEventListener('keyup', e => {


    let resultado = stockProd.filter((contenido) => contenido.marca.toLowerCase().includes(e.target.value.toLowerCase()))

    if (resultado !== undefined) {
        console.clear();
        console.table(resultado);
        let cardsAmostrar= "";
        for (contenido of resultado) {

            cardsAmostrar += retornoCardContenido(contenido)
        }
        contenidoDOM.innerHTML = cardsAmostrar
    }
return  
 
}

)
