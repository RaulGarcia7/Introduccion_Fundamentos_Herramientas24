
// Añadir un reloj en cuenta regresiva para que se vea cuánto queda para finalizar la recaudación.


let featuredProjects = document.querySelectorAll(".featured_project");

featuredProjects.forEach(project => {
    // elemento span que será el contador
    let countdown = document.createElement("span");

    countdown.classList.add("countdown");

    project.appendChild(countdown);

    const deadline = new Date(project.getAttribute("data-deadline"))

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = deadline - currentDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdown.innerText = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
})
