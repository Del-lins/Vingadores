const capa = document.querySelectorAll(".capa");
const vingadores = document.querySelectorAll(".vingadores");

document.querySelectorAll(".capa").forEach((capa, index) => {
  capa.addEventListener("click", () => {
    document.querySelector(".vingadores.active")?.classList.remove("active");
    document.querySelectorAll(".vingadores")[index].classList.add("active");
  });
});
