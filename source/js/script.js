





/* Uma vez definidas as funções, vamos definir as variáveis que serão usadas
 * por elas:
 * - cartas: a lista de todas as cartas que estão no HTML.
 * - cartaUm e cartaDois: representam qual a primeira e a segunda carta que
 *    foram abertas em cada jogada.
 * - imagensSalvas: lista das imagens que estão na pasta de imagens.
 */
let cartas = document.querySelectorAll(".carta");

let cartaUm;
let cartaDois;

let imagensSalvas = ["bretta.png", "cornifer.png", "hornet.png", "king.png", "knight.png", "quirrel.png", "vessel.png", "zote.png"];

/* Para usar as imagens no jogo, criamos uma nova lista com duas cópias das
 * imagens salvas, ligadas com o método concat. Depois, usamos a função
 * embaralhar para misturar as imagens.
 */
let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

/* Para iniciar o jogo, abrimos todas as cartas. Contamos um tempo de 3
 * segundos e iniciamos uma nova jogada.
 */
for (carta of cartas){
  abrir(carta);
}

setTimeout(function () {
  iniciarJogada();
}, 3000);
