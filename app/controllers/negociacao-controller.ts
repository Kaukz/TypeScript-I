import { Negociacao } from "../models/negociacao.js";

export class negociacaoController{
    private imputData: HTMLInputElement;
    private imputQuantidade: HTMLInputElement;
    private imputValor:HTMLInputElement;

    constructor(){
        this.imputData = document.querySelector('#data');
        this.imputQuantidade = document.querySelector('#quantidade');
        this.imputValor = document.querySelector('#valor');

    }
    adiciona(){
     const negociacao = new Negociacao(
         this.imputData.value,        
         this.imputQuantidade.value,
         this.imputValor.value

     );

     console.log(negociacao);

    }
}