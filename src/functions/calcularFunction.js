import { Financiamento } from "../classes/financiamento.js";
import {FinanciamentoCarencia} from "../classes/financiamentoCarencia.js"
import { clearTableBody } from "./clearTableBodyFunction.js";

const botaoCalcular = document.querySelector("#botaoCalcular");
const valorBem = document.querySelector("#valorBem");
const valorEntrada = document.querySelector("#valorEntrada");
const taxaJuros = document.querySelector("#taxaJuros");
const textoPrazo = document.querySelector("#prazo");
const carencia = document.querySelector("#carencia");
const carenciaTempo = document.querySelector("#carenciaTempo")



botaoCalcular.addEventListener("click", () => {
    clearTableBody();
    const valor = parseFloat(valorBem.value);
    const entrada = parseFloat(valorEntrada.value);
    const juros = parseFloat(taxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);

    let simulacao;

    if(carencia.checked) {
        const qtdCarencia = parseInt(carenciaTempo.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, juros, prazo, qtdCarencia);
    }else{
        simulacao = new Financiamento(valor, entrada, juros, prazo);
    }

    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();

});