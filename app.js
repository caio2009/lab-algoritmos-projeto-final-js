// --- Funcoes auxiliares ---

function getValuesFromForm(formId) {
  const values = {};
  const keys = [];

  const form = document.querySelector(`#${formId}`);
  const controls = ['input', 'select'];
  controls.forEach(control => {
    form.querySelectorAll(control).forEach(controlEl => {
      const keyAlreadExists = keys.find(key => key === controlEl.name);
      if (!keyAlreadExists) {
        if (control === 'input') {
          keys.push({
            name: controlEl.name,
            inputType: controlEl.type
          });
        } else {
          keys.push({ 
            name: controlEl.name,
            inputType: null
          });
        }
      }
    });
  });

  keys.sort((a, b) => a.name > b.name);
  keys.forEach(key => {
    if (key.inputType && key.inputType === 'radio') {
      values[key.name] = document.querySelector(`[name=${key.name}]:checked`).value;
    } else {
      values[key.name] = document.querySelector(`[name=${key.name}]`).value;
    }
  });

  return values;
}

function initFormsConfig() {
  const forms = document.querySelectorAll('form');
  forms.forEach(formEl => {
    formEl.addEventListener('submit', (e) => { e.preventDefault(); });
  });
}

function initInputsMask() {
  // Inputs do exercicio 1
  customMasks.onlyDigits([document.querySelector('#ex1NumeroInput')]);

  // Inputs do exercicio 2
  customMasks.decimalNumber([document.querySelector('#ex2ValorJantarInput')]);

  // Inputs do exercicio 3
  customMasks.onlyDigits([document.querySelector('#ex3QtdDiasInput')]);

  // Inputs do exercicio 4
  customMasks.onlyDigits([document.querySelector('#ex4IdadeInput')]);

  // Inputs do exercicio 5
  customMasks.decimalNumber([
    document.querySelector('#ex5Nota1Input'),
    document.querySelector('#ex5Nota2Input')
  ]);

  // Inputs do exercicio 6
  customMasks.decimalNumber([
    document.querySelector('#ex6AlturaInput'),
    document.querySelector('#ex6PesoInput')
  ]);

  // Inputs do exercicio 7
  customMasks.onlyDigits([document.querySelector('#ex7NumeroInput')]);

  // Inputs do exercicio 8
  customMasks.onlyDigits([
    document.querySelector('#ex8BaseInput'),
    document.querySelector('#ex8AlturaInput')
  ]);

  // Inputs do exercicio 9
  customMasks.onlyDigits([
    document.querySelector('#ex9AnosInput'),
    document.querySelector('#ex9MesesInput'),
    document.querySelector('#ex9DiasInput')
  ]);

  // Inputs do exercicio 10
  customMasks.onlyDigits([
    document.querySelector('#ex10NumeroTotalEleitoresInput'),
    document.querySelector('#ex10NumeroVotosBrancosInput'),
    document.querySelector('#ex10NumeroVotosNulosInput'),
    document.querySelector('#ex10NumeroVotosValidosInput')
  ]);

  // Inputs do exercicio 11
  customMasks.decimalNumber([
    document.querySelector('#ex11SalarioInput'),
    document.querySelector('#ex11PercentualReajusteInput')
  ]);

  // Inputs do exercicio 12
  customMasks.decimalNumber([document.querySelector('#ex12CustoFabricaInput')]);

  // Inputs do exercicio 13
  customMasks.decimalNumber([
    document.querySelector('#ex13SalarioFixoInput'),
    document.querySelector('#ex13ValorComissaoInput'),
    document.querySelector('#ex13ValorTotalVendasInput')
  ]);
  customMasks.onlyDigits([document.querySelector('#ex13NumeroCarrosVendidosInput')]);

  // Inputs do exercicio 14
  customMasks.onlyDigits([document.querySelector('#ex14NumeroInput')]);

  // Inputs do exercicio 15 
  customMasks.onlyDigits([document.querySelector('#ex15NumeroInput')]);

  // Inputs do exercicio 16
  customMasks.decimalNumber([document.querySelector('#ex16AlturaInput')]);

  // Inputs do exercicio 17
  customMasks.onlyDigits([document.querySelector('#ex17NumeroInput')]);
}


// --- Implementacao dos exercicios ---

function executarExercicio1() {
  const values = getValuesFromForm('ex1Form');

  const numero = Number(values.ex1Numero);
  const dobro = numero * 2;

  document.querySelector('#ex1ResultadoSpan').innerText = dobro;
}

function executarExercicio2() {
  const values = getValuesFromForm('ex2Form');

  const valorJantar = Number(values.ex2ValorJantar);
  const custoGarcom = valorJantar * 0.1;
  const valorTotal = valorJantar + custoGarcom;

  document.querySelector('#ex2ResultadoSpan').innerText = `R$ ${valorTotal.toFixed(2)}`;
}

function executarExercicio3() {
  const values = getValuesFromForm('ex3Form');

  const qtdDias = Number(values.ex3QtdDias);
  const qtdHoras = qtdDias * 24;

  document.querySelector('#ex3ResultadoSpan').innerText = `${qtdHoras} hora(s)`;
}

function executarExercicio4() {
  const values = getValuesFromForm('ex4Form');

  const idade = Number(values.ex4Idade);
  const qtdHoras = idade * 365 * 24;

  document.querySelector('#ex4ResultadoSpan').innerText = `${qtdHoras} hora(s)`;
}

function executarExercicio5() {
  const values = getValuesFromForm('ex5Form');

  const nota1 = Number(values.ex5Nota1);
  const nota2 = Number(values.ex5Nota2);
  const media = (nota1 + nota2) / 2;

  document.querySelector('#ex5ResultadoSpan').innerText = `Média = ${media.toFixed(2)}`;
}

function executarExercicio6() {
  const values = getValuesFromForm('ex6Form');

  const altura = Number(values.ex6Altura);
  const peso = Number(values.ex6Peso);
  const imc = peso / altura ** 2;
  let categoria = ''

  if (imc < 20.7) categoria = 'a baixo do peso';
  else if (imc < 26.5) categoria = 'peso ideal';
  else if (imc < 27.9) categoria = 'pouco acima do peso';
  else if (imc < 31.2) categoria = 'acima do peso';
  else categoria = 'obesidade';

  document.querySelector('#ex6ResultadoSpan').innerText = `IMC = ${imc.toFixed(2)} (${categoria.toUpperCase()})`;
}

function executarExercicio7() {
  const values = getValuesFromForm('ex7Form');

  const numero = Number(values.ex7Numero);
  const numeroAntecessor = numero - 1;

  document.querySelector('#ex7ResultadoSpan').innerText = `${numeroAntecessor}`;
}

function executarExercicio8() {
  const values = getValuesFromForm('ex8Form');

  const base = Number(values.ex8Base);
  const altura = Number(values.ex8Altura);
  const areaRetangulo = base * altura;

  document.querySelector('#ex8ResultadoSpan').innerText = `Área = ${areaRetangulo}`;
}

function executarExercicio9() {
  const values = getValuesFromForm('ex9Form');

  const anos = values.ex9Anos;
  const meses = values.ex9Meses;
  const dias = values.ex9Dias;
  const qtdDias = anos * 12 * 30 + meses * 30 + dias;
  const qtdHoras = qtdDias * 24;

  document.querySelector('#ex9ResultadoSpan').innerText = `${qtdHoras} hora(s)`;
}

function executarExercicio10() {
  const values = getValuesFromForm('ex10Form');

  const numeroTotalEleitores = Number(values.ex10NumeroTotalEleitores);
  const numeroVotosBrancos = Number(values.ex10NumeroVotosBrancos);
  const numeroVotosNulos = Number(values.ex10NumeroVotosNulos);
  const numeroVotosValidos = Number(values.ex10NumeroVotosValidos);

  const porcentagens = {
    votosBrancos: (numeroVotosBrancos / numeroTotalEleitores) * 100,
    votosNulos: (numeroVotosNulos / numeroTotalEleitores) * 100,
    votosValidos: (numeroVotosValidos / numeroTotalEleitores) * 100
  };

  document.querySelector('#ex10ResultadoSpan').innerHTML = `<b>Votos Brancos</b>: ${porcentagens.votosBrancos.toFixed(2)}%, <b>Votos Nulos</b>: ${porcentagens.votosNulos.toFixed(2)}%, <b>Votos Válidos</b>: ${porcentagens.votosValidos.toFixed(2)}%`;
}

function executarExercicio11() {
  const values = getValuesFromForm('ex11Form');

  const salario = Number(values.ex11Salario);
  const percentualReajuste = Number(values.ex11PercentualReajuste);
  const salarioReajustado = salario + salario * (percentualReajuste / 100);

  document.querySelector('#ex11ResultadoSpan').innerText = `Salário reajustado = R$ ${salarioReajustado.toFixed(2)}`;
}

function executarExercicio12() {
  const values = getValuesFromForm('ex12Form');

  const custoFabrica = Number(values.ex12CustoFabrica);
  const custoFinal = custoFabrica + (custoFabrica * 0.28) + (custoFabrica * 0.45);

  document.querySelector('#ex12ResultadoSpan').innerText = `Custo final = R$ ${custoFinal.toFixed(2)}`;
}

function executarExercicio13() {
  const values = getValuesFromForm('ex13Form');

  const salarioFixo = Number(values.ex13SalarioFixo);
  const valorComissao = Number(values.ex13ValorComissao);
  const numeroCarrosVendidos = Number(values.ex13NumeroCarrosVendidos);
  const valorTotalVendas = Number(values.ex13ValorTotalVendas);
  const salarioFinal = salarioFixo + (valorComissao * numeroCarrosVendidos) + (valorTotalVendas * 0.05);

  document.querySelector('#ex13ResultadoSpan').innerText = `Salário Final = R$ ${salarioFinal.toFixed(2)}`;
}

function executarExercicio14() {
  const values = getValuesFromForm('ex14Form');

  const numero = Number(values.ex14Numero);

  let p = null;
  let i = null;

  if (numero % 2 === 0) p = numero;
  else i = numero;

  document.querySelector('#ex14ResultadoSpan').innerHTML = `Valor da variável <b>p</b>: ${p}, Valor da variável <b>i</b>: ${i}`;
}

function executarExercicio15() {
  const values = getValuesFromForm('ex15Form');

  let numero = Number(values.ex15Numero);
  if (numero <= 100) numero = 0;

  document.querySelector('#ex15ResultadoSpan').innerText = `${numero}`;
}

function executarExercicio16() {
  const values = getValuesFromForm('ex16Form');

  const sexo = values.ex16Sexo;
  const altura = Number(values.ex16Altura);

  let pesoIdeal = 0;
  switch (sexo) {
    case 'masculino':
      pesoIdeal = (72.7 * altura) - 58;
      break;
    case 'feminino':
      pesoIdeal = (62.1 * altura) - 44.7;
      break;
    default:
      alert('Sexo inválido!');
      break;
  }

  document.querySelector('#ex16ResultadoSpan').innerText = `Peso ideal = ${pesoIdeal.toFixed(2)} kg`;
}

function executarExercicio17() {
  const values = getValuesFromForm('ex17Form');

  const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numero = values.ex17Numero;

  let resultadoSpanConteudo = '';
  multiplicadores.forEach((multiplicador, index) => {
    resultadoSpanConteudo += `<span>${numero} * ${multiplicador} = ${numero * multiplicador}</span>`;
    if (index < multiplicadores.length - 1) resultadoSpanConteudo += '<br>';
  });

  document.querySelector('#ex17ResultadoSpan').innerHTML = resultadoSpanConteudo;
}

// ---

initFormsConfig();
initInputsMask();
