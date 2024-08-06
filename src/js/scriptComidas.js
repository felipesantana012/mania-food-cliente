const renderizarComidas = async () => {
  const cardapio = await buscarCardapio();
  const usuario = await buscarEnderecoRedesSociais();

  let todosItens = [];
  cardapio.forEach((i) => {
    i.itens.forEach((item, idex) => {
      todosItens.push(item);
    });
  });

  let sectionCategoriasCards = document.querySelector(
    ".todas__comidas__pratos__categorias"
  );
  cardapio.forEach((itemCategoria) => {
    let comidas = document.createElement("div");
    comidas.classList.add("comidas");
    sectionCategoriasCards.append(comidas);

    let tituloCategoria = document.createElement("h2");
    tituloCategoria.classList.add("comida__titulo");
    tituloCategoria.id = itemCategoria.categoria;

    tituloCategoria.textContent = itemCategoria.categoria;

    let cardsComida = document.createElement("div");
    cardsComida.classList.add("comida__cards");
    comidas.append(tituloCategoria);
    itemCategoria.itens.forEach((item) => {
      comidas.append(cardsComida);

      cardsComida.innerHTML += ` 
            <div class="comida__card__descricoes__img">
                <div class="comida__descricoes">
                    <h3 class="comida__descricoes-nome" data-nome-produto>${
                      item.nome
                    }</h3>
                    <ul class="comida__descricoes_informacoes">
                        <li class="comida__descricoes_informacoes-item">${
                          item.tipo
                        }</li>
                        <li class="comida__descricoes_informacoes-item preco-comida">Por: <strong
                                data-valor-pizza-camarao>${item.precoOriginal.toFixed(
                                  2
                                )}</strong></li>
                    </ul>
                    <p class="comida__descricoes-final">${item.descricao}</p>
                    <div class="comida__descricoes-btn-icon">
                        <button class="comida__descricoes-btn" data-pegar-elemento >Adicionar</button>
                        <div class="comida__descricoes-contador">
                            <i class="fa-solid fa-plus" data-aumentar-quantidade></i>
                            <span data-quantidade-produto>0</span>
                            <i class="fa-solid fa-minus" data-diminuir-quantidade></i>
                        </div>
    
                    </div>
                    <span class="menssagem__error"></span>
                </div>
    
                <div class="comida__img">
                    <img src="${url}${item.img}" alt="${item.img}"
                        class="comida__img-imagem">
                </div>
            </div>
            `;
    });
  });

  let btnItem = document.querySelectorAll(".comida__descricoes-btn");
  let quantidadeProduto = document.querySelectorAll(
    "[data-quantidade-produto]"
  );
  let menssagemError = document.querySelectorAll(".menssagem__error");
  let carrinho = document.querySelector(".carrinho-pedidos");

  btnItem.forEach((item, index) => {
    item.setAttribute("data-pegar-elemento", index);
    item.addEventListener("click", () => {
      quantidadeProduto[index].getAttribute("data-quantidade-produto");
      let quantidade = parseInt(quantidadeProduto[index].textContent);
      if (quantidade > 0) {
        carrinho.style.display = "block";
        carrinhoIcone.style.display = "none";
        menssagemError[index].style.display = "none";
        addValorMenssagem(todosItens[index], quantidade);
        quantidadeProduto[index].textContent = 0;
      } else {
        menssagemError[index].textContent = "Selecione no mínimo 1 item.";
        menssagemError[index].style.display = "inline";
      }
    });
  });

  // Se não existir, inicializa a chave com um array vazio
  if (!localStorage.getItem("Pedidos")) {
    localStorage.setItem("Pedidos", JSON.stringify([]));
  }

  //Adicionando dados no local storage
  let todosPedidos = JSON.parse(localStorage.getItem("Pedidos"));
  function addValorMenssagem(item, quantidade) {
    let valorFinalItem = item.precoOriginal * quantidade;
    let pedido = {
      quantidade: quantidade,
      nome: item.nome,
      precoOriginal: item.precoOriginal,
      precoFinal: valorFinalItem.toFixed(2),
    };
    todosPedidos = JSON.parse(localStorage.getItem("Pedidos"));
    todosPedidos.push(pedido);
    localStorage.setItem("Pedidos", JSON.stringify(todosPedidos));
    getPedidoLocalStorage();
  }

  getPedidoLocalStorage();

  //Finalizando o pedido e enviado para Whatsapp
  let btnFinalizarPedido = document.querySelector(".carrinho__btn-finalizar");
  btnFinalizarPedido.addEventListener("click", () => {
    let itensPedidoConvertido = JSON.parse(
      localStorage.getItem("Pedidos", todosPedidos)
    );
    let menssagem = ``;
    let somaValorTotal = 0;
    itensPedidoConvertido.forEach((item, index) => {
      menssagem += `${item.quantidade}x ${item.nome} valor de ${item.precoOriginal} cada. \n`;
      somaValorTotal += parseFloat(item.precoFinal);
    });

    if (somaValorTotal > 0) {
      let stringValorTotal = `Total a pagar: ${somaValorTotal.toFixed(2)}`;
      const urlWhatsApp = `https://wa.me/55${
        usuario.redeSociais.whatsapp
      }?text=${encodeURIComponent(menssagem + stringValorTotal)}`;
      window.open(urlWhatsApp);
    }
  });

  //criando item de pedido no carrinho
  function getPedidoLocalStorage() {
    let itensPedidoConvertido = JSON.parse(
      localStorage.getItem("Pedidos", todosPedidos)
    );
    let carrinhoListaItens = document.querySelector(".carrinho__lista__itens");
    let totalPagar = document.querySelector(".carrinho__valor-total span");

    let somaTotalPagar = 0;
    carrinhoListaItens.textContent = "";

    itensPedidoConvertido.forEach((item, index) => {
      let li = document.createElement("li");
      li.classList.add("carrinho__item");
      li.innerHTML += `

            <div class="carrinho__item-quantidade-titulo">
            <p class="carrinho__item-quantidade">${item.quantidade}<span>x</span></p>
            <h3 class="carrinho__item-titulo">${item.nome}</h3>
            </div>
            
            <div class="carrinho__item-valor-icon-lixeira">                   
            <p class="carrinho__item-valor">${item.precoOriginal}<span>R$</span></p>
            <i class="fa-regular fa-trash-can" id="deletar-item" data-deletar-item="${index}" onclick="removerItemLocalStorage(${index})"></i>
            </div>
            `;

      carrinhoListaItens.append(li);
      let x = JSON.parse(item.precoFinal);
      somaTotalPagar += x;
    });

    totalPagar.textContent = somaTotalPagar.toFixed(2);
  }

  // Função para remover um item do Local Storage pelo índice
  window.removerItemLocalStorage = (index) => {
    let itens = JSON.parse(localStorage.getItem("Pedidos", todosPedidos));
    itens.splice(index, 1);
    todosPedidos = localStorage.setItem("Pedidos", JSON.stringify(itens));
    getPedidoLocalStorage();
  };

  //Mostrando e escodendo logo do carrinho e O X do carrinho para fechar
  let carrinhoIcone = document.querySelector(".carrinho-icone");
  let carrinhoFechar = document.querySelector(".carrinho__fechar");
  carrinhoIcone.addEventListener("click", () => {
    carrinhoIcone.style.display = "none";
    carrinho.style.display = "block";
  });
  carrinhoFechar.addEventListener("click", () => {
    carrinhoIcone.style.display = "block";
    carrinho.style.display = "none";
  });
};
