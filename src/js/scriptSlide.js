const redenrizarSlides = async () => {
  let cardapio = await buscarCardapio();

  let todosItens = [];
  cardapio.forEach((i) => {
    i.itens.forEach((item, idex) => {
      todosItens.push(item);
    });
  });

  const conatinerImgs = document.querySelector(".swiper-wrapper");
  todosItens.map((i, index) => {
    conatinerImgs.innerHTML += `
    <div class="swiper-slide">
    <div class="slide-content">
        <img src=${i.img} alt="${i.nome}" />
        <h3>${i.nome}</h3>
    </div>
</div>

    `;
  });
};

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
