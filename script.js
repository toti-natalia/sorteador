     
const btn = document.getElementById('btn');
const container = document.querySelector('.container'); // A div que vai conter o resultado

function sortear() {
    const texto = document.getElementById('text-id').value;
    const itens = texto.split(',').map(item => item.trim());

    // Verifica se há itens válidos
    if (itens.length === 0 || texto.trim() === '') {
        alert('Digite pelo menos um item.');
        return;
    }

    // Remove qualquer resultado anterior
    const resultadoAnterior = document.querySelector('.resultado');
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    // Cria a div para exibir o "SORTEANDO..."
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('resultado', 'glitter');
   // resultadoDiv.style.backgroundColor = 'red';
    //resultadoDiv.style.color = '#fff';
    resultadoDiv.style.marginTop = '30px';
    resultadoDiv.style.padding = '30px';
    resultadoDiv.style.borderRadius = '10px';
    resultadoDiv.style.fontSize = '30px';
    resultadoDiv.style.textAlign = 'center';
    

    // Exibe "SORTEANDO..." enquanto aguarda
    resultadoDiv.innerText = 'SORTEANDO...';
    container.appendChild(resultadoDiv); // Adiciona a div na tela

    // Após 2 segundos, realiza o sorteio
    setTimeout(() => {
        const indiceSorteado = Math.floor(Math.random() * itens.length);
        const itemSorteado = itens[indiceSorteado];

        // Atualiza o texto da div com o item sorteado
        resultadoDiv.innerText = `Item sorteado: ${itemSorteado}`;
        
    }, 2000); // Aguardar 2 segundos para o sorteio
    
}

btn.addEventListener('click', sortear);