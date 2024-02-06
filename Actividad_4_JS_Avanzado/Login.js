// Gestionar eventos sobre formularios

document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Realizar el check antes de enviar
    if (!checkLogin()) {
        event.preventDefault(); //preventDefault = Detener el envío
    } else {
        localStorage.setItem('isLoggedIn', true);
    }
});

function checkLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, introduzca sus credenciales o regístrese");
        return false;
    }

    if (!email.includes(".com") && !email.includes(".es")) {
        alert("Por favor, introduzca un correo válido");
        return false;
    }

    return true;

}



