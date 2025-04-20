function calcularFatorial(n) {
  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function gerarFibonacciAte(n) {
  const sequencia = [0];
  if (n === 0) return sequencia;

  let a = 0, b = 1;
  while (b <= n) {
    sequencia.push(b);
    const proximo = a + b;
    a = b;
    b = proximo;
  }
  return sequencia;
}

function analisarNumero(numero) {
  if (!Number.isInteger(numero) || numero < 0) {
    console.error("Por favor, insira um número inteiro positivo.");
    return;
  }

  const fatorial = calcularFatorial(numero);
  const fibonacci = gerarFibonacciAte(numero);

  console.log(`Número: ${numero}`);
  console.log(`Fatorial: ${fatorial}`);
  console.log(`Sequência de Fibonacci até ${numero}: [${fibonacci.join(", ")}]`);

const entrada = parseInt(prompt("Digite um número inteiro positivo:"), 10);
analisarNumero(entrada);
