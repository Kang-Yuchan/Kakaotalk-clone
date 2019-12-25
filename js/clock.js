const clock = document.querySelector(".header__time");

function loadClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    clock.innerHTML = `${hours < 10 ? "0" + hours : hours  }:${minutes < 10 ? "0" + minutes : minutes}`;
}


function init() {
    loadClock();
    setInterval(loadClock, 1000);
};

init();