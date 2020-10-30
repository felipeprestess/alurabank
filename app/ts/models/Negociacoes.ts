import { Negociacao } from './Negociacao';
import { logarTempoDeExecucao } from '../helpers/decorators/index'; 

export class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    @logarTempoDeExecucao()
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    @logarTempoDeExecucao()
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}