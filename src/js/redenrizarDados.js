const URL_CARDAPIO = "http://localhost:3000/cardapio";
const buscarCardapio = async () => {
  try {
    const res = await fetch(URL_CARDAPIO);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await renderizarComidas();
  await redenrizarSlides();
  await redenrizarPromocaoDia();
  botoesAumentarDiminuir();
});
