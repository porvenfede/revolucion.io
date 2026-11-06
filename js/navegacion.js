
document.addEventListener("DOMContentLoaded", () => {

    const ruta = window.location.pathname;
    const estaEnPaginas = ruta.includes("/paginas/");
    const base = estaEnPaginas ? "../" : "./";

    const paginas = [
        { nombre: "Portada", archivo: "index.html", clave: "index" },
        { nombre: "Golpe de 1955", archivo: "golpe-1955.html", clave: "golpe-1955" },
        { nombre: "Frondizi", archivo: "frondizi.html", clave: "frondizi" },
        { nombre: "Onganía", archivo: "ongania.html", clave: "ongania" },
        { nombre: "Cordobazo", archivo: "cordobazo.html", clave: "cordobazo" },
        { nombre: "Regreso de Perón", archivo: "regreso-peron.html", clave: "regreso-peron" },
        { nombre: "Isabel Perón", archivo: "isabel-peron.html", clave: "isabel-peron" }
    ];

    const archivoActual = ruta.split("/").pop() || "index.html";
    const claveActual = archivoActual.replace(".html", "");

    const encabezado = document.querySelector(".encabezado");

    if (!encabezado) return;

    encabezado.classList.add("menu-principal");

    encabezado.innerHTML = `
        <a href="${base}index.html" class="marca">
            <span class="marca-simbolo">✦</span>
            <span>ARCHIVO HISTÓRICO</span>
        </a>

        <nav class="navegacion-general" aria-label="Navegación principal">

            ${paginas.map(pagina => {

                const destino = pagina.clave === "index"
                    ? `${base}index.html`
                    : `${estaEnPaginas ? "" : "paginas/"}${pagina.archivo}`;

                return `
                    <a
                        href="${destino}"
                        class="enlace-menu ${claveActual === pagina.clave ? "activo" : ""}"
                        ${claveActual === pagina.clave ? 'aria-current="page"' : ""}
                    >
                        ${pagina.nombre}
                    </a>
                `;

            }).join("")}

        </nav>
    `;

});
