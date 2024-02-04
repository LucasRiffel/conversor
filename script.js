document.querySelector(".botao-efetuar").addEventListener("click", function() {
    const moedaOrigem = document.querySelector(".moedaConversao").value.toUpperCase();
    const moedaDestino = document.querySelector(".moedaConvertida").value.toUpperCase();
    const valorOriginal = parseFloat(document.querySelector(".moeda1").value);

    fetch("moedas.json")
        .then(response => response.json())
        .then(data => {
            const taxaConversao = data.valor[moedaDestino] / data.valor[moedaOrigem];
            const valorConvertido = valorOriginal * taxaConversao;

            document.querySelector(".moeda2").value = valorConvertido.toFixed(2);
        })
        .catch(error => console.error("Erro na requisição:", error));
});
