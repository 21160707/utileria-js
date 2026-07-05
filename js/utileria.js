// 1. Validar si un texto tiene formato de correo electrónico
function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo); // Devuelve true si cumple el formato, false si no
}

// 2. Validar que un texto contenga SOLO letras (acepta espacios y acentos)
function soloLetras(texto) {
    const expresion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return expresion.test(texto);
}

// 3. Validar la longitud exacta de un número 
function validarLongitud(numero, maxLongitud) {
    const textoNumero = String(numero).trim();
    return textoNumero.length === maxLongitud;
}

// 4. Calcular la edad exacta a partir de una fecha de nacimiento (AAAA-MM-DD)
function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return 0;
    
    const fechaActual = new Date();
    const cumpleanos = new Date(fechaNacimiento);
    
    let edad = fechaActual.getFullYear() - cumpleanos.getFullYear();
    const mes = fechaActual.getMonth() - cumpleanos.getMonth();
    
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad; // Devuelve un número entero
}

// 5. Validar si una persona es mayor de edad
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return edad >= 18; 
}

// 6. Validar contraseña segura (mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial)
function validarPassword(password) {
    // Revisamos la longitud primero
    if (password.length < 8) return false;
    
    // Variables para comprobar cada requisito
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;
    
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    // Recorremos el texto letra por letra para comprobar los requisitos de forma escolar y comprensible
    for (let i = 0; i < password.length; i++) {
        const letra = password[i];
        
        if (caracteresEspeciales.includes(letra)) {
            tieneEspecial = true;
        } else if (!isNaN(letra) && letra !== " ") {
            tieneNumero = true;
        } else if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
            tieneMayuscula = true;
        } else if (letra === letra.toLowerCase() && letra !== letra.toUpperCase()) {
            tieneMinuscula = true;
        }
    }
    
    // Devuelve true solo si cumple todas las condiciones
    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}

// 7. Validar Código Postal 
function validarCP(codigoPostal) {
    const expresion = /^[0-9]{5}$/;
    return expresion.test(String(codigoPostal).trim());
}

// 8. Formatear Nombre Propio
function formatearNombre(texto) {
    if (!texto) return "";
    // Separa las palabras por espacios, las convierte y las vuelve a unir
    return texto.trim().toLowerCase().split(' ').map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }).join(' ');
}