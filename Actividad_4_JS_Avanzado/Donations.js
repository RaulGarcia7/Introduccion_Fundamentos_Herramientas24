let totalDonation = 1747;
const goalAmount = 4000;
let donationProgressElement = document.getElementById("donationProgress");

updateTotalAmount();

function donate(){
    // lo primero seria verificar que isLoggedIn es true o llevarle a inicio sesion
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true'){
        alert("Debes iniciar sesión para realizar un donativo.");
        window.location.href = "Login.html";
        return false;
    }
    let donationAmount = parseInt(document.getElementById("donationAmount").value);

    totalDonation += donationAmount;

    localStorage.setItem('totalDonation', totalDonation); //dejamos guardado para saltos de página

    updateTotalAmount();

    if (totalDonation >= goalAmount) {
        alert("¡Hurra! Hemos alcanzado el objetivo de " + goalAmount + " €! Gracias por tu donación. El dinero adicional será de gran ayuda.");
    }
    
    let message = "¡Hemos recibido tu donativo de " + donationAmount + " €! Gracias por tu donación.";

    if (donationAmount >= 5 && donationAmount < 10) {
        message += " Por tu colaboración, aparecerás en los créditos de juego.";
    } else if (donationAmount >= 10 && donationAmount < 50) {
        message += " Por tu colaboración, recibirás contenido exclusivo con la compra del juego.";
    } else if (donationAmount >= 50 && donationAmount < 100) {
        message += " Por tu colaboración, recibirás una copia original de juego de forma física (única) firmada por el equipo, además de contenido extra.";
    } else if (donationAmount >= 100) {
        message += " Por tu colaboración, recibirás la Edición Especial del juego, con hasta 10 productos de merchandising.";
    }

    alert(message);
    return false;
}

function updateTotalAmount() {
    document.getElementById("totalAmount").innerText = totalDonation + " €";
    document.getElementById("goalAmount").innerText = goalAmount + " €";
    donationProgressElement.max = goalAmount;
    donationProgressElement.value = totalDonation;
}

function setDonationAmount(amount) {
    document.getElementById("donationAmount").value = amount;
}

// Forma de chequeo del localStorage para que carge lo guardado
document.addEventListener("DOMContentLoaded", function() {
    let storedTotalDonation = localStorage.getItem('totalDonation');

    if (storedTotalDonation !== null) {
        totalDonation = parseInt(storedTotalDonation);
    }

    updateTotalAmount();
});

