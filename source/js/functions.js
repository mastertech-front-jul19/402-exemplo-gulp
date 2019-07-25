/* A função de fechar recebe uma carta, define a imagem padrão de escondido
 * para a carta e faz com que ela possa ser clicada.
 */
function fechar(carta){
  carta.style.backgroundImage = "url('imagens/skull.jpg')"
  carta.onclick = processarClique;
}

/* A função abrir recebe uma carta, mostra a imagem correspondente ao ID
 * da carta e faz com que ela não possa ser clicada (visto que está aberta).
 */
function abrir(carta){
  carta.style.backgroundImage = `url('imagens/${imagens[Number(carta.id)]}')`;
  carta.onclick = null;
}

/* A função travarCliques faz com que nenhuma das cartas do jogo tenha
 * funcionalidade quando clicada. 
 */
function travarCliques(){
  for(let carta of cartas){
      carta.onclick = null;
  }
}

/* A função destravar cliques fecha todas as cartas que não estejam marcadas
 * como corretas. Uma carta só tem a classe "correta" quando já foi descoberta
 * junto com o seu par e, portanto, não precisa ser mais fechada e nem receber
 * a função de clique.
 */
function destravarCliques(){
  for(let carta of cartas){
      if(!carta.classList.contains("correta")){
        fechar(carta);
      }
  }
}
/* A função processar cliques é uma função de evento que processa o que
 * acontece quando alguém clica em uma carta. Primeiro ela abre a carta.
 * depois, verifica se existe uma cartaUm aberta. Se não existe, é porque
 * a carta atual é a primeira carta da jogada. Se existe, é porque é a
 * segunda carta da jogada: nesse caso, a função trava os cliques em qualquer
 * carta até que a comparação seja feita.
 */
function processarClique(event) {
  abrir(event.target);
  if (cartaUm) {
    cartaDois = event.target;
    travarCliques();
    verificarIguais();
  }
  else {
    cartaUm = event.target;
  }
}

/* A função verificarIguais é chamada somente quando a segunda carta é virada.
 * comparando os backgrounds, conseguimos verificar se as cartas viradas possuem
 * o mesmo background ou não. 
 * Se forem diferentes, conta-se um timeout de 1 segundo
 * (para que o usuario possa ver a segunda carta que virou), e então a função fecha
 * as duas cartas e inicia uma nova jogada. 
 * Se forem iguais, a função adiciona a classe "correta" nas cartas, mantendo-as
 * abertas, e iniciando uma nova jogada.
 */
function verificarIguais(){
  if (cartaUm.style.backgroundImage !== cartaDois.style.backgroundImage) {
    setTimeout(function(){
      fechar(cartaUm);
      fechar(cartaDois);
      iniciarJogada();
    }, 1000);
  }
  else{
    cartaUm.classList.add("correta");
    cartaDois.classList.add("correta");
    iniciarJogada();
  }
}

/* A função que marca o início de cada jogada define que nenhuma carta está
 * virada (nem a cartaUm nem a cartaDois) e destrava os cliques para todas as cartas que ainda não estão corretas, ou seja, ainda não foram encontradas.
 */
function iniciarJogada(){
  cartaUm = null;
  cartaDois = null;
  destravarCliques();
}