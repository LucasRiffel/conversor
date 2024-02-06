const taxasDeCambio = ({
    "AUD": 1.5352002342,
    "BGN": 1.7966302754,
    "BRL": 4.9707809398,
    "CAD": 1.3461101965,
    "CHF": 0.8666201499,
    "CNY": 7.1933913973,
    "CZK": 23.0398837293,
    "DKK": 6.907401072,
    "EUR": 0.9269801295,
    "GBP": 0.7915500811,
    "HKD": 7.8195914655,
    "HRK": 7.020751307,
    "HUF": 355.2187609691,
    "IDR": 15642.584654623,
    "ILS": 3.6608605828,
    "INR": 82.9808391736,
    "ISK": 137.3446759189,
    "JPY": 148.3987113049,
    "KRW": 1336.1963674659,
    "MXN": 17.1274632453,
    "MYR": 4.7167808636,
    "NOK": 10.6119512979,
    "NZD": 1.648420257,
    "PHP": 55.9296888807,
    "PLN": 3.9956604091,
    "RON": 4.6091207749,
    "RUB": 90.999270292,
    "SEK": 10.4925016665,
    "SGD": 1.3415102119,
    "THB": 35.6436956348,
    "TRY": 30.415335696,
    "USD": 1,
    "ZAR": 18.8978426152
});

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