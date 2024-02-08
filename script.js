fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LEOmCrl72SAGrTYLg4s9tzUGD1a9DYJqg6WJn0u9')
  .then(response => response.json())
  .then(data => console.log(data));

function limparMoeda() { 
    document.querySelector(".moedaConversao").value = "";
    document.querySelector(".moedaConvertida").value = "";
    document.querySelector(".moeda1").value = "";
    document.querySelector(".moeda2").value = ""; 
}

document.getElementById("limparMoedas").addEventListener("click", limparMoeda);

function trocarMoeda() { 
    const valorMoedaConversao = document.querySelector(".moedaConversao").value;
    const valorMoedaConvertida = document.querySelector(".moedaConvertida").value;
   

    document.querySelector(".moedaConversao").value = valorMoedaConvertida;
    document.querySelector(".moedaConvertida").value = valorMoedaConversao;
    document.querySelector(".moeda1").value = "";
   
}

document.querySelector(".botao-efetuar").addEventListener("click", function () {
    const moedaOrigem = document.querySelector(".moedaConversao").value.toUpperCase();
    const moedaDestino = document.querySelector(".moedaConvertida").value.toUpperCase();
    const valorOriginal = parseFloat(document.querySelector(".moeda1").value);
    

    if (moedaOrigem in taxasDeCambio && moedaDestino in taxasDeCambio) {
        const taxaConversao = taxasDeCambio[moedaDestino] / taxasDeCambio[moedaOrigem];
        const valorConvertido = valorOriginal * taxaConversao;

        document.querySelector(".moeda2").value = valorConvertido.toFixed(2);
    } else {
        alert('Moedas inválidas selecionadas');
    }
});



document.getElementById("trocarMoedas").addEventListener("click", trocarMoeda);