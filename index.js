const btnEl = document.getElementById("btn")
const jokeEL = document.getElementById("joke")


const apiKey = ""

const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="

async function getJoke() {
  try {
    jokeEL.innerText = "Atualizando.."
    btnEl.disabled = true
    btnEl.innerText = "Carregando.."
    const response = await fetch(apiURL, options)
    const data = await response.json()
  
    
    btnEl.disabled = false
    btnEl.innerText = "Frase do Olavo"

    jokeEL.innerText = data[0].joke;
  } catch (error) {
   jokeEL.innerText = "Aconteceu um erro, tente novamente mais tarde!";
   btnEl.disabled = false
   btnEl.innerText = "Frase do Olavo"
   console.log(error)
  }

 
}

btnEl.addEventListener("click", getJoke)