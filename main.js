let provincias = [
    { nombre: "Buenos Aires", precio: 30000 },
    { nombre: "Mendoza", precio: 70000 },
    { nombre: "Jujuy", precio: 55000 },
    { nombre: "Santa Cruz", precio: 100000 },
    { nombre: "Tierra del fuego", precio: 150000 },
    { nombre: "Cordoba", precio: 50000 }
  ];

  // Función para cargar las opciones de provincias en el select
  const cargarProvincias = () => {
    const provinciaSelect = document.getElementById("provinciaSelect");
    provincias.forEach((provincia) => {
      const option = document.createElement("option");
      option.value = provincia.nombre;
      option.textContent = provincia.nombre;
      provinciaSelect.appendChild(option);
    });
  };

  // Función para saludar al usuario
  const saludar = () => {
    const nombreApellido = document.getElementById("nombreApellido").value;
    alert(`¡Hola, ${nombreApellido}!`);
  };

  // Función para calcular el precio con IVA
  const calcularPrecioConIVA = (precio, cantidadPasajeros) => {
    const iva = 0.21; // 21% de IVA
    const precioTotal = precio * cantidadPasajeros;
    return precioTotal + (precioTotal * iva);
  };

  // Función para calcular el precio del viaje seleccionado
  const calcularPrecio = () => {
    const cantidadPasajeros = parseInt(document.getElementById("cantidadPasajeros").value);
    const provinciaSeleccionada = document.getElementById("provinciaSelect").value;
    const provincia = provincias.find(provincia => provincia.nombre.toLowerCase() === provinciaSeleccionada.toLowerCase());

    if (provincia) {
      const precioConIVA = calcularPrecioConIVA(provincia.precio, cantidadPasajeros);
      const resultado = document.getElementById("resultado");
      resultado.textContent = `El precio total para ${cantidadPasajeros} pasajeros en ${provincia.nombre} es: $${precioConIVA.toFixed(2)}`;

      // Guardar compra en el carrito
      const compra = { provincia: provincia.nombre, cantidadPasajeros, precioTotal: precioConIVA };
      agregarAlCarrito(compra);
    } else {
      alert("¡Opción inválida! Por favor, elige una opción válida.");
    }
  };

  // Función para agregar una compra al carrito
  const agregarAlCarrito = (compra) => {
    const carrito = document.getElementById("carrito");
    const item = document.createElement("li");
    item.textContent = `${compra.cantidadPasajeros} pasajeros en ${compra.provincia} - Total: $${compra.precioTotal.toFixed(2)}`;
    carrito.appendChild(item);
  };

  // Función para realizar la compra
  const comprar = () => {
    const carrito = document.getElementById("carrito");
    if (carrito.children.length === 0) {
      alert("El carrito está vacío. Por favor, seleccione algún pasaje.");
    } else {
      const confirmacion = confirm("¿Desea confirmar la compra?");
      if (confirmacion) {
        // Simulación de compra (puedes personalizar esta parte)
        alert("¡Compra realizada con éxito!");
        // Vaciar el carrito después de la compra
        carrito.innerHTML = "";
      }
    }
  };

  cargarProvincias();

