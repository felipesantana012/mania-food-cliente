//--------------------------INICIO MENU MOBILE--------------------------

let iconeBurgerMenu = document.querySelector(".menu-mobile__icone");
let menuLinks = document.querySelector(".menu-mobile__links");
let icon = iconeBurgerMenu.querySelector(".menu-mobile__icone i");

iconeBurgerMenu.addEventListener("click", function () {
  menuLinks.classList.toggle("open");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");
});

document.addEventListener("click", function (event) {
  //verifica se o elemento clicado no DOM esta dentro do elemento menu. se não tiver ele remove
  if (
    !menuLinks.contains(event.target) &&
    !iconeBurgerMenu.contains(event.target)
  ) {
    menuLinks.classList.remove("open");
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  }
});

//--------------------------FIM MENU MOBILE--------------------------

// --------------------------INICIO MODO-DARK--------------------------
const html = document.querySelector("html");
const ativarModoDark = document.querySelector("#ativar-modo-dark");
const ativarModoDarkMobile = document.querySelector("#ativar-modo-dark-mobile");

// Função para aplicar o estado do modo escuro baseado no localStorage
function aplicarModoDark() {
  if (localStorage.getItem("dark-mode") === "true") {
    html.classList.add("dark-mode");
    ativarModoDark.checked = true;
    ativarModoDarkMobile.checked = true;
  } else {
    html.classList.remove("dark-mode");
    ativarModoDark.checked = false;
    ativarModoDarkMobile.checked = false;
  }
}

// Função para alternar o modo escuro e salvar o estado no localStorage
function alternarModoDark() {
  const isDarkMode = html.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

aplicarModoDark();

// Adicionar event listeners para os botões de alternância
ativarModoDark.addEventListener("change", alternarModoDark);
ativarModoDarkMobile.addEventListener("change", alternarModoDark);

// --------------------------FIM MODO-DARK--------------------------
