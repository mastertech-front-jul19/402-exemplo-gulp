/* A função embaralhar recebe como argumento uma lista qualquer (array)
 * e devolve a mesma lista, mas com os elementos aleatoriamente trocados.
 */
function embaralhar(lista) {
  let valor_temporario;
  let indice_aleatorio;

  for (let i = lista.length - 1; i !== 0; i--) {
    indice_aleatorio = Math.floor(Math.random() * i);

    valor_temporario = lista[i];
    lista[i] = lista[indice_aleatorio];
    lista[indice_aleatorio] = valor_temporario;
  }
  return lista;
}