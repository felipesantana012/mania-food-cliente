const categorias = async () => {
  const data = await buscarCardapio();
  const categoriaLista = document.querySelector(".categoria__lista");
  data.forEach((element) => {
    categoriaLista.innerHTML += `
    <li><a class="categoria__item" href="#${element.categoria}">${element.categoria}</a></li>
    `;
  });
};
