const img = document.createElement("img");
function loadFile(event) {
  const reader = new FileReader();
  reader.onload = () => {
    img.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function criarArtigo() {
  const tituloP = document.querySelector(".titulo-p");
  const valorDoTituloP = tituloP.value;

  const descricao = document.querySelector(".descricao");
  const valorDaDescricao = descricao.value;

  const article = document.createElement("article");
  article.classList = "article-about-games";

  const aboutGames = document.querySelector(".about-games");

  const h2 = document.createElement("h2");
  h2.innerHTML = valorDoTituloP;

  const h3 = document.createElement("h3");
  h3.innerHTML = "Descrição:";

  const p = document.createElement("p");
  p.innerHTML = valorDaDescricao;

  const div = document.createElement("div");

  const input1 = document.createElement("input");
  input1.type = "radio";

  const input2 = document.createElement("input");
  input2.type = "radio";

  const label1 = document.createElement("label");
  const textoLabel1 = document.createTextNode("Gostou dessa informação?");

  const label2 = document.createElement("label");
  const textoLabel2 = document.createTextNode("Não foi útil a você?");

  const form = document.querySelector(".inserir-texto");

  article.appendChild(h2);
  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(img);
  article.appendChild(div);
  div.appendChild(label1);
  div.appendChild(label2);
  label1.appendChild(input1);
  label1.appendChild(textoLabel1);
  label2.appendChild(input2);
  label2.appendChild(textoLabel2);

  if (tituloP.value === "" || descricao.value === "" || img.src === "") {
    if (tituloP.value === "") alert("Digite o título");

    if (descricao.value === "") alert("Digite a descrição");

    if (img.src === "") alert("Selecione a imagem");
  } else aboutGames.insertBefore(article, form);
}
