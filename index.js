const btnEl = document.getElementById("btn")
const olavoEL = document.getElementById("olavo")
const apiURL = "olavo.json"

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
    olavoEL.innerText = data[Math.floor(Math.random() * data.length)].olavo;
  } catch (error)
  {
   olavoEL.innerText = "Aconteceu um erro, tente novamente mais tarde!";
   btnEl.disabled = false
   btnEl.innerText = "Frase"
   console.log(error)
  } 
}
btnEl.addEventListener("click", getOlavo)

