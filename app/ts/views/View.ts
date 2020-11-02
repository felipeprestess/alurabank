import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T> {
    protected _element: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {
        this._element = $(seletor);
        this._escapar = escapar;
    }

   @logarTempoDeExecucao(true)
    update(model: T): void {
        let template = this.template(model);
        if(this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
        }
        this._element.html(this.template(model));
    }


    template(model: T): string {
        throw new Error('Deve ser implementado o método Template.');
    }
}
