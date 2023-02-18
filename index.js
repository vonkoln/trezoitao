const btnEl = document.getElementById("btn")
const olavoEL = document.getElementById("olavo")
const apiURL = "olavo.json"

let frasesUsadas = [];

async function getOlavo()
{
  try
  {
    olavoEL.innerText = "Atualizando.."
    btnEl.disabled = true
    btnEl.innerText = "Carregando.."
    const response = await fetch(apiURL)
    const data = await response.json()        
    btnEl.disabled = false
    btnEl.innerText = "Frase"
    // olavoEL.innerText = data[Math.floor(Math.random() * data.length)].olavo;
    do {
      fraseSelecionada = data[Math.floor(Math.random() * data.length)].olavo;
    } while (frasesUsadas.includes(fraseSelecionada));

    frasesUsadas.push(fraseSelecionada);

    olavoEL.innerText = fraseSelecionada

  } catch (error)
  {
   olavoEL.innerText = "Aconteceu um erro, tente novamente mais tarde!";
   btnEl.disabled = false
   btnEl.innerText = "Frase"
   console.log(error)
  } 
}

btnEl.addEventListener("click", getOlavo)


// btn.addEventListener('click', () => {
//   if (data.length === apiURL.length) {
//     // Se todas as frases já foram usadas, reiniciar a lista de frases usadas
//     data = [];
//   }
//   getOlavo();
// });
