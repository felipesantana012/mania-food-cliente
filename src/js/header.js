// --------------------------INICIO CRIAÇÃO CABECALHO--------------------------
const div = document.createElement("div");
div.classList.add('cabecalho');
div.innerHTML = `

<div class="cabecalho__logo">
<a href="/"><img src="/src/img/logos-icone/Logo-Mania-Food.png" alt="Logo do site, um hambuguer" class="cabecalho__logo-img"></a>
</div>

<div class="cabecalho__menu">
<ul class="cabecalho__menu__lista">
  <li class="cabecalho__menu__lista-link">
    <a href="/" class="cabecalho__menu__lista-link-ancora">Home</a>
  </li>

  <li class="cabecalho__menu__lista-link">
    <a href="#cardapio" class="cabecalho__menu__lista-link-ancora">Cardapio</a>
  </li>

  <li class="cabecalho__menu__lista-link">
    <a href="#contato" class="cabecalho__menu__lista-link-ancora">Contato</a>
  </li>



  <li class="cabecalho__menu__lista-link">
    <div class="cabecalho__menu__dark">
      <input type="checkbox" class="checkbox" id="ativar-modo-dark" />
      <label class="label" for="ativar-modo-dark">
        <i class="fas fa-sun"></i>
        <i class="fas fa-moon"></i>
      <div class="ball"></div>
      </label>
    </div>
  </li>

</ul>
</div>

<div class="menu-burguer">
  <i class="fa-solid fa-bars icone"></i>
</div>

<div class="menu-burguer-links " >
<li class="cabecalho__menu__lista-link">
  <a href="/" class="cabecalho__menu__lista-link-ancora">Home</a>
</li>

<li class="cabecalho__menu__lista-link">
  <a href="#cardapio" class="cabecalho__menu__lista-link-ancora">Cardapio</a>
</li>

<li class="cabecalho__menu__lista-link">
  <a href="#contato" class="cabecalho__menu__lista-link-ancora">Contato</a>
</li>



<li class="cabecalho__menu__lista-link">
    <div class="cabecalho__menu__dark">
      <input type="checkbox" class="checkbox" id="ativar-modo-dark-mobile"/>
      <label class="label" for="ativar-modo-dark-mobile">
        <i class="fas fa-sun"></i>
        <i class="fas fa-moon"></i>
        <div class="ball"></div>
      </label>
    </div>
  </li>
</div>



`
const todoCabecalho = document.getElementById('todo-cabecalho')
todoCabecalho.appendChild(div);
//--------------------------FIM CRIAÇÃO CABECALHO--------------------------



//--------------------------INICIO MENU MOBILE--------------------------
const btnMenuBurguer = document.querySelector('.icone')
const menuBurguer = document.querySelector('.menu-burguer-links')

btnMenuBurguer.addEventListener('click', () =>{
    menuBurguer.classList.toggle('abrir-menu-burguer')
    const iconeMenu = menuBurguer.classList.contains('abrir-menu-burguer')

    btnMenuBurguer.classList = iconeMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
})
//--------------------------FIM MENU MOBILE--------------------------



// --------------------------INICIO MODO-DARK--------------------------
const html = document.querySelector('html');
const ativarModoDark = document.querySelector('#ativar-modo-dark');
const ativarModoDarkMobile = document.querySelector('#ativar-modo-dark-mobile');

// Função para aplicar o estado do modo escuro baseado no localStorage
function aplicarModoDark() {
    if (localStorage.getItem('dark-mode') === 'true') {
        html.classList.add('dark-mode');
        ativarModoDark.checked = true;
        ativarModoDarkMobile.checked = true;
    } else {
        html.classList.remove('dark-mode');
        ativarModoDark.checked = false;
        ativarModoDarkMobile.checked = false;
    }
}

// Função para alternar o modo escuro e salvar o estado no localStorage
function alternarModoDark() {
    const isDarkMode = html.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
}


aplicarModoDark();

// Adicionar event listeners para os botões de alternância
ativarModoDark.addEventListener('change', alternarModoDark);
ativarModoDarkMobile.addEventListener('change', alternarModoDark);

// --------------------------FIM MODO-DARK--------------------------

