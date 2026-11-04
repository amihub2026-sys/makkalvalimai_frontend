// app — standalone component (HTML and CSS kept in adjacent files).
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
export class AppComponent {
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterOutlet], styles: ["\n\n\n[_nghost-%COMP%] { display: block; min-width: 0; }", "\n\n@media (max-width: 640px) {\n  [_nghost-%COMP%] { width: 100%; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [RouterOutlet], template: "<router-outlet />\n", styles: ["/* app page \u2014 edit this file to change this page without touching others.\n   Layout tokens (.glass, .panel, .container, .btn) live in src/styles.css. */\n:host { display: block; min-width: 0; }\n", "/* Responsive rules for app; isolated from common/desktop CSS. */\n@media (max-width: 640px) {\n  :host { width: 100%; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app-root/app.component.ts", lineNumber: 4 }); })();
//# sourceMappingURL=app.component.js.map