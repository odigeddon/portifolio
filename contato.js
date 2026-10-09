const telefone = document.querySelector("#telefone");
const nome = document.querySelector("#nome");

nome.addEventListener("input", () => {
    nome.value = nome.value.replace(/(^|\s)(\S)/g, (match, espaco, letra) =>
        espaco + letra.toLocaleUpperCase("pt-BR")
    );
});

telefone.addEventListener("input", () => {
    const digitos = telefone.value.replace(/\D/g, "").slice(0, 11);
    const ddd = digitos.slice(0, 2);
    const numero = digitos.slice(2);

    if (digitos.length <= 2) {
        telefone.value = ddd ? `(${ddd}` : "";
    } else if (digitos.length <= 10) {
        telefone.value = `(${ddd}) ${numero.slice(0, 4)}${numero.length > 4 ? `-${numero.slice(4)}` : ""}`;
    } else {
        telefone.value = `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
    }
});