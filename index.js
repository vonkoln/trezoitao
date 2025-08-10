const btnEl = document.getElementById("btn");
const olavoEL = document.getElementById("olavo");
const apiURL = "olavo.json";

let frasesUsadas = [];

async function getOlavo() {
  try {
    olavoEL.innerText = "Atualizando...";
    btnEl.disabled = true;
    btnEl.innerText = "Carregando...";

    const response = await fetch(apiURL);
    const data = await response.json();

    let fraseSelecionada;
    do {
      fraseSelecionada = data[Math.floor(Math.random() * data.length)].olavo;
    } while (frasesUsadas.includes(fraseSelecionada) && frasesUsadas.length < data.length);

    frasesUsadas.push(fraseSelecionada);

    if (frasesUsadas.length === data.length) {
      frasesUsadas = [];
    }

    olavoEL.innerText = fraseSelecionada;
    btnEl.disabled = false;
    btnEl.innerText = "Minha honra!";
  } catch (error) {
    olavoEL.innerText = "Aconteceu um erro, tente novamente mais tarde!";
    btnEl.disabled = false;
    btnEl.innerText = "Minha honra!";
    console.error(error);
  }
}

btnEl.addEventListener("click", getOlavo);
