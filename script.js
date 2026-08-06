const btnGerar = document.getElementById("gerar");
const btnCopiar = document.getElementById("copiar");
const btnWhats = document.getElementById("whatsapp");

const link = document.getElementById("link");
const preco = document.getElementById("preco");
const id = document.getElementById("idProduto");
const nome = document.getElementById("nomeProduto");
const resultado = document.getElementById("resultado");

btnGerar.addEventListener("click", () => {

    if(link.value.trim() === "" || preco.value.trim() === "" || id.value.trim() === ""){
        alert("Preencha todos os campos.");
        return;
    }

const mensagem = `🔥 ACHADO DO DIA

👕 ${nome.value}

💰 R$ ${preco.value}

🆔 ID: ${id.value}

🛒 Compre aqui:
${link.value}

━━━━━━━━━━━━━━

🚀 Picks`;


    resultado.value = mensagem;

});

btnCopiar.addEventListener("click", async () => {

    if(resultado.value === ""){
        alert("Gere uma postagem primeiro.");
        return;
    }

    await navigator.clipboard.writeText(resultado.value);

    alert("Mensagem copiada!");

});

btnWhats.addEventListener("click", () => {

    if(resultado.value === ""){
        alert("Gere uma postagem primeiro.");
        return;
    }

    const texto = encodeURIComponent(resultado.value);

    window.open(
        `https://wa.me/?text=${texto}`,
        "_blank"
    );

});