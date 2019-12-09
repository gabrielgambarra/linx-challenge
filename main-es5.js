(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav #sidenav>\n        <div class=\"sidenav-container\">\n            <p>\n                <a (click)=\"sidenav.close()\" mat-button href=\"https://www.linx.com.br/sobre-a-linx/\" target=\"_blank\">\n                    <span>Conheça a Linx</span>\n                </a>\n            </p>\n            <p>\n                <a (click)=\"sidenav.close()\" mat-button>\n                    <span>Ajude o algorítimo</span>\n                </a>\n            </p>\n            <p>\n                <a (click)=\"sidenav.close()\" mat-button href=\"#products\">\n                    <span>Seus produtos</span>\n                </a>\n            </p>\n            <p>\n                <a (click)=\"sidenav.close()\" mat-button href=\"#newsletter\">\n                    <span>Compartilhe</span>\n                </a>\n            </p>\n        </div>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <button *ngIf=\"isMobile\" class=\"nav-button\" mat-mini-fab (click)=\"sidenav.open()\">\n            <mat-icon>sort</mat-icon>\n        </button>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"header\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-header\">\n                <p class=\"intro\">Uma seleção de produtos</p>\n                <p class=\"big-text\">especial para você</p>\n                <p class=\"resume\">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!\n                </p>\n            </div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"nav-buttons\" *ngIf=\"!isMobile\">\n                <a mat-stroked-button href=\"https://www.linx.com.br/sobre-a-linx/\" target=\"_blank\">\n                    <span>Conheça a Linx</span>\n                </a>\n                <div fxFlex=\"5\"></div>\n                <a mat-stroked-button>\n                    <span>Ajude o algorítimo</span>\n                </a>\n                <div fxFlex=\"5\"></div>\n                <a mat-stroked-button href=\"#products\">\n                    <span>Seus produtos</span>\n                </a>\n                <div fxFlex=\"5\"></div>\n                <a mat-stroked-button href=\"#newsletter\">\n                    <span>Compartilhe</span>\n                </a>\n            </div>\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center none\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"footer\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <small>Testando suas habilidades em HTML, CSS e JS.</small>\n                <small>Linx Impulse</small>\n                <small>2019</small>\n            </div>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web/main/main/main.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web/main/main/main.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"main-container\">\n    <app-products-list></app-products-list>\n    \n    <app-newsletter-form></app-newsletter-form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web/newsletter/newsletter-form/newsletter-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web/newsletter/newsletter-form/newsletter-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"newsletter\" fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"newsletter-container\">\n    <h3 class=\"section-title\" fxLayoutAlign=\"center\">Compartilhe a novidade</h3>\n\n    <p fxLayoutAlign=\"center\">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>\n\n    <div [fxLayout]=\"isMobile ? 'column' : 'row'\" fxLayoutAlign=\"center center\" class=\"form\">\n        <mat-form-field fxFlex=\"45\" appearance=\"outline\" floatLabel=\"always\">\n            <mat-label>Nome do seu amigo</mat-label>\n            <input matInput [formControl]=\"name\">\n        </mat-form-field>\n        <div *ngIf=\"!isMobile\" fxFlex=\"10\"></div>\n        <mat-form-field fxFlex=\"45\" appearance=\"outline\" floatLabel=\"always\">\n            <mat-label>E-mail</mat-label>\n            <input matInput type=\"email\" ngModel [formControl]=\"email\" [pattern]=\"emailPattern\">\n\n            <mat-error *ngIf=\"email.errors?.pattern\">\n                Email inválido\n            </mat-error>\n        </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" class=\"send-button\">\n        <button mat-stroked-button (click)=\"send()\">Enviar agora</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web/products/product-item/product-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web/products/product-item/product-item.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"item-container\">\n    <div class=\"photo\">\n        <img [src]=\"getImageURL()\">\n    </div>\n    <div class=\"product-info\">\n        <h3 class=\"product-name\">{{product.name}}</h3>\n\n        <p class=\"description\">{{product.description}}</p>\n\n        <div class=\"price\">\n            <small>De: {{product.oldPrice | currency: 'BRL'}}</small>\n            <h3>Por: {{product.price | currency: 'BRL'}}</h3>\n            <small>ou {{product.installments.count}}x de {{product.installments.value | currency: 'BRL'}}</small>\n        </div>\n    </div>\n    <div class=\"buy-section\">\n        <button mat-stroked-button>Comprar</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web/products/products-list/products-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web/products/products-list/products-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\"></div>\n<h3 class=\"section-title\" fxLayoutAlign=\"center\">Sua seleção especial</h3>\n<div class=\"products-container\">\n    <app-product-item [product]=\"product\" *ngFor=\"let product of products.products\"></app-product-item>\n\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" class=\"load-more-products-button\">\n        <button mat-stroked-button (click)=\"loadMoreProducts()\">Ainda mais produtos aqui!</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container mat-sidenav-content .header {\n  height: 40%;\n  background: #707070 0% 0% no-repeat padding-box;\n  border: 1px solid #707070;\n  opacity: 1;\n  width: 100%;\n  padding: 5%;\n}\nmat-sidenav-container mat-sidenav-content .header .text-header p {\n  color: #ffffff;\n  font-family: Regular 20px/24px Helvetica Neue;\n}\nmat-sidenav-container mat-sidenav-content .header .text-header p.intro {\n  font-size: 20px;\n}\nmat-sidenav-container mat-sidenav-content .header .text-header p.big-text {\n  font-size: 40px;\n}\nmat-sidenav-container mat-sidenav-content .header .text-header p.resume {\n  padding-top: 2%;\n  font-size: 18px;\n}\nmat-sidenav-container mat-sidenav-content .header .nav-buttons {\n  width: 65%;\n  margin: 4% auto 0 auto;\n}\nmat-sidenav-container mat-sidenav-content .header .nav-buttons a {\n  color: #888888;\n  background-color: #ffffff;\n  border: 1px solid #707070;\n  border-radius: 4px;\n  width: 145px;\n}\nmat-sidenav-container mat-sidenav-content .footer {\n  height: 15%;\n  background-color: #707070;\n  border: 1px solid #707070;\n  opacity: 1;\n  width: 100%;\n  bottom: 0;\n  padding: 4%;\n}\nmat-sidenav-container mat-sidenav-content .footer small {\n  font-family: Regular 20px/24px Helvetica Neue;\n  color: #ffffff;\n}\n@media only screen and (max-width: 700px) {\n  mat-sidenav-container mat-sidenav {\n    width: 50%;\n    color: #888888;\n    position: fixed;\n  }\n  mat-sidenav-container mat-sidenav .sidenav-container {\n    margin-top: 25%;\n    position: absolute;\n    width: 100%;\n  }\n  mat-sidenav-container mat-sidenav p {\n    margin: 15% 0;\n  }\n  mat-sidenav-container mat-sidenav p a {\n    width: 100%;\n    border-radius: unset;\n  }\n  mat-sidenav-container mat-sidenav-content .nav-button {\n    background-color: #707070;\n    box-shadow: unset;\n    position: fixed;\n    z-index: 2;\n    margin: 3%;\n  }\n  mat-sidenav-container mat-sidenav-content .header {\n    height: 50%;\n    padding: 15% 0;\n  }\n  mat-sidenav-container mat-sidenav-content .header .text-header p.intro {\n    font-size: 18px;\n  }\n  mat-sidenav-container mat-sidenav-content .header .text-header p.big-text {\n    font-size: 30px;\n  }\n  mat-sidenav-container mat-sidenav-content .header .text-header p.resume {\n    text-align: center;\n    font-size: 15px;\n    padding: 10% 0;\n  }\n  mat-sidenav-container mat-sidenav-content .footer {\n    position: relative;\n  }\n  mat-sidenav-container mat-sidenav-content .footer small {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvw4FyZWEgZGUgVHJhYmFsaG8vRXN0dWRvcy9saW54LWNoYWxsZW5nZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNETjtBRElRO0VBQ0UsY0FBQTtFQUNBLDZDQUFBO0FDRlY7QURJVTtFQUNFLGVBQUE7QUNGWjtBREtVO0VBQ0UsZUFBQTtBQ0haO0FETVU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0paO0FEUU07RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUNOUjtBRFFRO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOVjtBRFdJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDVE47QURXTTtFQUNFLDZDQUFBO0VBQ0EsY0FBQTtBQ1RSO0FEZUE7RUFFSTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ2JKO0VEZUk7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDYk47RURnQkk7SUFDRSxhQUFBO0VDZE47RURnQk07SUFDRSxXQUFBO0lBQ0Esb0JBQUE7RUNkUjtFRG1CSTtJQUNFLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUNqQk47RURtQkk7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQ2pCTjtFRG9CVTtJQUNFLGVBQUE7RUNsQlo7RURxQlU7SUFDRSxlQUFBO0VDbkJaO0VEc0JVO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQ3BCWjtFRDBCSTtJQUNFLGtCQUFBO0VDeEJOO0VEMEJNO0lBQ0UsZUFBQTtFQ3hCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgLmhlYWRlciB7XG4gICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM3MDcwNzAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDUlO1xuXG4gICAgICAudGV4dC1oZWFkZXIge1xuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmb250LWZhbWlseTogUmVndWxhciAyMHB4LzI0cHggSGVsdmV0aWNhIE5ldWU7XG5cbiAgICAgICAgICAmLmludHJvIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmJpZy10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnJlc3VtZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubmF2LWJ1dHRvbnMge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IDQlIGF1dG8gMCBhdXRvO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDE0NXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogNCU7XG5cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgMjBweC8yNHB4IEhlbHZldGljYSBOZXVlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICBtYXQtc2lkZW5hdi1jb250YWluZXIge1xuICAgIG1hdC1zaWRlbmF2IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgICAgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxNSUgMDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICAgIC5uYXYtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgbWFyZ2luOiAzJTtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTUlIDA7XG4gICAgICAgIC50ZXh0LWhlYWRlciB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICAmLmludHJvIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmJpZy10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnJlc3VtZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJhY2tncm91bmQ6ICM3MDcwNzAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAuaGVhZGVyIC50ZXh0LWhlYWRlciBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBSZWd1bGFyIDIwcHgvMjRweCBIZWx2ZXRpY2EgTmV1ZTtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5oZWFkZXIgLnRleHQtaGVhZGVyIHAuaW50cm8ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAuaGVhZGVyIC50ZXh0LWhlYWRlciBwLmJpZy10ZXh0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmhlYWRlciAudGV4dC1oZWFkZXIgcC5yZXN1bWUge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5oZWFkZXIgLm5hdi1idXR0b25zIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiA0JSBhdXRvIDAgYXV0bztcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5oZWFkZXIgLm5hdi1idXR0b25zIGEge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTQ1cHg7XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAuZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDQlO1xufVxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmZvb3RlciBzbWFsbCB7XG4gIGZvbnQtZmFtaWx5OiBSZWd1bGFyIDIwcHgvMjRweCBIZWx2ZXRpY2EgTmV1ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICBtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiBwIHtcbiAgICBtYXJnaW46IDE1JSAwO1xuICB9XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiBwIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICB9XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5uYXYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbjogMyU7XG4gIH1cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgcGFkZGluZzogMTUlIDA7XG4gIH1cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmhlYWRlciAudGV4dC1oZWFkZXIgcC5pbnRybyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdi1jb250ZW50IC5oZWFkZXIgLnRleHQtaGVhZGVyIHAuYmlnLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICBtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAuaGVhZGVyIC50ZXh0LWhlYWRlciBwLnJlc3VtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAxMCUgMDtcbiAgfVxuICBtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYtY29udGVudCAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2LWNvbnRlbnQgLmZvb3RlciBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isMobile = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check if screen mobile to apply responsiveness
        this.isMobile = window.innerWidth < 700 ? true : false;
        window.addEventListener("resize", function () {
            _this.displayWindowSize();
        });
    };
    AppComponent.prototype.displayWindowSize = function () {
        this.isMobile = window.innerWidth < 700 ? true : false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shared_material_module_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material-module/material.module */ "./src/app/shared/material-module/material.module.ts");
/* harmony import */ var _web_main_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/main/main/main.component */ "./src/app/web/main/main/main.component.ts");
/* harmony import */ var _web_newsletter_newsletter_form_newsletter_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/newsletter/newsletter-form/newsletter-form.component */ "./src/app/web/newsletter/newsletter-form/newsletter-form.component.ts");
/* harmony import */ var _web_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/products/products-list/products-list.component */ "./src/app/web/products/products-list/products-list.component.ts");
/* harmony import */ var _web_products_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/products/product-item/product-item.component */ "./src/app/web/products/product-item/product-item.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _web_main_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _web_newsletter_newsletter_form_newsletter_form_component__WEBPACK_IMPORTED_MODULE_10__["NewsletterFormComponent"],
                _web_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"],
                _web_products_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_12__["ProductItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_material_module_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _web_main_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web/main/main/main.component */ "./src/app/web/main/main/main.component.ts");

var ROUTES = [
    { path: '', component: _web_main_main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"] }
];


/***/ }),

/***/ "./src/app/providers/models/email.model.ts":
/*!*************************************************!*\
  !*** ./src/app/providers/models/email.model.ts ***!
  \*************************************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/providers/models/product-obj.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/models/product-obj.model.ts ***!
  \*******************************************************/
/*! exports provided: ProductObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductObj", function() { return ProductObj; });
var ProductObj = /** @class */ (function () {
    function ProductObj() {
        this.products = [];
    }
    return ProductObj;
}());



/***/ }),

/***/ "./src/app/providers/services/newsletter.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/providers/services/newsletter.service.ts ***!
  \**********************************************************/
/*! exports provided: NewsletterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterService", function() { return NewsletterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var NewsletterService = /** @class */ (function () {
    function NewsletterService(http) {
        this.http = http;
        this.emailUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].emailServer;
    }
    NewsletterService.prototype.sendEmail = function (email) {
        return this.http.post("" + this.emailUrl, email);
    };
    NewsletterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NewsletterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NewsletterService);
    return NewsletterService;
}());



/***/ }),

/***/ "./src/app/providers/services/products-list.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/providers/services/products-list.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductsListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListService", function() { return ProductsListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ProductsListService = /** @class */ (function () {
    function ProductsListService(http) {
        this.http = http;
        this.productsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.page = 0;
    }
    ProductsListService.prototype.getProducts = function () {
        this.page++;
        return this.http.get("" + this.productsUrl + this.page);
    };
    ProductsListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ProductsListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductsListService);
    return ProductsListService;
}());



/***/ }),

/***/ "./src/app/shared/material-module/material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/material-module/material.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");













/**
 * NgModule that includes all Material modules.
*/
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                // CDK
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                // Material
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/web/main/main/main.component.scss":
/*!***************************************************!*\
  !*** ./src/app/web/main/main/main.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 80%;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 700px) {\n  .main-container {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvw4FyZWEgZGUgVHJhYmFsaG8vRXN0dWRvcy9saW54LWNoYWxsZW5nZS9zcmMvYXBwL3dlYi9tYWluL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2ViL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0ksV0FBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWIvbWFpbi9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/web/main/main/main.component.ts":
/*!*************************************************!*\
  !*** ./src/app/web/main/main/main.component.ts ***!
  \*************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/web/main/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/web/main/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/web/newsletter/newsletter-form/newsletter-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/web/newsletter/newsletter-form/newsletter-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsletter-container {\n  width: 60%;\n  margin: 7% auto 0 auto;\n}\n.newsletter-container p {\n  text-align: center;\n  max-width: 100%;\n}\n.newsletter-container .form {\n  margin-top: 40px;\n}\n.newsletter-container .send-button {\n  margin-bottom: 10%;\n}\n.newsletter-container .send-button button {\n  width: 50%;\n  height: 45px;\n}\n@media only screen and (max-width: 700px) {\n  .newsletter-container {\n    width: 100%;\n  }\n  .newsletter-container .form mat-form-field {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvw4FyZWEgZGUgVHJhYmFsaG8vRXN0dWRvcy9saW54LWNoYWxsZW5nZS9zcmMvYXBwL3dlYi9uZXdzbGV0dGVyL25ld3NsZXR0ZXItZm9ybS9uZXdzbGV0dGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYi9uZXdzbGV0dGVyL25ld3NsZXR0ZXItZm9ybS9uZXdzbGV0dGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDREo7QURHSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRE47QURNQTtFQUNFO0lBQ0UsV0FBQTtFQ0hGO0VES0k7SUFDRSxVQUFBO0VDSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dlYi9uZXdzbGV0dGVyL25ld3NsZXR0ZXItZm9ybS9uZXdzbGV0dGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c2xldHRlci1jb250YWluZXIge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDclIGF1dG8gMCBhdXRvO1xuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gIC5zZW5kLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm5ld3NsZXR0ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuZm9ybSB7XG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubmV3c2xldHRlci1jb250YWluZXIge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDclIGF1dG8gMCBhdXRvO1xufVxuLm5ld3NsZXR0ZXItY29udGFpbmVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5uZXdzbGV0dGVyLWNvbnRhaW5lciAuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubmV3c2xldHRlci1jb250YWluZXIgLnNlbmQtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuLm5ld3NsZXR0ZXItY29udGFpbmVyIC5zZW5kLWJ1dHRvbiBidXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm5ld3NsZXR0ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubmV3c2xldHRlci1jb250YWluZXIgLmZvcm0gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/web/newsletter/newsletter-form/newsletter-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/web/newsletter/newsletter-form/newsletter-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewsletterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterFormComponent", function() { return NewsletterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_providers_models_email_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/models/email.model */ "./src/app/providers/models/email.model.ts");
/* harmony import */ var src_app_providers_services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/services/newsletter.service */ "./src/app/providers/services/newsletter.service.ts");





var NewsletterFormComponent = /** @class */ (function () {
    function NewsletterFormComponent(emailService) {
        this.emailService = emailService;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.isMobile = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.body = new src_app_providers_models_email_model__WEBPACK_IMPORTED_MODULE_3__["Email"]();
    }
    NewsletterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMobile = window.innerWidth < 700 ? true : false;
        window.addEventListener("resize", function () {
            _this.displayWindowSize();
        });
    };
    // This function will send the name and email given by user and send a example email
    NewsletterFormComponent.prototype.send = function () {
        // Check if user typed name and email. If not, the button will make nothing
        if (this.name.value && this.email.value) {
            this.body.name = this.name.value;
            this.body.email = this.email.value;
            this.emailService.sendEmail(this.body).subscribe(function (success) {
            });
        }
        return;
    };
    NewsletterFormComponent.prototype.displayWindowSize = function () {
        this.isMobile = window.innerWidth < 700 ? true : false;
    };
    NewsletterFormComponent.ctorParameters = function () { return [
        { type: src_app_providers_services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__["NewsletterService"] }
    ]; };
    NewsletterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletter-form',
            template: __webpack_require__(/*! raw-loader!./newsletter-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/web/newsletter/newsletter-form/newsletter-form.component.html"),
            styles: [__webpack_require__(/*! ./newsletter-form.component.scss */ "./src/app/web/newsletter/newsletter-form/newsletter-form.component.scss")]
        })
    ], NewsletterFormComponent);
    return NewsletterFormComponent;
}());



/***/ }),

/***/ "./src/app/web/products/product-item/product-item.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/web/products/product-item/product-item.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-container {\n  color: #888888;\n  height: 350px;\n  width: 200px;\n  display: inline-block;\n  margin: 30px;\n}\n.item-container .photo {\n  margin: 0 auto;\n}\n.item-container .photo img {\n  border: 1px solid #707070;\n  width: 200px;\n  height: 150px;\n}\n.item-container .product-info {\n  text-align: start;\n  margin-top: 5%;\n  width: 200px;\n}\n.item-container .product-info .product-name {\n  font-weight: normal;\n}\n.item-container .product-info .description {\n  margin: 5% 0 0 0;\n}\n.item-container .product-info .price {\n  margin-top: 5%;\n}\n.item-container .product-info .price h3 {\n  padding: 5px 0;\n}\n.item-container .buy-section {\n  width: 200px;\n  margin-top: 5%;\n}\n.item-container .buy-section button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvw4FyZWEgZGUgVHJhYmFsaG8vRXN0dWRvcy9saW54LWNoYWxsZW5nZS9zcmMvYXBwL3dlYi9wcm9kdWN0cy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWIvcHJvZHVjdHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDTjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxnQkFBQTtBQ0ZOO0FES0k7RUFDRSxjQUFBO0FDSE47QURLTTtFQUNFLGNBQUE7QUNIUjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNOSjtBRFFJO0VBQ0UsV0FBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvd2ViL3Byb2R1Y3RzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250YWluZXIge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweDtcblxuICAucGhvdG8ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaW1nIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0LWluZm8ge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiAyMDBweDtcblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiA1JSAwIDAgMDtcbiAgICB9XG5cbiAgICAucHJpY2Uge1xuICAgICAgbWFyZ2luLXRvcDogNSU7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ1eS1zZWN0aW9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iLCIuaXRlbS1jb250YWluZXIge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweDtcbn1cbi5pdGVtLWNvbnRhaW5lciAucGhvdG8ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pdGVtLWNvbnRhaW5lciAucGhvdG8gaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLml0ZW0tY29udGFpbmVyIC5wcm9kdWN0LWluZm8ge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5pdGVtLWNvbnRhaW5lciAucHJvZHVjdC1pbmZvIC5wcm9kdWN0LW5hbWUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLml0ZW0tY29udGFpbmVyIC5wcm9kdWN0LWluZm8gLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiA1JSAwIDAgMDtcbn1cbi5pdGVtLWNvbnRhaW5lciAucHJvZHVjdC1pbmZvIC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLml0ZW0tY29udGFpbmVyIC5wcm9kdWN0LWluZm8gLnByaWNlIGgzIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uaXRlbS1jb250YWluZXIgLmJ1eS1zZWN0aW9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5pdGVtLWNvbnRhaW5lciAuYnV5LXNlY3Rpb24gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/web/products/product-item/product-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/web/products/product-item/product-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent() {
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    // This function returns the path to image of product
    ProductItemComponent.prototype.getImageURL = function () {
        return this.product.image;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')
    ], ProductItemComponent.prototype, "product", void 0);
    ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/web/products/product-item/product-item.component.html"),
            styles: [__webpack_require__(/*! ./product-item.component.scss */ "./src/app/web/products/product-item/product-item.component.scss")]
        })
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "./src/app/web/products/products-list/products-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/web/products/products-list/products-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-container {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n}\n.products-container app-product-item {\n  display: inline-block;\n}\n.products-container .load-more-products-button {\n  color: #888888;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvw4FyZWEgZGUgVHJhYmFsaG8vRXN0dWRvcy9saW54LWNoYWxsZW5nZS9zcmMvYXBwL3dlYi9wcm9kdWN0cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYi9wcm9kdWN0cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3dlYi9wcm9kdWN0cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGFwcC1wcm9kdWN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5sb2FkLW1vcmUtcHJvZHVjdHMtYnV0dG9uIHtcbiAgICBjb2xvcjogIzg4ODg4ODtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgfVxufVxuIiwiLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgYXBwLXByb2R1Y3QtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLmxvYWQtbW9yZS1wcm9kdWN0cy1idXR0b24ge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbWFyZ2luLXRvcDogMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/web/products/products-list/products-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/web/products/products-list/products-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_models_product_obj_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/models/product-obj.model */ "./src/app/providers/models/product-obj.model.ts");
/* harmony import */ var src_app_providers_services_products_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/services/products-list.service */ "./src/app/providers/services/products-list.service.ts");




var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(productService) {
        this.productService = productService;
        this.products = new src_app_providers_models_product_obj_model__WEBPACK_IMPORTED_MODULE_2__["ProductObj"]();
        this.nextPage = new src_app_providers_models_product_obj_model__WEBPACK_IMPORTED_MODULE_2__["ProductObj"]();
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.initList();
    };
    // This function will get the 8 first products from API
    ProductsListComponent.prototype.initList = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (success) {
            _this.products.products = success.products;
        });
    };
    // Load more 8 products from API
    ProductsListComponent.prototype.loadMoreProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (success) {
            _this.nextPage.products = success.products;
            _this.products.products = _this.products.products.concat(_this.nextPage.products);
        });
    };
    ProductsListComponent.ctorParameters = function () { return [
        { type: src_app_providers_services_products_list_service__WEBPACK_IMPORTED_MODULE_3__["ProductsListService"] }
    ]; };
    ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! raw-loader!./products-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/web/products/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.scss */ "./src/app/web/products/products-list/products-list.component.scss")]
        })
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=',
    emailServer: 'https://back-email.herokuapp.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gabriel/Área de Trabalho/Estudos/linx-challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map