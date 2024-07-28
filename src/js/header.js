//--------------------------INICIO MENU MOBILE--------------------------
const btnMenuBurguer = document.querySelector(".icone");
const menuBurguer = document.querySelector(".menu-burguer-links");

btnMenuBurguer.addEventListener("click", () => {
  menuBurguer.classList.toggle("abrir-menu-burguer");
  const iconeMenu = menuBurguer.classList.contains("abrir-menu-burguer");

  btnMenuBurguer.classList = iconeMenu
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
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
