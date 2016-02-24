/// <reference path="mz/mz.d.ts" />

mz.alias('views', module.getPath('./views/'));

@App.Template('@views/index.xml')
class App extends mz.app.PageCoordinator {
    constructor(){
        super({
            //templateSelector: '.app',
            pages: 'pages.json'
        });
    }
}

export var app = new App;