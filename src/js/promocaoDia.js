const promocaoDia = async () => {
  const data = await buscarCardapio();
  for (const categoria of data) {
    for (const item of categoria.itens) {
      if (item.promocaoDia) {
        return item;
      }
    }
  }
  return null;
};

const redenrizarPromocaoDia = async () => {
  const item = await promocaoDia();
  const promocaoDiaItem = document.createElement("div");
  promocaoDiaItem.className = "prato__descricoes__img";

  promocaoDiaItem.innerHTML = `
                        <div class="prato__descricoes">
                            <h3 class="prato__descricoes-nome">${item.nome}</h3>
                            <ul class="prato__descricoes_informacoes">
                                <li class="prato__descricoes_informacoes-item">${item.tipo}</li>
                                <li class="prato__descricoes_informacoes-item preco-final"><p>Por apenas:</p>${item.precoOriginal}</li>
                            </ul>
                            <p class="prato__descricoes-final">${item.descricao}</p>             
                        </div>
                        <div class="prato__img">
                            <img src=${item.img} alt=${item.nome}
                                class="prato__img-imagem">
                        </div>
  `;
  const promocaoDiaContainer = document.getElementById("promocao-dia");
  promocaoDiaContainer.appendChild(promocaoDiaItem);
};
