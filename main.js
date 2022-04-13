const adviceText = document.getElementById("advice-text")
const adviceId = document.getElementById("advice-id");
const button = document.getElementById("boton")

window.addEventListener('load', () => {
    getAdvice();
})

button.addEventListener("click", () => {
    fetch("	https://api.adviceslip.com/advice")
    .then(response => {
        return response.json()
    })
    .then(data => {
        const adviceData = data.slip
        adviceText.innerText = `"${adviceData.advice}"`
        adviceId.innerText += `${adviceData.id}`
    })


}
)

function getAdvice() {
    fetch("	https://api.adviceslip.com/advice")
    .then(response => {
        return response.json()
    })
    .then(data => {
        const adviceData = data.slip
        adviceText.innerText = `"${adviceData.advice}"`
        adviceId.innerText += `${adviceData.id}`
    })



}

