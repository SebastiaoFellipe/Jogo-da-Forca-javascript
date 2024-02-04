// declaração das contantes e variaveis usadas no código
const palavras = {
    "Animais": [
        "Leão",
        "Leoa",
        "Elefante",
        "Girafa",
        "Tigre",
        "Zebra",
        "Gato",
        "Cachorro",
        "Baleia-azul",
        "Baleia-orca",
        "Baleia-cachacole",
        "Hipopótamo",
        "Cascavel",
        "Jiboia",
        "Sucuri",
        "Rato",
        "Tubarão-branco",
        "Tubarão-tigre",
        "Tubarão-martelo",
        "Papagaio",
        "Formiga",
        "Macaco",
        "Pinguim",
        "Urso-polar",
        "Urso-negro",
        "Urso-pardo",
        "Urso-panda",
        "Coruja",
        "Lagarto",
        "Leopardo",
        "Coelho",
        "Arraia",
        "Peixe-palhaço",
        "Peixe-boi",
        "Peixe-pedra",
        "Atum",
        "Linguado",
        "Pacu",
        "Tilápia",
        "Pirarucu",
        "Bacalhau",
        "Camarão",
        "Aranha-caranguejeira",
        "Aranha-marrom",
        "Viúva-negra",
        "Esquilo",
        "Tartaruga-marina",
        "Tartaruga-oliva",
        "Tartaruga-cabeçuda",
        "Avestruz",
        "Ouriço",
        "Morcego",
        "Caranguejo",
        "Camelo",
        "Polvo",
        "Gorila",
        "Cavalo",
        "Ovelha",
        "Jacaré",
        "Crocodilo",
        "Ornitorrinco",
        "Puma",
        "Golfinho",
        "Rinoceronte",
        "Escorpião",
        "Hiena",
        "Vaca",
        "Abelha",
        "Caracol",
        "Pato",
        "Dromedário",
        "Porco",
        "Lince",
        "Texugo",
        "Canguru",
        "Lontra",
        "Guaxinim",
        "Morsa",
        "Búfalo",
        "Arara-azul",
        "Arara-canindé",
        "Foca",
        "Quati",
        "Lêmure",
        "Lobo",
        "Tamanduá",
        "Tatu-bola",
        "Tatu-peba",
        "Guepardo",
        "Castor",
        "Águia-real",
        "Suricato",
        "Dourado",
        "Caracal",
        "Panda-vermelho",
        "Coala",
        "Tucano",
        "Gavião-real",
        "Lula-gigante",
        "Veado"
    ],
    "Comidas": [
        "arroz",
        "feijão",
        "macarrão",
        "carne",
        "picanha",
        "strogonoff",
        "peixe-frito",
        "peixe-cozido",
        "ovo-frito",
        "pão-francês",
        "sopa",
        "bolo-de-chocolate",
        "bolo-de-cenoura",
        "bolo-de-leite",
        "queijo-coalho",
        "uva-verde",
        "leite",
        "chá-verde",
        "café",
        "batata-doce",
        "batata inglesa",
        "maçã",
        "melão",
        "salada",
        "pizza",
        "banana",
        "abacaxi",
        "laranja",
        "cenoura",
        "cebola",
        "abóbora",
        "morango",
        "melancia",
        "kiwi",
        "limão",
        "coco",
        "manga",
        "pera",
        "amendoim",
        "amêndoa",
        "castanha",
        "framboesa",
        "blueberry",
        "abacate",
        "repolho",
        "brócolis",
        "alface",
        "espinafre",
        "beterraba",
        "couve",
        "atum",
        "sushi",
        "espaguete",
        "lasanha",
        "panqueca",
        "hamburguer",
        "sanduíche",
        "taco",
        "burrito",
        "sorvete",
        "gelatina",
        "biscoito",
        "bolacha",
        "pudim",
        "pipoca",
        "caldo",
        "guisado",
        "ratatouille",
        "risoto",
        "frango",
        "patê",
        "pavê",
        "torta de maçã",
        "torta de limão",
        "empada",
        "esfirra",
        "quibe",
        "cuscuz",
        "farofa",
        "empadão",
        "coxinha",
        "brigadeiro",
        "pão de queijo",
        "acarajé",
        "vatapá",
        "moqueca",
        "feijoada",
        "pastel",
        "canjica",
        "pamonha",
        "doce de leite",
        "cocada",
        "crepe",
        "tapioca",
        "rabada",
        "alfinin",
        "churrasco",
        "linguiça",
        "mandioca",
        "calabresa"
    ],
    "Capitais do Brasil": [
        "Rio Branco",
        "Maceió",
        "Macapá",
        "Manaus",
        "Salvador",
        "Fortaleza",
        "Brasília",
        "Vitória",
        "Goiânia",
        "São Luís",
        "Cuiabá",
        "Campo Grande",
        "Belo Horizonte",
        "Belém",
        "João Pessoa",
        "Curitiba",
        "Recife",
        "Teresina",
        "Rio de Janeiro",
        "Natal",
        "Porto Alegre",
        "Porto Velho",
        "Boa Vista",
        "Florianópolis",
        "São Paulo",
        "Aracaju",
        "Palmas"
    ]
}
let gameStatus = false
let secretWord = []
let tries = 6
let categorie = ""
let usedLetters = []
const categorieTextHTML = document.getElementById("categorie-text")
const triesTextHTML = document.getElementById("tries-text")
const secretWordHTML = document.getElementById("secret-word")
const head = document.querySelector("#hangman #head")
const body = document.querySelector("#hangman #body")
const leftArm = document.querySelector("#hangman #left-arm")
const rightArm = document.querySelector("#hangman #right-arm")
const leftLeg = document.querySelector("#hangman #left-leg")
const rightLeg = document.querySelector("#hangman #right-leg")
const keyboardLetters = document.querySelectorAll(".btn-letter")
const overlay = document.querySelector("#overlay")
const modalRules = document.querySelector("#modal-rules")
const modalCategorie = document.querySelector("#modal-categorie")
const modalMessage = document.querySelector("#modal-message")

// função para verificar se o usuário escolheu uma categoria
function verifyCategorie() {
    let categories = document.getElementsByName('categorie');
    for (const radio of categories) {
        if (radio.checked) {
            return radio.value
        }
    }
    return false
}
// função para escolher uma palavra aleatoria dentro da categoria escolhida
function chooseSecretWord(categorie) {
    // verifica se a categoria existe no objeto e retorna uma palavra aleatoria daquela categoria, se não existir retorna uma palavra aleatoria dentre todas as categorias
    if (palavras.hasOwnProperty(categorie)) {
        let radomIndex = Math.floor(Math.random() * palavras[categorie].length)
        return palavras[categorie][radomIndex].toUpperCase().split('')
    } else {
        let numCategories = Object.keys(palavras).length
        let randomCategorie = Math.floor(Math.random() * numCategories)
        categorie = Object.keys(palavras)[randomCategorie]
        let radomIndex = Math.floor(Math.random() * palavras[categorie].length)
        return palavras[categorie][radomIndex].toUpperCase().split('')
    }
}
// função para mostrar os tracinhos de palavra secreta
function showSecretWord(secretWord){
    secretWordHTML.innerHTML = ""
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] == ' ') {
            secretWordHTML.innerHTML += '<span id="empty-space"></span>'
        } else if (secretWord[i] == '-') {
            secretWordHTML.innerHTML += '<span>―</span>'
        } else {
            secretWordHTML.innerHTML += '<span></span>'
        }
    }
}
// função para escrever a palavra secreta na tela quando uma letra for clicada
function writeSecretWord(secretWord, userSecretWord){
    let word = removeSpecialCharacters(secretWord)
    let spanSecretWordHTML =  document.querySelectorAll("#secret-word span")
    for (let i = 0; i < secretWord.length; i++) {
        for (let j = 0; j < usedLetters.length; j++) {
            if (word[i] == usedLetters[j]) {
                spanSecretWordHTML[i].innerHTML = secretWord[i]
                userSecretWord[i] = secretWord[i]
            }
        }  
    }
}
// função para remover os acentos das palavras para facilitar a comparação
function removeSpecialCharacters(word) {
    let str = word.join() // transforma em string separada por virgula
    let wordStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g,'') // remove os caracteres especiais
    return wordStr.split(',') // retorna a string transformada em array com base no delimitador
}

// função para verificar o numero de tentativas e desenhar a pessoa na tela
function verifyTries(){
    switch (tries) {
        case 5:
            head.classList.remove('hangman-invisible')
            break;
        case 4:
            body.classList.remove('hangman-invisible')
            break;
        case 3:
            leftArm.classList.remove('hangman-invisible') 
            break;
        case 2:
            rightArm.classList.remove('hangman-invisible') 
            break;
        case 1:
            leftLeg.classList.remove('hangman-invisible')
            break;
        case 0:
            rightLeg.classList.remove('hangman-invisible')
            break;
        default:
            break;
    }
}
// função para comparar os valores de arrays
function compareArrays(secretWord, userSecretWord) {
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] !== userSecretWord[i]) {
        return false;
      }
    }
    return true;
}
// função para verificar se o usuario ganhou ou perdeu
function verifyGame(secretWord, userSecretWord){
    let messageImg = document.getElementById("message-img")
    let messageTitle = document.getElementById("message-title")
    if (tries==0) {
        gameStatus = false
        messageImg.src = "img/sad_emoji.png"
        messageTitle.innerHTML = "Tude bem, o importante é não desistir!"
        openMessage()
    } else if(compareArrays(secretWord, userSecretWord)) {
        gameStatus = false
        messageImg.src = 'img/trophy.jpg'
        messageTitle.innerHTML = 'Parabéns, você ganhou!'
        openMessage()
    }
}

// funções para fechar todos os modals
function closeModal() {
    if (gameStatus) {
        overlay.style.display = "none";
        modalRules.style.display = "none";
        modalCategorie.style.display = "none";
        modalMessage.style.display = "none";
    }
}
// função para abrir modal de regras
function openRules() {
    overlay.style.display = "block";
    modalRules.style.display = "block";
}
// função para abrir modal de categorias
function openCategorie() {
    overlay.style.display = "block";
    modalCategorie.style.display = "block";
}
// função para abrir modal de messagem quando acabar o jogo
function openMessage() {
    overlay.style.display = "block";
    modalMessage.style.display = "block";
}
// função principal com a lógica do jogo
function play() {
    categorie = ""
    openCategorie()
    categorie = verifyCategorie()
    if (!categorie) {
        let errorMessageCategorie = document.getElementById("error-categorie")
        errorMessageCategorie.style.display = "block"
    } else {
        gameStatus = true
        closeModal()
        secretWord = chooseSecretWord(categorie) // secretWord recebe um array da palavra escolhida aleatoriamente
        let userSecretWord = Array(secretWord.length)
        // prepara a palavra que o usuario vai digitar para comparar com a palavra secreta colocando espaços vazios e hifens
        for (let i = 0; i < userSecretWord.length; i++) {
            if (secretWord[i]==' ') {
                userSecretWord[i]=' '
            } else if(secretWord[i]=='-') {
                userSecretWord[i]='-'
            }
        }
        // mostra na tela a categoria escolhida e 6 tentativas iniciais
        categorieTextHTML.innerHTML = categorie
        triesTextHTML.innerHTML = 6
        // mostra na tela os tracinhos da palavra secreta 
        showSecretWord(secretWord)
        for (const letter of keyboardLetters) {
            letter.addEventListener("click", function () {
                if(!usedLetters.includes(letter.value)){
                    usedLetters.push(letter.value) // adiciona as letras clicadas a um array de letras usadas
                }
                letter.classList.add('disabledtLetter')
                letter.disabled = true
                if(secretWord.includes(letter.value)){
                    writeSecretWord(secretWord, userSecretWord)
                } else {
                    triesTextHTML.innerHTML = --tries
                    verifyTries()
                }
                verifyGame(secretWord, userSecretWord)
            })
        }
    }
}
function playAgain() {
    location.reload()
}