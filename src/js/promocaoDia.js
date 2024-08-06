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
  const promocaoDiaContainer = document.getElementById("promocao-dia");
  const h2 = document.createElement("h2");
  h2.textContent = "Promoção do dia";
  h2.className = "prato__titulo";
  const promocaoDiaItem = document.createElement("div");
  promocaoDiaItem.className = "prato__descricoes__img";

  promocaoDiaItem.innerHTML = `
                        <div class="prato__descricoes">
                            <h3 class="prato__descricoes-nome">${item.nome}</h3>
                            <ul class="prato__descricoes_informacoes">
                                <li class="prato__descricoes_informacoes-item">${
                                  item.tipo
                                }</li>
                                <li class="prato__descricoes_informacoes-item preco-final"><p>Por apenas:</p>${item.precoOriginal.toFixed(
                                  2
                                )}</li>
                            </ul>
                            <p class="prato__descricoes-final">${
                              item.descricao
                            }</p>             
                        </div>
                        <div class="prato__img">
                            <img src=${url}${item.img} alt=${item.nome}
                                class="prato__img-imagem">
                        </div>
  `;
  promocaoDiaContainer.appendChild(h2);
  promocaoDiaContainer.appendChild(promocaoDiaItem);
};
