let selecionarBotao = document.querySelector("button");
console.log(selecionarBotao);
alert(
  "Bem vindo!! Para pesquisar é preciso digitar o username e o repositório..."
);
async function pegarDados(e) {
  e.preventDefault();
  //Prevent default

  let selecionarInput = document.querySelector("input").value;
  let selecionarLista = document.querySelector("ul");
  //Pegando o valor do input

  if (selecionarInput.length > 0) {
    try {
      let response = await fetch(
        `https://api.github.com/repos/${selecionarInput}`
      );
      let dados = await response.json();
      //Busca da api

      let itemLista = document.createElement("li");
      let imagem = document.createElement("img");
      let texto = document.createElement("p");
      texto.innerText = `Descrição do projeto: ${dados.description} | Tech: ${dados.language}`;
      //Criando os elemento

      imagem.setAttribute("src", `${dados.owner.avatar_url}`);
      //Src da imagem

      itemLista.classList.add("item");
      itemLista.appendChild(imagem);
      itemLista.appendChild(texto);
      selecionarLista.appendChild(itemLista);

      console.log(dados.owner);
      console.log(dados);
    } catch (error) {
      alert("Por favor digite um valor correto");
    }
  }
  let selecionarTodosLi = document.querySelectorAll("li");
  selecionarTodosLi.forEach((elemento) => {
    elemento.addEventListener("click", function (e) {
      selecionarLista.removeChild(this);
    });
  });
  console.log(selecionarTodosLi);
}

selecionarBotao.addEventListener("click", pegarDados);
