const btnEl = document.getElementById("btn")
const jokeEL = document.getElementById("olavo")



const apiURL = "olavo.json"

async function getJoke() {
  try {
    jokeEL.innerText = "Atualizando.."
    btnEl.disabled = true
    btnEl.innerText = "Carregando.."
    const response = await fetch(apiURL)
    const data = await response.json()
  
    
    btnEl.disabled = false
    btnEl.innerText = "Frase do Olavo"

    jokeEL.innerText = data[Math.floor(Math.random() * data.length)].olavo;
  } catch (error) {
   jokeEL.innerText = "Aconteceu um erro, tente novamente mais tarde!";
   btnEl.disabled = false
   btnEl.innerText = "Frase do Olavo"
   console.log(error)
  }

 
}

btnEl.addEventListener("click", getJoke)