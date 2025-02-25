const URL_USUARIO = `${url}/usuario`;

const buscarEnderecoRedesSociais = async () => {
  try {
    const res = await fetch(URL_USUARIO);
    const data = await res.json();
    const dataItem = data[0];
    return dataItem;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const redenrizarEnderecoRedeSociais = async () => {
  const data = await buscarEnderecoRedesSociais();
  //ENDERECO
  document.getElementById("img_foto-restaurante").src = data.endereco.fotoLocal;
  document.getElementById(
    "endereco-rua"
  ).innerHTML = `<span>Rua: </span> ${data.endereco.rua}`;

  document.getElementById(
    "endereco-bairro"
  ).innerHTML = `<span>Bairro: </span> ${data.endereco.bairro}`;
  document.getElementById(
    "endereco-cidade"
  ).innerHTML = `<span>Cidade: </span> ${data.endereco.cidade}`;

  document.getElementById("localizacao-maps").src = data.endereco.linkMaps;

  //REDES SOCIAIS
  document.getElementById(
    "contato-whatsapp"
  ).href = `https://wa.me/55${data.redeSociais.whatsapp}?text=Ola!`;

  document.getElementById(
    "contato-instagram"
  ).href = `https://www.instagram.com/${data.redeSociais.instagram}`;

  document.getElementById(
    "contato-facebook"
  ).href = `https://www.facebook.com/${data.redeSociais.facebook}`;

  document.getElementById(
    "contato-tiktok"
  ).href = `https://www.tiktok.com/${data.redeSociais.tiktok}`;
};

redenrizarEnderecoRedeSociais();
