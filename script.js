const taxasDeCambio = {
    "AUD": 1.5338701658,
    "BGN": 1.8130203265,
    "BRL": 4.9694207153,
    "CAD": 1.3464202392,
    "CHF": 0.8742501634,
    "CNY": 7.1947607328,
    "CZK": 23.1437445925,
    "DKK": 6.9200310993,
    "EUR": 0.9280701305,
    "GBP": 0.792050095,
    "HKD": 7.8174211533,
    "HRK": 7.0218009901,
    "HUF": 360.3046649408,
    "IDR": 15614.477593226,
    "ILS": 3.6556805041,
    "INR": 82.932832212,
    "ISK": 137.7334807636,
    "JPY": 148.0848329214,
    "KRW": 1326.7858746707,
    "MXN": 17.0537224145,
    "MYR": 4.7595206541,
    "NOK": 10.577651195,
    "NZD": 1.6368602744,
    "PHP": 55.9546708888,
    "PLN": 4.0280907982,
    "RON": 4.6179207865,
    "RUB": 91.2501947733,
    "SEK": 10.4762616343,
    "SGD": 1.3432801897,
    "THB": 35.6006148761,
    "TRY": 30.5689331671,
    "USD": 1,
    "ZAR": 18.8836031824
}

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