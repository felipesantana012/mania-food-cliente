const botoesAumentarDiminuir = () => {
  const aumentarQuantidade = document.querySelectorAll(
    "[data-aumentar-quantidade]"
  );
  aumentarQuantidade.forEach((botao) => {
    botao.addEventListener("click", () => {
      const quantidadeProduto = botao.parentElement.querySelector(
        "[data-quantidade-produto]"
      );
      let quantidade =
        parseInt(quantidadeProduto.getAttribute("data-quantidade-produto")) ||
        0; // Se o atributo não estiver definido, assume 0
      if (quantidade >= 0) {
        quantidade++;
        quantidadeProduto.setAttribute("data-quantidade-produto", quantidade);
        quantidadeProduto.textContent = quantidade;
      } else {
        quantidadeProduto.textContent = 0;
      }
    });
  });

  const diminuirQuantidade = document.querySelectorAll(
    "[data-diminuir-quantidade]"
  );

  diminuirQuantidade.forEach((botao) => {
    botao.addEventListener("click", () => {
      const quantidadeProduto = botao.parentElement.querySelector(
        "[data-quantidade-produto]"
      );
      let quantidade =
        parseInt(quantidadeProduto.getAttribute("data-quantidade-produto")) ||
        0;
      if (quantidade > 0) {
        quantidade--;
        quantidadeProduto.setAttribute("data-quantidade-produto", quantidade);
        quantidadeProduto.textContent = quantidade;
      } else {
        quantidadeProduto.textContent = 0;
      }
    });
  });
};
