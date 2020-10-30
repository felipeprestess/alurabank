System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = false) {
                    this._element = $(seletor);
                    this._escapar = escapar;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escapar) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    }
                    this._element.html(this.template(model));
                }
                template(model) {
                    throw new Error('Deve ser implementado o método Template.');
                }
            };
            exports_1("View", View);
        }
    };
});
