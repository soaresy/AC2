document.addEventListener("DOMContentLoaded", function() {
    const setorSelect = document.getElementById("setorSelect");
    const cargoSelect = document.getElementById("cargoSelect");
    const convenioSelect = document.getElementById("convenioSelect");

    // Função para carregar opções de seleção
    function carregarOpcoes(url, select) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    data.forEach(item => {
                        const option = document.createElement("option");
                        option.value = item.nome;
                        option.textContent = item.nome;
                        select.appendChild(option);
                    });
                    resolve();
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function() {
                reject(xhr.statusText);
            };
            xhr.send();
        });
    }

    // Carregar opções de seleção para cargo, setor e convênio em paralelo
    Promise.all([
        carregarOpcoes("https://aulalp2024.free.beeceptor.com/setor", setorSelect),
        carregarOpcoes("https://aulalp2024.free.beeceptor.com/cargo", cargoSelect),
        carregarOpcoes("https://aulalp2024.free.beeceptor.com/convenio", convenioSelect)
    ]).catch(error => {
        console.error("Erro ao carregar opções:", error);
    });

    // Evento de envio do formulário
    const form = document.getElementById("cadastroForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Obter dados do formulário
        const dados = {
            nome: document.getElementById("nome").value,
            telefone: document.getElementById("telefone").value,
            email: document.getElementById("email").value,
            cpf: document.getElementById("cpf").value,
            rg: document.getElementById("rg").value,
            cargo: cargoSelect.value,
            salario: document.getElementById("salario").value,
            setor: setorSelect.value,
            convenio: convenioSelect.value,
            valorTitular: document.getElementById("valorTitular").value,
            valorDependente: document.getElementById("valorDependente").value
        };

        // Enviar dados para o servidor
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://66266bc2052332d55322d1f0.mockapi.io/funcionario");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            if (xhr.status === 201) {
                alert("Funcionário cadastrado com sucesso!");
                form.reset(); // Limpar o formulário após o envio
            } else {
                console.error("Erro ao cadastrar funcionário:", xhr.statusText);
                alert("Erro ao cadastrar funcionário. Por favor, tente novamente mais tarde.");
            }
        };
        xhr.onerror = function() {
            console.error("Erro ao cadastrar funcionário:", xhr.statusText);
            alert("Erro ao cadastrar funcionário. Por favor, tente novamente mais tarde.");
        };
        xhr.send(JSON.stringify(dados));
    });
});