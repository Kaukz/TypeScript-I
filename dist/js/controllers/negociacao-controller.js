import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.imputData = document.querySelector('#data');
        this.imputQuantidade = document.querySelector('#quantidade');
        this.imputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.crianegociação();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    crianegociação() {
        const exp = /-/g;
        const date = new Date(this.imputData.value.replace(exp, ','));
        const quantidade = parseInt(this.imputQuantidade.value);
        const valor = parseFloat(this.imputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.imputData.value = '';
        this.imputQuantidade.value = '';
        this.imputValor.value = '';
        this.imputData.focus();
    }
}
