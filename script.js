// Sistema de Inscripción Escolar — lógica del lado del cliente

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validación 1: Comprobar que ningún campo esté vacío
  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return; // Detiene la ejecución de la función
  }

  // Validación 2: Comprobar que el correo contenga al menos un "@" y un "."
  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Por favor, ingresa un correo válido (debe contener '@' y un punto).");
    return; // Detiene la ejecución de la función
  }

  // Si todas las validaciones pasan, el envío es exitoso
  alert("¡Formulario validado y enviado con éxito!");
  
  // Aquí podrías agregar el código para enviar los datos al servidor (ej. fetch o XMLHttpRequest)
});