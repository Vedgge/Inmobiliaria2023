document.addEventListener('DOMContentLoaded', function () {
    // DROPDOWN FILTROS

    function inicializarDropdown(buttonClass, dropdownClass) {
        const button = document.querySelector(buttonClass);
        const dropdown = document.querySelector(dropdownClass);
        let timeoutDropdown;

        function closeDropdown() {
            dropdown.classList.remove("active");
        }

        function openDropdown(e) {
            clearTimeout(timeoutDropdown);
            dropdown.classList.add("active");
            e.stopPropagation();
        }

        function manejarSalidaMouse() {
            timeoutDropdown = setTimeout(closeDropdown, 200);
        }

        function manejarEntradaMouse() {
            clearTimeout(timeoutDropdown);
            dropdown.classList.add("active");
        }

        button.addEventListener('click', openDropdown);
        button.addEventListener('mouseleave', manejarSalidaMouse);
        dropdown.addEventListener('mouseenter', manejarEntradaMouse);


        document.addEventListener('click', function (e) { // Cerrar los dropdwons al hacer click en cualquier lugar fuera de ellos
            if (!dropdown.contains(e.target) && e.target !== button) {
                closeDropdown();
            }
        });
    }

    inicializarDropdown('.alquilar_dropdown_btn', '.dropdown_tipo_operacion');
    inicializarDropdown('.propiedad_btn', '.propiedad_dropdown');
    inicializarDropdown('.precio_btn', '.precio_dropdown');
    inicializarDropdown('.area_btn', '.area_dropdown');
    // Inicializar los dropdown por cada seccion

    //CERRAR DROPDOWN CON EL BOTON APILCAR

    const aplicarButones = document.querySelectorAll('.aplicar_btn');

    aplicarButones.forEach((button) => {
        button.addEventListener('click', function () {
            const dropdownSection = button.closest('.dropdown_prop_busq'); // Encontrar el elemento padre con clase "dropdown_prop_busq"
            dropdownSection.classList.remove('active'); // Removerle la clase active
        });
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