var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var FileEntryComponent = (function (_super) {
        __extends(FileEntryComponent, _super);
        function FileEntryComponent() {
            _super.apply(this, arguments);
        }
        FileEntryComponent = __decorate([
            FileEntryComponent.Template("\n<li>\n    {scope.name}\n    <mz-repeat list=\"{scope.nodes}\" tag=\"ul\">\n        <file-entry scope=\"{scope}\" />\n    </mz-repeat>\n</li>\n"),
            FileEntryComponent.RegisterComponent('file-entry'),
            FileEntryComponent.ConfigureUnwrapped, 
            __metadata('design:paramtypes', [])
        ], FileEntryComponent);
        return FileEntryComponent;
    }(mz.Widget));
    var AboutPage = (function (_super) {
        __extends(AboutPage, _super);
        function AboutPage() {
            _super.apply(this, arguments);
            this.fileTree = [
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
            ];
        }
        __decorate([
            AboutPage.proxy, 
            __metadata('design:type', Array)
        ], AboutPage.prototype, "fileTree");
        AboutPage = __decorate([
            AboutPage.Template('@views/modules/about.xml'), 
            __metadata('design:paramtypes', [])
        ], AboutPage);
        return AboutPage;
    }(mz.app.Page));
    var SyntaxHighlighter = (function (_super) {
        __extends(SyntaxHighlighter, _super);
        function SyntaxHighlighter() {
            _super.apply(this, arguments);
        }
        SyntaxHighlighter.prototype.changed = function (value) {
            var _this = this;
            $.get(value, function (data) {
                _this.widget.rootNode.textContent = data.toString();
                requestAnimationFrame(function () { return hljs.highlightBlock(_this.widget.rootNode); });
            }, 'text');
        };
        SyntaxHighlighter = __decorate([
            mz.AttributeDirective.Register('syntax-from'), 
            __metadata('design:paramtypes', [])
        ], SyntaxHighlighter);
        return SyntaxHighlighter;
    }(mz.AttributeDirective));
    return AboutPage;
});
