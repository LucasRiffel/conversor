let divMoedas = document.querySelector("#moedas")


fetch("moedas.json").then((Response) => {
    Response.json().then((moedas) => {
        divMoedas.innerHTML += moedas.conversao.BRL
    })
})