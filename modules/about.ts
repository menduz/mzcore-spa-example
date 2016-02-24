/// <reference path="../mz/mz.d.ts" />


interface IFilesystemEntry {
    name: string;
    nodes?: IFilesystemEntry[];
}

@FileEntryComponent.Template(`
<li>
    {scope.name}
    <mz-repeat list="{scope.nodes}" tag="ul">
        <file-entry scope="{scope}" />
    </mz-repeat>
</li>
`)
@FileEntryComponent.RegisterComponent('file-entry')
@FileEntryComponent.ConfigureUnwrapped
class FileEntryComponent extends mz.Widget { }


@AboutPage.Template('@views/modules/about.xml')
class AboutPage extends mz.app.Page {

    @AboutPage.proxy
    fileTree: IFilesystemEntry[] = [
        {
            name: "/",
            nodes: [
                {
                    name: "/modules",
                    nodes: [
                        { name: "/about.ts" },
                        { name: "/index.ts" },
                        { name: "/login.ts" }
                    ]
                }, {
                    name: "/views",
                    nodes: [
                        { name: "/about.xml" },
                        { name: "/index.xml" },
                        { name: "/login.xml" }
                    ]
                }, 
                { name: "/index.html" },
                { name: "/index.ts" },
                { name: "/pages.json" },
                { name: "/tsconfig.json" }
            ]
        }
    ]
}


declare var hljs;


@mz.AttributeDirective.Register('syntax-from')
class SyntaxHighlighter extends mz.AttributeDirective {
    changed(value){
        $.get(value,data => {
            this.widget.rootNode.textContent = data.toString();
            requestAnimationFrame(() => hljs.highlightBlock(this.widget.rootNode));
        }, 'text');
    }
}


export = AboutPage; 