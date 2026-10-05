const perguntas = [
    {
        pergunta: "Qual linguagem cria a ESTRUTURA de uma página web?",
        opcoes: ["CSS", "HTML", "JavaScript"],
        correta: 1,
        explicacao: "HTML (HyperText Markup Language) é a linguagem de marcação usada para criar a estrutura das páginas web. Ele define os elementos da página, como títulos, parágrafos, imagens, links e botões."
    },
    {
        pergunta: "Qual linguagem deixa a página BONITA?",
        opcoes: ["HTML", "CSS", "JavaScript"],
        correta: 1,
        explicacao: "CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas web. Ele define as cores, fontes, espaçamentos, tamanhos e layouts."
    },
    {
        pergunta: "Qual linguagem adiciona INTERATIVIDADE?",
        opcoes: ["HTML", "CSS", "JavaScript"],
        correta: 2,
        explicacao: "JavaScript é a linguagem de programação que roda no navegador e permite adicionar interatividade às páginas. Com JavaScript, você pode criar cliques, animações e validações."
    },
    {
        pergunta: "O que é uma tag HTML?",
        opcoes: ["Um comando CSS", "Um elemento da estrutura da página", "Uma função JavaScript"],
        correta: 1,
        explicacao: "Tag HTML é um elemento usado para marcar e estruturar o conteúdo da página. Exemplos: &lt;h1&gt; para título, &lt;p&gt; para parágrafo, &lt;img&gt; para imagem, &lt;a&gt; para link."
    },
    {
        pergunta: "Para que serve a tag &lt;img&gt;?",
        opcoes: ["Criar links", "Inserir imagens", "Criar parágrafos"],
        correta: 1,
        explicacao: "A tag &lt;img&gt; é usada para inserir imagens na página. Exemplo: &lt;img src=\"foto.jpg\" alt=\"Descrição\"&gt;. O atributo 'src' indica o caminho da imagem, e 'alt' é o texto alternativo."
    },
    {
        pergunta: "Para que serve a tag &lt;a&gt;?",
        opcoes: ["Criar links", "Inserir imagens", "Criar títulos"],
        correta: 0,
        explicacao: "A tag &lt;a&gt; é usada para criar links (hiperlinks). Exemplo: &lt;a href=\"https://google.com\"&gt;Google&lt;/a&gt;. O atributo 'href' indica o destino do link."
    },
    {
        pergunta: "O que é uma classe em CSS?",
        opcoes: ["Um identificador único", "Um grupo de elementos", "Uma função"],
        correta: 1,
        explicacao: "Classe em CSS é um grupo de elementos que compartilham o mesmo estilo. Usamos o ponto (.) para selecionar. Exemplo: .botao { background: pink; }."
    },
    {
        pergunta: "O que é um id em CSS?",
        opcoes: ["Um grupo de elementos", "Um identificador único", "Uma função"],
        correta: 1,
        explicacao: "ID em CSS é um identificador único para um elemento. Usamos a cerquilha (#) para selecionar. Exemplo: #titulo { color: red; }. Um id só pode ser usado UMA vez na página."
    },
    {
        pergunta: "O que é Flexbox?",
        opcoes: ["Uma linguagem", "Um modelo de layout CSS", "Uma função JavaScript"],
        correta: 1,
        explicacao: "Flexbox é um modelo de layout CSS que facilita a organização de elementos em linhas ou colunas. Usamos display: flex; no elemento pai. Ele permite alinhar, distribuir e ordenar elementos facilmente."
    },
    {
        pergunta: "O que é CSS Grid?",
        opcoes: ["Uma linguagem", "Um modelo de layout CSS", "Um framework"],
        correta: 1,
        explicacao: "CSS Grid é um modelo de layout CSS que permite criar grades (linhas e colunas) de forma fácil. Usamos display: grid;. Ele é ideal para layouts complexos, como galerias e dashboards."
    },
    {
        pergunta: "Para que serve o :hover em CSS?",
        opcoes: ["Criar animações", "Mudar o estilo quando o mouse passa", "Criar links"],
        correta: 1,
        explicacao: "O :hover é um pseudo-classe do CSS que aplica estilos quando o mouse passa sobre o elemento. Exemplo: button:hover { background: red; }. Muito usado para efeitos de interação."
    },
    {
        pergunta: "O que é responsividade?",
        opcoes: ["Um tipo de fonte", "Adaptar o layout a diferentes telas", "Uma animação"],
        correta: 1,
        explicacao: "Responsividade é a capacidade de uma página se adaptar a diferentes tamanhos de tela (celular, tablet, desktop). Usamos media queries no CSS. Exemplo: @media (max-width: 600px) { ... }."
    },
    {
        pergunta: "O que é uma media query?",
        opcoes: ["Uma função JavaScript", "Uma regra CSS para diferentes telas", "Uma tag HTML"],
        correta: 1,
        explicacao: "Media query é uma regra CSS que aplica estilos diferentes dependendo do tamanho da tela. Exemplo: @media (max-width: 600px) { body { font-size: 14px; } }. É essencial para responsividade."
    },
    {
        pergunta: "O que é JavaScript?",
        opcoes: ["Uma linguagem de marcação", "Uma linguagem de programação", "Um banco de dados"],
        correta: 1,
        explicacao: "JavaScript é uma linguagem de programação que roda no navegador. Ela permite adicionar interatividade, manipular o DOM, validar formulários, criar animações e muito mais."
    },
    {
        pergunta: "O que é o DOM?",
        opcoes: ["Um banco de dados", "A representação do HTML em JavaScript", "Uma linguagem"],
        correta: 1,
        explicacao: "DOM (Document Object Model) é a representação do HTML que o JavaScript pode manipular. Cada elemento HTML é um nó da árvore DOM. Com o DOM, podemos criar, modificar e remover elementos."
    },
    {
        pergunta: "Para que serve o document.getElementById()?",
        opcoes: ["Criar um elemento", "Buscar um elemento pelo id", "Remover um elemento"],
        correta: 1,
        explicacao: "document.getElementById() é usado para buscar um elemento HTML pelo seu id. Exemplo: document.getElementById(\"titulo\") busca o elemento com id=\"titulo\". Retorna o elemento ou null se não encontrar."
    },
    {
        pergunta: "Para que serve o addEventListener()?",
        opcoes: ["Criar um elemento", "Adicionar um evento a um elemento", "Remover um elemento"],
        correta: 1,
        explicacao: "addEventListener() é usado para adicionar um evento a um elemento. Exemplo: botao.addEventListener(\"click\", function() { ... }). Ele executa a função quando o evento acontece."
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        opcoes: ["Uma variável", "Um bloco de código reutilizável", "Um array"],
        correta: 1,
        explicacao: "Função é um bloco de código reutilizável que executa uma tarefa. Exemplo: function somar(a, b) { return a + b; }. Depois, é só chamar: somar(2, 3) retorna 5."
    },
    {
        pergunta: "O que é um array em JavaScript?",
        opcoes: ["Uma função", "Uma lista de valores", "Um objeto"],
        correta: 1,
        explicacao: "Array é uma lista de valores do mesmo tipo. Exemplo: let frutas = [\"Maçã\", \"Banana\", \"Uva\"];. Você pode acessar cada item pela posição: frutas[0] = \"Maçã\"."
    },
    {
        pergunta: "O que é um objeto em JavaScript?",
        opcoes: ["Uma lista de valores", "Uma coleção de propriedades", "Uma função"],
        correta: 1,
        explicacao: "Objeto é uma coleção de propriedades (chave: valor). Exemplo: let pessoa = { nome: \"João\", idade: 25 };. Você acessa as propriedades com ponto: pessoa.nome."
    },
    {
        pergunta: "O que é TypeScript?",
        opcoes: ["Um framework", "Um superset do JavaScript", "Um banco de dados"],
        correta: 1,
        explicacao: "TypeScript é um superset do JavaScript. Todo código JavaScript é também TypeScript válido, mas o TypeScript adiciona tipos. Os tipos ajudam a evitar erros antes mesmo de rodar o código."
    },
    {
        pergunta: "O que é uma interface em TypeScript?",
        opcoes: ["Uma classe", "Um molde para objetos", "Uma função"],
        correta: 1,
        explicacao: "Interface em TypeScript é um molde que define a forma de um objeto. Exemplo: interface Pessoa { nome: string; idade: number; }. Ela garante que o objeto tenha as propriedades corretas."
    },
    {
        pergunta: "O que é um type em TypeScript?",
        opcoes: ["Uma variável", "Um apelido para um tipo", "Uma função"],
        correta: 1,
        explicacao: "Type em TypeScript é um apelido para um tipo. Exemplo: type Id = string | number;. Ele serve para criar nomes mais claros para tipos complexos."
    },
    {
        pergunta: "O que é um union type em TypeScript?",
        opcoes: ["Um tipo que aceita vários tipos", "Uma função", "Uma classe"],
        correta: 0,
        explicacao: "Union type em TypeScript permite que uma variável aceite mais de um tipo. Exemplo: let id: string | number;. O símbolo | significa \"ou\"."
    },
    {
        pergunta: "O que é um framework front-end?",
        opcoes: ["Um banco de dados", "Uma ferramenta para construir interfaces", "Uma linguagem"],
        correta: 1,
        explicacao: "Framework front-end é uma ferramenta que facilita a construção de interfaces web. Exemplos: React, Vue, Angular. Eles fornecem estruturas prontas e recursos para criar aplicações mais rápido."
    },
    {
        pergunta: "O que é Git?",
        opcoes: ["Uma linguagem", "Um sistema de controle de versão", "Um framework"],
        correta: 1,
        explicacao: "Git é um sistema de controle de versão. Ele guarda o histórico de todas as alterações do código, permite voltar no tempo se algo der errado, e ajuda a trabalhar em equipe."
    },
    {
        pergunta: "O que é GitHub?",
        opcoes: ["Uma linguagem", "Uma plataforma para hospedar código", "Um framework"],
        correta: 1,
        explicacao: "GitHub é uma plataforma para hospedar código. Ele permite guardar seus projetos, compartilhar com outras pessoas, e colaborar em equipe. É como uma rede social para programadores."
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const telaInicial = document.getElementById("telaInicial");
const telaQuiz = document.getElementById("telaQuiz");
const btnComecar = document.getElementById("btnComecar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const elementoPergunta = document.getElementById("pergunta");
const elementoOpcoes = document.getElementById("opcoes");
const elementoResultado = document.getElementById("resultado");
const botaoProxima = document.getElementById("btnProxima");

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    
    elementoPergunta.innerHTML = pergunta.pergunta;
    elementoOpcoes.innerHTML = "";
    
    for (let i = 0; i < pergunta.opcoes.length; i++) {
        const botao = document.createElement("button");
        botao.innerHTML = pergunta.opcoes[i];
        
        botao.onclick = function() {
            verificarResposta(i);
        };
        
        elementoOpcoes.appendChild(botao);
    }
    
    elementoResultado.innerHTML = "";
    botaoProxima.style.display = "none";
    botaoProxima.disabled = false;
}

function verificarResposta(respostaEscolhida) {
    const pergunta = perguntas[perguntaAtual];
    
    if (respostaEscolhida === pergunta.correta) {
        elementoResultado.innerHTML = " Você acertou!";
        pontuacao = pontuacao + 10;
    } else {
        elementoResultado.innerHTML = " Você errou!<br><br> <strong>Explicação:</strong><br>" + pergunta.explicacao;
    }
    
    const botoesOpcoes = document.querySelectorAll("#opcoes button");
    for (let i = 0; i < botoesOpcoes.length; i++) {
        botoesOpcoes[i].disabled = true;
    }
    
    botaoProxima.style.display = "block";
    botaoProxima.disabled = false;
}

function proximaPergunta() {
    perguntaAtual = perguntaAtual + 1;
    
    if (perguntaAtual >= perguntas.length) {
        elementoPergunta.innerHTML = "🎀 Fim do Quiz! 🎀";
        elementoOpcoes.innerHTML = "";
        elementoResultado.innerHTML = "Sua pontuação: " + pontuacao + " pontos";
        botaoProxima.style.display = "none";
        btnJogarNovamente.style.display = "block";
    } else {
        mostrarPergunta();
    }
}

botaoProxima.onclick = function() {
    proximaPergunta();
};

btnComecar.onclick = function() {
    telaInicial.style.display = "none";
    telaQuiz.style.display = "block";
    mostrarPergunta();
};

btnJogarNovamente.onclick = function() {
    perguntaAtual = 0;
    pontuacao = 0;
    telaInicial.style.display = "block";
    telaQuiz.style.display = "none";
    btnJogarNovamente.style.display = "none";
};