document.getElementById("gerar").addEventListener("click", function () {

    const link = document.getElementById("link").value;
    const preco = document.getElementById("preco").value;
    const id = document.getElementById("idProduto").value;

    const mensagem =
`🔥 ACHADO SHEIN

💰 Preço: R$ ${preco}

🆔 ID: ${id}

🛍️ Compre aqui:
${link}`;

    document.getElementById("resultado").value = mensagem;

});

document.getElementById("copiar").addEventListener("click", function () {

    const texto = document.getElementById("resultado");

    texto.select();
    document.execCommand("copy");

    alert("Mensagem copiada!");

});

document.getElementById("whatsapp").addEventListener("click", function () {

    const texto = encodeURIComponent(
        document.getElementById("resultado").value
    );

    window.open(
        "https://wa.me/?text=" + texto,
        "_blank"
    );

});