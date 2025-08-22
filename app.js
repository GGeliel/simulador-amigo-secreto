// Array para armazenar os nomes dos amigos
let nomesAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById('input-nome');
    const nome = input.value.trim();

    // Valida se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    nomesAmigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista na tela
    exibirAmigos();
}

// Função para exibir a lista de amigos na tela
function exibirAmigos() {
    // Seleciona o elemento da lista (id correto)
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array e adiciona cada nome como <li>
    for (let i = 0; i < nomesAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = nomesAmigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Valida se há amigos no array
    if (nomesAmigos.length === 0) {
        alert("Nenhum amigo cadastrado para sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * nomesAmigos.length);

    // Obtém o nome sorteado
    const nomeSorteado = nomesAmigos[indiceAleatorio];

    // Exibe o resultado no elemento de resultado (id correto)
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;

    // Zera a lista de amigos após o sorteio
    nomesAmigos = [];
    exibirAmigos();
}