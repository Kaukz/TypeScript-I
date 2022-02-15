import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesview = new NegociacoesView('#negociacoesView');
        this.imputData = document.querySelector('#data');
        this.imputQuantidade = document.querySelector('#quantidade');
        this.imputValor = document.querySelector('#valor');
        this.negociacoesview.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.crianegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.negociacoesview.update(this.negociacoes);
        this.limparFormulario();
    }
    crianegociacao() {
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
