// Funcionalidades de MiMundoLibro
document.addEventListener("DOMContentLoaded", function () {

    const buscador = document.getElementById("busqueda");
    const botonBuscar = document.getElementById("boton-buscar");
    const listaLibros = document.getElementById("lista-libros");
    const mensajeBusqueda = document.getElementById("mensaje-busqueda");

    // Buscar libros por título o autor
    function buscarLibros() {
        const texto = buscador.value.trim().toLowerCase();
        const libros = listaLibros.querySelectorAll(".libro");
        let encontrados = 0;

        libros.forEach(function (libro) {
            const contenido = libro.textContent.toLowerCase();
            const coincide = contenido.includes(texto);

            libro.style.display = coincide ? "" : "none";

            if (coincide) {
                encontrados++;
            }
        });

        if (texto === "") {
            mensajeBusqueda.textContent = "";
        } else if (encontrados === 0) {
            mensajeBusqueda.textContent =
                "No encontramos libros con ese nombre. Prueba otra búsqueda.";
        } else {
            mensajeBusqueda.textContent =
                "Encontramos " + encontrados +
                (encontrados === 1 ? " libro." : " libros.");
        }
    }

    // Buscar al pulsar el botón o escribir
    botonBuscar.addEventListener("click", buscarLibros);
    buscador.addEventListener("input", buscarLibros);

    // Mostrar un mensaje al consultar un libro
    const botonesDetalles = document.querySelectorAll("[data-libro]");

    botonesDetalles.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const titulo = boton.getAttribute("data-libro");

            alert(
                "Libro: " + titulo +
                "\n\nLa información completa de este libro " +
                "estará disponible en una futura versión."
            );
        });
    });

    // Mensajes provisionales para ingresar y registrarse
    document.querySelectorAll(".acceso a").forEach(function (enlace) {
        enlace.addEventListener("click", function (evento) {
            evento.preventDefault();

            const opcion = enlace.textContent.trim();

            alert(
                opcion +
                "\n\nEsta función estará disponible cuando " +
                "se implemente el registro de usuarios."
            );
        });
    });

});