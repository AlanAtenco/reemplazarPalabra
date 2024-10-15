const reemplazarPalabra = () => {
    // Obtiene el texto ingresado, la palabra seleccionada del select y la nueva palabra
    const texto = document.getElementById('texto').value;
    const palabraSeleccionada = document.getElementById('palabra').value;
    const palabraNueva = document.getElementById('buscar').value.trim();

    // Separa la palabra principal de los sinónimos
    const sinonimos = palabraSeleccionada.split('|');
    
    // Verifica si la nueva palabra no está vacía
    if (palabraNueva.length > 0) {
        // Crea una expresión regular para buscar todas las palabras o sinónimos seleccionados
        const regex = new RegExp(`\\b(${sinonimos.join('|')})\\b`, 'gi');

        // Reemplaza todas las ocurrencias de la palabra principal o sinónimos con la nueva palabra
        const textoModificado = texto.replace(regex, palabraNueva);

        // Muestra el texto modificado en el resultado
        const resultado = document.getElementById('resultado');
        resultado.textContent = `Texto modificado: ${textoModificado}`;
        resultado.style.display = 'block';
    } else {
        // Si la nueva palabra está vacía, muestra un mensaje de error
        const resultado = document.getElementById('resultado');
        resultado.textContent = 'Por favor, ingresa una palabra para reemplazar.';
        resultado.style.display = 'block';
    }
};
