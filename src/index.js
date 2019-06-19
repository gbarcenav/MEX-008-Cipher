irConciertos = evento => {
  evento.preventDefault();
};

const concertSection = document.querySelector("#conciertos-but");
concertSection.addEventListener("submit", irConciertos);
