document.addEventListener('DOMContentLoaded', function () {
    // DROPDOWN FILTROS


    function cerrarDropdownOperacion() {
        filtrosDropdownOpeacion.classList.remove("active");
    }

    // DROPDOWN TIPO DE OPERACION

    const botonOperacion = document.querySelector('.alquilar_dropdown_btn');
    const filtrosDropdownOpeacion = document.querySelector('.dropdown_tipo_operacion');
    let timeoutDropdownOperacion;

    botonOperacion.addEventListener('click', function (e) {
        clearTimeout(timeoutDropdownOperacion);
        filtrosDropdownOpeacion.classList.add("active");
        e.stopPropagation(); 
    });

    botonOperacion.addEventListener('mouseleave', function () {
        timeoutDropdownOperacion = setTimeout(cerrarDropdownOperacion, 200);
    });

    filtrosDropdownOpeacion.addEventListener('mouseenter', function () {
        clearTimeout(timeoutDropdownOperacion);
        filtrosDropdownOpeacion.classList.add("active");
    });

    // Cerrar dropdowns cuando se clickea en cualquier lugar que no sean el dropdown
    document.addEventListener('click', function (e) {
        if (!filtrosDropdownOpeacion.contains(e.target) && e.target !== botonOperacion) {
            cerrarDropdownOperacion();
        }
    });

    // DROPDOWN TIPO DE PROPIEDAD

    const botonFiltroPropiedad = document.querySelector('.propiedad_btn');
    const filtroDropdownPropiedad = document.querySelector('.propiedad_dropdown');
    let timeoutDropdownPropiedad;
    
    function cerrarDropownFiltroPropiedad() {
        filtroDropdownPropiedad.classList.remove("active");
    }

    botonFiltroPropiedad.addEventListener('click', function (e) {
        clearTimeout(timeoutDropdownPropiedad);
        filtroDropdownPropiedad.classList.add("active");
        e.stopPropagation(); 
    });

    botonFiltroPropiedad.addEventListener('mouseleave', function () {
        timeoutDropdownPropiedad = setTimeout(cerrarDropownFiltroPropiedad, 200);
    });

    filtroDropdownPropiedad.addEventListener('mouseenter', function () {
        clearTimeout(timeoutDropdownPropiedad);
        filtroDropdownPropiedad.classList.add("active");

    });

    // Cerrar dropdowns cuando se clickea en cualquier lugar que no sean el dropdown
    document.addEventListener('click', function (e) {
        if (!filtroDropdownPropiedad.contains(e.target) && e.target !== botonFiltroPropiedad) {
            cerrarDropownFiltroPropiedad();
        }
    });


    // DROPDOWN PRECIO

    const botonFiltroPrecio = document.querySelector('.precio_btn');
    const filtroDropdownPrecio = document.querySelector('.precio_dropdown');
    let timeoutDropdownPrecio;
    
    function cerrarDropownFiltroPrecio() {
        filtroDropdownPrecio.classList.remove("active");
    }

    botonFiltroPrecio.addEventListener('click', function (e) {
        clearTimeout(timeoutDropdownPrecio);
        filtroDropdownPrecio.classList.add("active");
        e.stopPropagation(); 
    });

    botonFiltroPrecio.addEventListener('mouseleave', function () {
        timeoutDropdownPrecio = setTimeout(cerrarDropownFiltroPrecio, 200);
    });

    filtroDropdownPrecio.addEventListener('mouseenter', function () {
        clearTimeout(timeoutDropdownPrecio);
        filtroDropdownPrecio.classList.add("active");

    });

    // Cerrar dropdowns cuando se clickea en cualquier lugar que no sean el dropdown
    document.addEventListener('click', function (e) {
        if (!filtroDropdownPrecio.contains(e.target) && e.target !== botonFiltroPrecio) {
            cerrarDropownFiltroPrecio();
        }
    });


    // DROPDOWN AREA

    const botonFiltroArea = document.querySelector('.area_btn');
    const filtroDropdownArea = document.querySelector('.area_dropdown');
    let timeoutDropdownArea;
    
    function cerrarDropownFiltroArea() {
        filtroDropdownArea.classList.remove("active");
    }

    botonFiltroArea.addEventListener('click', function (e) {
        clearTimeout(timeoutDropdownArea);
        filtroDropdownArea.classList.add("active");
        e.stopPropagation(); 
    });

    botonFiltroArea.addEventListener('mouseleave', function () {
        timeoutDropdownArea = setTimeout(cerrarDropownFiltroArea, 200);
    });

    filtroDropdownArea.addEventListener('mouseenter', function () {
        clearTimeout(timeoutDropdownArea);
        filtroDropdownArea.classList.add("active");

    });

    // Cerrar dropdowns cuando se clickea en cualquier lugar que no sean el dropdown
    document.addEventListener('click', function (e) {
        if (!filtroDropdownArea.contains(e.target) && e.target !== botonFiltroArea) {
            cerrarDropownFiltroArea();
        }
    });


    // DROPDOWN MÁS FILTROS

    // const botonFiltros = document.querySelector('.filtros_btn');
    // const masFiltroDropdown = document.querySelector('.area_dropdown');
    // let timeoutDropdownArea;
    
    // function cerrarDropownFiltroArea() {
    //     filtroDropdownArea.classList.remove("active");
    // }

    // botonFiltroArea.addEventListener('click', function (e) {
    //     clearTimeout(timeoutDropdownArea);
    //     filtroDropdownArea.classList.add("active");
    //     e.stopPropagation(); 
    // });

    // botonFiltroArea.addEventListener('mouseleave', function () {
    //     timeoutDropdownArea = setTimeout(cerrarDropownFiltros, 200);
    // });

    // filtroDropdownArea.addEventListener('mouseenter', function () {
    //     clearTimeout(timeoutDropdownArea);
    //     filtroDropdownArea.classList.add("active");

    // });

    // // Cerrar dropdowns cuando se clickea en cualquier lugar que no sean el dropdown
    // document.addEventListener('click', function (e) {
    //     if (!filtroDropdownArea.contains(e.target) && e.target !== botonFiltroArea) {
    //         cerrarDropownFiltroArea();
    //     }
    // });

    // DROPDOWN ORDENAR BY

    const botonOrdenarBy = document.querySelector('.orden_btn');
    const ordenDropdown = document.querySelector('.contenedor_btn_orden');
    let timeoutDropdownOrden;
    
    function cerrarDropownOrden() {
        ordenDropdown.classList.remove("active");
    }

    botonOrdenarBy.addEventListener('click', function (e) {
        clearTimeout(timeoutDropdownOrden);
        ordenDropdown.classList.add("active");
        e.stopPropagation(); 
    });

    botonOrdenarBy.addEventListener('mouseleave', function () {
        timeoutDropdownOrden = setTimeout(cerrarDropownOrden, 200);
    });

    ordenDropdown.addEventListener('mouseenter', function () {
        clearTimeout(timeoutDropdownOrden);
        ordenDropdown.classList.add("active");

    });

    // Cerrar dropdowns cuando se clickea en cualquier lugar que no sean el dropdown
    document.addEventListener('click', function (e) {
        if (!ordenDropdown.contains(e.target) && e.target !== botonOrdenarBy) {
            cerrarDropownOrden();
        }
    });


});