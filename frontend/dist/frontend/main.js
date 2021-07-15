(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+WLb":
/*!**********************************!*\
  !*** ./src/app/cover.service.ts ***!
  \**********************************/
/*! exports provided: CoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverService", function() { return CoverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net.service */ "qm4y");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CoverService {
    constructor(net, http) {
        this.net = net;
        this.http = http;
    }
    list(params) {
        return this.net.list('covers', params);
    }
    get(id) {
        return this.net.get('covers', id);
    }
    put(cover_id, payload) {
        return this.net.put('covers', cover_id, payload);
    }
    post(body) {
        return this.net.post('covers', body);
    }
}
CoverService.ɵfac = function CoverService_Factory(t) { return new (t || CoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_1__["NetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoverService, factory: CoverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "/Lrn":
/*!****************************************************************************!*\
  !*** ./src/app/add-cover-bottom-sheet/add-cover-bottom-sheet.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCoverBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCoverBottomSheetComponent", function() { return AddCoverBottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bus.service */ "kPP+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cover.service */ "+WLb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddCoverBottomSheetComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCoverBottomSheetComponent_tr_12_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const e_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.add_cover(e_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r1.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r1.market, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r1.service, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r1.brand, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r1.dealer_id, " ");
} }
class AddCoverBottomSheetComponent {
    constructor(c, date, _bottomSheetRef, bus, data) {
        this.c = c;
        this.date = date;
        this._bottomSheetRef = _bottomSheetRef;
        this.bus = bus;
        this.data = data;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.list = yield this.c.list({ box_id_null: true });
        });
    }
    add_cover(cover) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.c.put(cover.id, { "box_id": this.data });
            yield this.bus.publish(src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__["RELOAD_EVENT"]);
            this._bottomSheetRef.dismiss();
        });
    }
}
AddCoverBottomSheetComponent.ɵfac = function AddCoverBottomSheetComponent_Factory(t) { return new (t || AddCoverBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cover_service__WEBPACK_IMPORTED_MODULE_4__["CoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])); };
AddCoverBottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddCoverBottomSheetComponent, selectors: [["app-add-cover-bottom-sheet"]], decls: 13, vars: 1, consts: [[1, "mat-table", 2, "width", "100%"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-row", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "mat-row", 2, "cursor", "pointer", 3, "click"], [1, "mat-cell", "format"], [1, "mat-cell"]], template: function AddCoverBottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Dealer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddCoverBottomSheetComponent_tr_12_Template, 11, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["td[_ngcontent-%COMP%]{\r\n    height: 48px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb3Zlci1ib3R0b20tc2hlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWRkLWNvdmVyLWJvdHRvbS1zaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "/O6N":
/*!******************************************!*\
  !*** ./src/app/boxes/boxes.component.ts ***!
  \******************************************/
/*! exports provided: BoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesComponent", function() { return BoxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bus.service */ "kPP+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boxes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxes.service */ "L8L5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../t.pipe */ "NZj0");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search.component */ "tq2C");









class BoxesComponent {
    constructor(b, router, date, t, bus) {
        this.b = b;
        this.router = router;
        this.date = date;
        this.t = t;
        this.bus = bus;
        this.config = {
            search_params: [{
                    label: "id",
                    field: "id"
                }],
            table_fields: [{
                    label: "box",
                    field: "id",
                    classes: "",
                    sortable: true
                }, {
                    label: "status",
                    render: (row) => this.t.transform("box_status_" + row.status),
                    classes: ""
                }, {
                    label: "user",
                    field: "username",
                    classes: "",
                    sortable: true
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at),
                    classes: ""
                }, {
                    label: "sent_at",
                    render: (row) => this.date.transform(row.sent_at),
                    classes: "xs"
                }, {
                    label: "received_at",
                    render: (row) => this.date.transform(row.received_at),
                    classes: "xs",
                    sortable: true
                }, {
                    label: "updated_at",
                    render: (row) => this.date.transform(row.updated_at),
                    classes: "xs"
                }, {
                    label: "action",
                    actions: [{ action: (row) => this.next_status(row, "SCATOLA.DAINVIARE"),
                            icon: "forward",
                            class: "warning",
                            title: "close_box",
                            condition: (row) => row.status == "SCATOLA.NEW" },
                        { action: (row) => this.next_status(row, "SCATOLA.INVIATA"),
                            icon: "forward",
                            class: "warning",
                            title: "send_box",
                            condition: (row) => row.status == "SCATOLA.DAINVIARE" },
                        { action: (row) => this.next_status(row, "SCATOLA.RICEVUTA"),
                            icon: "forward",
                            class: "warning",
                            title: "received_box",
                            condition: (row) => row.status == "SCATOLA.INVIATA" },
                        { action: (row) => this.next_status(row, "SCATOLA.SCAN"),
                            icon: "forward",
                            class: "warning",
                            title: "working_box",
                            condition: (row) => row.status == "SCATOLA.RICEVUTA" }
                    ],
                    classes: ""
                }]
        };
        this.params = {
            id: ""
        };
    }
    ngOnInit() {
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.b.list(params);
        });
    }
    navigate(row) {
        this.router.navigate(['/boxes/' + row.id]);
    }
    next_status(row, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.b.put(row.id, { "status": status });
            this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"]);
        });
    }
}
BoxesComponent.ɵfac = function BoxesComponent_Factory(t) { return new (t || BoxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_boxes_service__WEBPACK_IMPORTED_MODULE_3__["BoxesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_t_pipe__WEBPACK_IMPORTED_MODULE_6__["TPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_1__["BusService"])); };
BoxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BoxesComponent, selectors: [["app-boxes"]], decls: 4, vars: 7, consts: [[3, "config", "params", "load", "navigate"]], template: function BoxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-search", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, "boxes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_6__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3hlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Progetti\AngularWS\Geco\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "2570":
/*!************************************!*\
  !*** ./src/app/spinner.service.ts ***!
  \************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpinnerService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac });


/***/ }),

/***/ "45bl":
/*!***********************************!*\
  !*** ./src/app/dealer.service.ts ***!
  \***********************************/
/*! exports provided: DealerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerService", function() { return DealerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net.service */ "qm4y");


class DealerService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return this.net.list('dealers', params);
    }
    get(id) {
        return this.net.get('dealers', id);
    }
}
DealerService.ɵfac = function DealerService_Factory(t) { return new (t || DealerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_1__["NetService"])); };
DealerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DealerService, factory: DealerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8xJ0":
/*!**************************************************!*\
  !*** ./src/app/documents/documents.component.ts ***!
  \**************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dealer.service */ "45bl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "tq2C");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "NZj0");






class DocumentsComponent {
    constructor(d, a, router) {
        this.d = d;
        this.a = a;
        this.router = router;
        this.config = {
            search_params: [],
            table_fields: [{
                    label: "type",
                    field: "type",
                    classes: ""
                }, {
                    label: "description",
                    field: "description",
                    classes: ""
                }, {
                    label: "versions",
                    render: (row) => this.last_version(row.versions).id,
                    classes: "xs"
                }, {
                    label: "created_at",
                    render: (row) => this.first_version(row.versions).created_at,
                    classes: "xs"
                }, {
                    label: "pages",
                    render: (row) => this.last_version(row.versions).digital.pages,
                    classes: "xs"
                }]
        };
        this.params = {};
    }
    ngOnInit() { }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dealer = yield this.d.get(this.a.snapshot.params.id);
            let contract_id = this.a.snapshot.params.contract_id;
            let contract = dealer["contracts"].find(e => e.id == contract_id);
            return contract.documents;
        });
    }
    navigate(row) {
        this.router.navigate([`/dealers/${this.a.snapshot.params.id}/contracts/${this.a.snapshot.params.contract_id}/documents/${row.type}/versions`]);
    }
    first_version(versions) {
        let first_version_id = Math.min(...versions.map(e => e.id));
        return versions.find(e => e.id == first_version_id);
    }
    last_version(versions) {
        let last_version_id = Math.max(...versions.map(e => e.id));
        return versions.find(e => e.id == last_version_id);
    }
}
DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) { return new (t || DocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocumentsComponent, selectors: [["app-documents"]], decls: 5, vars: 10, consts: [[3, "config", "params", "load", "navigate"]], template: function DocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-search", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "document_list"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, "contract"), " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "9dTU":
/*!******************************************************!*\
  !*** ./src/app/dealer-info/dealer-info.component.ts ***!
  \******************************************************/
/*! exports provided: DealerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerInfoComponent", function() { return DealerInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../t.pipe */ "NZj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function DealerInfoComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, e_r1.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r1.value, " ");
} }
class DealerInfoComponent {
    constructor(t) {
        this.t = t;
        this.list = [];
    }
    ngOnInit() {
        this.list = [
            { "label": "vat_code", "value": this.dealer.vatcode },
            { "label": "market", "value": this.t.transform("market_" + this.dealer.market) },
            { "label": "sales_manager", "value": this.dealer.salesmanager },
            { "label": "after_sales_manager", "value": this.dealer.aftersalesmanager },
            { "label": "category", "value": this.dealer.category }
        ];
    }
}
DealerInfoComponent.ɵfac = function DealerInfoComponent_Factory(t) { return new (t || DealerInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_t_pipe__WEBPACK_IMPORTED_MODULE_1__["TPipe"])); };
DealerInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealerInfoComponent, selectors: [["app-dealer-info"]], inputs: { dealer: "dealer" }, decls: 2, vars: 1, consts: [[1, "mat-table", 2, "width", "100%"], ["class", "mat-header-row", 4, "ngFor", "ngForOf"], [1, "mat-header-row"], [1, "mat-header-cell"], [1, "mat-cell"]], template: function DealerInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DealerInfoComponent_tr_1_Template, 6, 4, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_1__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFsZXItaW5mby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Adw7":
/*!********************************************!*\
  !*** ./src/app/dealer/dealer.component.ts ***!
  \********************************************/
/*! exports provided: DealerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerComponent", function() { return DealerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dealer.service */ "45bl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _dealer_info_dealer_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dealer-info/dealer-info.component */ "9dTU");
/* harmony import */ var _dealer_structures_dealer_structures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dealer-structures/dealer-structures.component */ "mr8B");
/* harmony import */ var _dealer_mandates_dealer_mandates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dealer-mandates/dealer-mandates.component */ "ynfy");
/* harmony import */ var _dealer_contracts_dealer_contracts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dealer-contracts/dealer-contracts.component */ "TzMg");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../t.pipe */ "NZj0");











function DealerComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "dealer"), " ", ctx_r0.dealer.id, " - ", ctx_r0.dealer.description, " (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "dealer_status_" + ctx_r0.dealer.status), ")");
} }
function DealerComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-dealer-info", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dealer", ctx_r1.dealer);
} }
function DealerComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-dealer-structures", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "structures"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dealer", ctx_r2.dealer);
} }
function DealerComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-dealer-mandates", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "mandates"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dealer", ctx_r3.dealer);
} }
function DealerComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-dealer-contracts", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "contracts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dealer", ctx_r4.dealer);
} }
class DealerComponent {
    constructor(d, a) {
        this.d = d;
        this.a = a;
        this.dealer = null;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dealer = yield this.d.get(this.a.snapshot.params.id);
        });
    }
}
DealerComponent.ɵfac = function DealerComponent_Factory(t) { return new (t || DealerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DealerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DealerComponent, selectors: [["app-dealer"]], decls: 6, vars: 5, consts: [[4, "ngIf"], [3, "label", 4, "ngIf"], [3, "label"], [3, "dealer"]], template: function DealerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DealerComponent_h2_0_Template, 4, 8, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DealerComponent_mat_tab_2_Template, 3, 4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DealerComponent_mat_tab_3_Template, 3, 4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DealerComponent_mat_tab_4_Template, 3, 4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DealerComponent_mat_tab_5_Template, 3, 4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dealer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dealer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dealer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dealer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dealer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _dealer_info_dealer_info_component__WEBPACK_IMPORTED_MODULE_6__["DealerInfoComponent"], _dealer_structures_dealer_structures_component__WEBPACK_IMPORTED_MODULE_7__["DealerStructuresComponent"], _dealer_mandates_dealer_mandates_component__WEBPACK_IMPORTED_MODULE_8__["DealerMandatesComponent"], _dealer_contracts_dealer_contracts_component__WEBPACK_IMPORTED_MODULE_9__["DealerContractsComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_10__["TPipe"]], styles: ["table[_ngcontent-%COMP%]{\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    width: 30%;\r\n    height: 36px;\r\n    border-bottom: 1px solid lightgray;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    height: 36px;\r\n    border-bottom: 1px solid lightgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEMiLCJmaWxlIjoiZGVhbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGh7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxudGR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "CZqF":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinner.service */ "2570");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");




function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.color)("mode", ctx_r0.mode)("value", ctx_r0.value);
} }
class SpinnerComponent {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.spinnerService.isLoading;
    }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 3, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [1, "spinner", 3, "color", "mode", "value"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isLoading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".overlay[_ngcontent-%COMP%] {\r\n    position:fixed;\r\n    display:block;\r\n    width:100%;\r\n    height:100%;\r\n    top:0;\r\n    left:0;\r\n    background-color:rgba(168, 168, 168, 0.8);\r\n    z-index:99999;\r\n  }\r\n  .spinner[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxLQUFLO0lBQ0wsTUFBTTtJQUNOLHlDQUF5QztJQUN6QyxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsUUFBUTtJQUNSLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjgsIDE2OCwgMTY4LCAwLjgpO1xyXG4gICAgei1pbmRleDo5OTk5OTtcclxuICB9XHJcbiAgLnNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "GncD":
/*!**************************************************!*\
  !*** ./src/app/contracts/contracts.component.ts ***!
  \**************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contract.service */ "aPik");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "tq2C");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "NZj0");






class ContractsComponent {
    constructor(c, router) {
        this.c = c;
        this.router = router;
        this.config = {
            search_params: [{
                    label: "contract",
                    field: "id"
                }],
            table_fields: [{
                    label: "service",
                    field: "service",
                    classes: ""
                }, {
                    label: "brand",
                    field: "brand_id",
                    classes: ""
                }, {
                    label: "documents",
                    render: (row) => row.documents.length,
                    classes: "xs"
                }]
        };
        this.params = {
            id: ""
        };
    }
    ngOnInit() { }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.c.list(params);
        });
    }
    navigate(row) {
        this.router.navigate(['/dealers/' + row.dealer_id + '/contracts/' + row.id + '/documents']);
    }
}
ContractsComponent.ɵfac = function ContractsComponent_Factory(t) { return new (t || ContractsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContractsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContractsComponent, selectors: [["app-contracts"]], decls: 4, vars: 7, consts: [[3, "config", "params", "load", "navigate"]], template: function ContractsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-search", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, "contract_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmFjdHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "HqhT":
/*!********************************************!*\
  !*** ./src/app/dashboard/chart.service.ts ***!
  \********************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../net.service */ "qm4y");



class ChartService {
    constructor(netService) {
        this.netService = netService;
    }
    getChart(section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.netService.get("dashboard", section);
        });
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_2__["NetService"])); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Jjks":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../t.pipe */ "NZj0");





class SidenavComponent {
    constructor(router) {
        this.router = router;
        this.current_page = "dashboard";
    }
    ngOnInit() {
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.current_page = e.url.substring(1).split("/")[0];
            }
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 13, vars: 24, consts: [["mat-list-item", "", "routerLink", "/dashboard"], ["mat-list-item", "", "routerLink", "/dealers"], ["mat-list-item", "", "routerLink", "/contracts"], ["mat-list-item", "", "routerLink", "/boxes"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("menu ", ctx.current_page == "dashboard" ? "menu-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 16, "dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("menu ", ctx.current_page == "dealers" ? "menu-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 18, "dealers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("menu ", ctx.current_page == "contracts" ? "menu-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 20, "contracts"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("menu ", ctx.current_page == "boxes" ? "menu-active" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 22, "boxes"));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_3__["TPipe"]], styles: [".menu[_ngcontent-%COMP%] {\r\n    padding-left: 2em;\r\n    text-decoration: none;\r\n    filter: brightness(80%);\r\n    color: #000000;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]:hover {\r\n    filter: brightness(90%);\r\n}\r\n\r\n.menu-active[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    filter: brightness(100%) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm1lbnU6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcbi5tZW51LWFjdGl2ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSkgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "K8Gv":
/*!*************************!*\
  !*** ./src/app/util.ts ***!
  \*************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
function user() {
    let access_token = localStorage.getItem('access_token');
    access_token = access_token.substring(access_token.indexOf('.') + 1, access_token.lastIndexOf('.'));
    access_token = atob(access_token);
    access_token = JSON.parse(access_token);
    return access_token;
}


/***/ }),

/***/ "L8L5":
/*!**********************************!*\
  !*** ./src/app/boxes.service.ts ***!
  \**********************************/
/*! exports provided: BoxesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesService", function() { return BoxesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net.service */ "qm4y");


class BoxesService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return this.net.list('boxes', params);
    }
    get(id) {
        return this.net.get('boxes', id);
    }
    put(id, body) {
        return this.net.put("boxes", id, body);
    }
}
BoxesService.ɵfac = function BoxesService_Factory(t) { return new (t || BoxesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_1__["NetService"])); };
BoxesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoxesService, factory: BoxesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NZj0":
/*!***************************!*\
  !*** ./src/app/t.pipe.ts ***!
  \***************************/
/*! exports provided: TPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return TPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TPipe {
    constructor() {
        this.dictionary = {
            //titles
            dashboard: "Dashboard",
            dealer_list: "Lista dealers",
            contract_list: "Lista contratti",
            document_list: "Lista documenti",
            version_list: "Lista versioni",
            cover_list: "Lista frontespizi",
            //commons
            search: "Ricerca",
            action: "Azioni",
            //dealers-component
            dealer: "Dealer",
            description: "Descrizione",
            id: "ID",
            status: "Status",
            info: "Info",
            structures: "Strutture",
            mandates: "Mandati",
            //dealers-info
            vat_code: "VAT code",
            market: "Mercato",
            sales_manager: "Responsabile vendite",
            after_sales_manager: "Responsabile post vendita",
            category: "Categoria",
            region_09: "CENTRO SUD",
            region_01: "NORD OVEST",
            dealers: "Dealers",
            contracts: "Contratti",
            //dealers-structure
            network: "Marchio rete",
            region: "Regione",
            zone: "Zona",
            field_manager: "Manager",
            //dealers-mandates
            services: "Servizi",
            service_Assistenza: "Assistenza",
            service_Rivendita: "Rivendita",
            //documents
            type: "Tipo",
            versions: "Versioni",
            pages: "Pagine",
            //contracts
            contract: "Contratti",
            service: "Servizio",
            brand: "Brand",
            documents: "Documenti",
            signed_contracts: "Contratto firmato",
            completed: "Completato",
            box: "Scatola",
            user: "Utente",
            boxes: "Lista scatole",
            created_at: "Data creazione",
            sent_at: "Data spedizione",
            received_at: "Data ricezione",
            updated_at: "Data ultimo agg.",
            "box_status_SCATOLA.SCAN": "Lavorata e contratto su documentale",
            covers: "Frontespizi",
            cover: "Frontespizio",
            sort: "Ordinamento",
            mandatory: "Obbligatorio",
            doc_type_selection: "Seleziona i tipi documentali",
            attachment: "Allegati",
            doc: "Tipo documentale"
        };
    }
    transform(value) {
        return this.dictionary[value] || "***" + value + "***";
    }
}
TPipe.ɵfac = function TPipe_Factory(t) { return new (t || TPipe)(); };
TPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "t", type: TPipe, pure: true });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _basechart_basechart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basechart/basechart.component */ "WYDs");




class DashboardComponent {
    constructor(changeDetectorRef, media) {
        this.shouldRun = true;
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    toggle() {
        this.shouldRun = !this.shouldRun;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 31, vars: 0, consts: [[1, "dashboard-box"], [1, "mat-elevation-z5", "dashboard-card"], ["type", "bar", "section", "bar"], ["type", "doughnut", "section", "doughnut"], ["type", "line", "section", "line"], ["type", "pie", "section", "pie"], ["type", "radar", "section", "radar"], ["type", "polarArea", "section", "polarArea"], ["type", "bubble", "section", "bubble"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GeCo Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Label chart Bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-basechart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Label chart Doughnut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-basechart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Label chart Line ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-basechart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Label chart Pie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-basechart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Label chart Radar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-basechart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Label chart polarArea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-basechart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Label chart Bubble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-basechart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _basechart_basechart_component__WEBPACK_IMPORTED_MODULE_3__["BasechartComponent"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #eee;\r\n}\r\n\r\n\r\n@media screen and (min-width: 1150px){\r\n  .dashboard-card[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    margin: 1.5em;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 1160px){\r\n  .dashboard-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 1.5em;\r\n  }\r\n}\r\n\r\n\r\n.dashboard-box[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-content: stretch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBQ0Y7OztBQUlBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTUwcHgpe1xyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNjBweCl7XHJcbiAgLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmRhc2hib2FyZC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SgpT":
/*!**********************************************************************************!*\
  !*** ./src/app/add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddDocTypeBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocTypeBottomSheetComponent", function() { return AddDocTypeBottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bus.service */ "kPP+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _document_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-types.service */ "s4ME");
/* harmony import */ var _cover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cover.service */ "+WLb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../t.pipe */ "NZj0");
/* harmony import */ var _limit_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../limit.pipe */ "zgbR");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../filter.pipe */ "i6q1");

















function AddDocTypeBottomSheetComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", e_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, e_r2), " ");
} }
function AddDocTypeBottomSheetComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddDocTypeBottomSheetComponent_tr_25_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const e_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.add_doc_type(e_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r3.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r3.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", e_r3.attachment, " ");
} }
const _c0 = function () { return ["category"]; };
const _c1 = function () { return ["id", "description"]; };
class AddDocTypeBottomSheetComponent {
    constructor(d, c, date, _bottomSheetRef, bus, data) {
        this.d = d;
        this.c = c;
        this.date = date;
        this._bottomSheetRef = _bottomSheetRef;
        this.bus = bus;
        this.data = data;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.list = yield this.d.list({ box_id_null: true, limit: 1000 });
            this.categories = this.list
                .map(e => e.category)
                .reduce((r, e) => { r.add(e); return r; }, new Set());
        });
    }
    add_doc_type(doc_type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.data.doc_types) {
                this.data.doc_types = [];
            }
            this.data.doc_types.push(doc_type);
            yield this.c.put(this.data.id, { "document_types": this.data.doc_types });
            yield this.bus.publish(src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__["RELOAD_EVENT"]);
            this._bottomSheetRef.dismiss();
        });
    }
}
AddDocTypeBottomSheetComponent.ɵfac = function AddDocTypeBottomSheetComponent_Factory(t) { return new (t || AddDocTypeBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_document_types_service__WEBPACK_IMPORTED_MODULE_4__["DocumentTypesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cover_service__WEBPACK_IMPORTED_MODULE_5__["CoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])); };
AddDocTypeBottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddDocTypeBottomSheetComponent, selectors: [["app-add-doc-type-bottom-sheet"]], decls: 29, vars: 38, consts: [[1, "example-full-width", 2, "width", "70%"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange"], [2, "padding-left", "2%", "width", "28%"], [3, "ngModel", "placeholder", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mat-table", 2, "width", "100%"], [1, "mat-header-row"], [1, "mat-header-cell", 2, "width", "3%"], [1, "mat-header-cell", 2, "width", "55%"], [1, "mat-header-cell"], ["class", "mat-row", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-row", 2, "cursor", "pointer", 3, "click"], [1, "mat-cell", "format"], [1, "mat-cell"]], template: function AddDocTypeBottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddDocTypeBottomSheetComponent_Template_input_ngModelChange_5_listener($event) { return ctx.x = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddDocTypeBottomSheetComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.selected_category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddDocTypeBottomSheetComponent_mat_option_10_Template, 3, 4, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AddDocTypeBottomSheetComponent_tr_25_Template, 9, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 11, "doc_type_selection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 13, "doc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.x);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 15, "category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selected_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 17, "id"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 19, "description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 21, "category"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 23, "attachment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](27, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](28, 32, ctx.list, ctx.selected_category, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](36, _c0)), ctx.x, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](37, _c1)), 6));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_12__["TPipe"], _limit_pipe__WEBPACK_IMPORTED_MODULE_13__["LimitPipe"], _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZG9jLXR5cGUtYm90dG9tLXNoZWV0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "K8Gv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");









class AppComponent {
    constructor() {
        this.showFiller = false;
        this.title = 'frontend';
    }
    ngOnInit() { }
    get name() {
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["user"])()['name'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 1, consts: [["color", "primary"], ["mat-icon-button", ""], [3, "click"], ["routerLink", "/"], ["src", "assets/logo.png", 2, "height", "3em"], [2, "flex", "auto"], [2, "width", "20%"], ["sidenav", ""], [2, "height", "88vh", "width", "92%", "margin", "auto", "padding-top", "2em"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-sidenav", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TzMg":
/*!****************************************************************!*\
  !*** ./src/app/dealer-contracts/dealer-contracts.component.ts ***!
  \****************************************************************/
/*! exports provided: DealerContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerContractsComponent", function() { return DealerContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "NZj0");






function DealerContractsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r1.service_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", e_r1.brand_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "brand_" + e_r1.brand_id), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dealers/" + ctx_r0.dealer.id + "/contracts/" + e_r1.id + "/documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.dealer.contracts.length, " ");
} }
class DealerContractsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DealerContractsComponent.ɵfac = function DealerContractsComponent_Factory(t) { return new (t || DealerContractsComponent)(); };
DealerContractsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealerContractsComponent, selectors: [["app-dealer-contracts"]], inputs: { dealer: "dealer" }, decls: 18, vars: 16, consts: [[1, "mat-table", 2, "width", "100%"], [1, "mat-header-row"], [1, "mat-header-cell"], ["class", "mat-header-row", 4, "ngFor", "ngForOf"], [1, "mat-cell"], ["matTooltipPosition", "right", 3, "matTooltip"], [3, "routerLink"], [2, "color", "green"]], template: function DealerContractsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DealerContractsComponent_tr_17_Template, 15, 7, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "service"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "brand"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, "documents"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "signed_contracts"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, "completed"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dealer.contracts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFsZXItY29udHJhY3RzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "UP1J":
/*!*******************************************!*\
  !*** ./src/app/error-http-interceptor.ts ***!
  \*******************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/errors.service */ "Xpwd");




class Interceptor {
    constructor(error_service) {
        this.error_service = error_service;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            this.error_service.openSnackBar(err.error.message, "OK");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
}
Interceptor.ɵfac = function Interceptor_Factory(t) { return new (t || Interceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"])); };
Interceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Interceptor, factory: Interceptor.ɵfac });


/***/ }),

/***/ "UhMv":
/*!************************************************!*\
  !*** ./src/app/versions/versions.component.ts ***!
  \************************************************/
/*! exports provided: VersionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsComponent", function() { return VersionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dealer.service */ "45bl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search.component */ "tq2C");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "NZj0");






class VersionsComponent {
    constructor(d, a) {
        this.d = d;
        this.a = a;
        this.config = {
            search_params: [],
            table_fields: [{
                    label: "id",
                    field: "id",
                    classes: ""
                }, {
                    label: "created_at",
                    field: "created_at",
                    classes: ""
                }, {
                    label: "status",
                    render: (row) => "versions_status_" + row.status.id,
                    classes: ""
                }, {
                    label: "box",
                    render: (row) => row.paper.box,
                    classes: ""
                }]
        };
        this.params = {};
    }
    ngOnInit() {
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dealer = yield this.d.get(this.a.snapshot.params.id);
            let contract_id = this.a.snapshot.params.contract_id;
            let contract = dealer["contracts"].find(e => e.id == contract_id);
            return contract.documents.find(e => e.type == this.a.snapshot.params.document_id).versions;
        });
    }
    navigate(row) { }
}
VersionsComponent.ɵfac = function VersionsComponent_Factory(t) { return new (t || VersionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
VersionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VersionsComponent, selectors: [["app-versions"]], decls: 4, vars: 7, consts: [[3, "config", "params", "load", "navigate"]], template: function VersionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-search", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, "version_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9ucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "VI8W":
/*!**************************************!*\
  !*** ./src/app/box/box.component.ts ***!
  \**************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _add_cover_bottom_sheet_add_cover_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-cover-bottom-sheet/add-cover-bottom-sheet.component */ "/Lrn");
/* harmony import */ var src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bus.service */ "kPP+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boxes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../boxes.service */ "L8L5");
/* harmony import */ var _cover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cover.service */ "+WLb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search/search.component */ "tq2C");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../t.pipe */ "NZj0");














function BoxComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "cover_list"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, "box"), " ", ctx_r0.box.id, ")");
} }
class BoxComponent {
    constructor(b, c, a, date, bs, bus) {
        this.b = b;
        this.c = c;
        this.a = a;
        this.date = date;
        this.bs = bs;
        this.bus = bus;
        this.config = {
            search_params: [],
            table_fields: [{
                    label: "id",
                    field: "id",
                    classes: ""
                }, {
                    label: "market",
                    field: "market",
                    classes: ""
                }, {
                    label: "service",
                    field: "service_id",
                    classes: ""
                }, {
                    label: "brand",
                    field: "brand_id",
                    classes: ""
                }, {
                    label: "dealer",
                    field: "dealer_id",
                    classes: ""
                }, {
                    label: "created_at",
                    render: (row) => this.date.transform(row.created_at),
                    classes: ""
                }, {
                    label: "action",
                    actions: [{ action: (row) => this.remove_cover(row.id), icon: "delete", class: "red" }
                    ],
                    classes: ""
                }]
        };
        this.params = {};
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.box = yield this.b.get(this.a.snapshot.params.id);
        });
    }
    navigate() { }
    load_covers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.c.list({ box_id: this.a.snapshot.params.id });
        });
    }
    openBottomSheet() {
        this.bs.open(_add_cover_bottom_sheet_add_cover_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_1__["AddCoverBottomSheetComponent"], {
            data: this.a.snapshot.params.id
        });
    }
    remove_cover(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.c.put(id, { "box_id": null });
            yield this.bus.publish(src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__["RELOAD_EVENT"]);
        });
    }
}
BoxComponent.ɵfac = function BoxComponent_Factory(t) { return new (t || BoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_boxes_service__WEBPACK_IMPORTED_MODULE_4__["BoxesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cover_service__WEBPACK_IMPORTED_MODULE_5__["CoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"])); };
BoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoxComponent, selectors: [["app-box"]], decls: 5, vars: 5, consts: [[4, "ngIf"], [3, "config", "params", "load", "navigate"], ["mat-fab", "", "color", "primary", 2, "position", "fixed", "right", "5em", "bottom", "5em", 3, "click"]], template: function BoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BoxComponent_h2_0_Template, 4, 7, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-search", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxComponent_Template_button_click_2_listener() { return ctx.openBottomSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load_covers.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_12__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WYDs":
/*!************************************************************!*\
  !*** ./src/app/dashboard/basechart/basechart.component.ts ***!
  \************************************************************/
/*! exports provided: BasechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasechartComponent", function() { return BasechartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart.service */ "HqhT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");





function BasechartComponent_canvas_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r0.chart.data)("labels", ctx_r0.chart.labels)("options", ctx_r0.chart.options)("chartType", ctx_r0.type);
} }
class BasechartComponent {
    constructor(chartService) {
        this.chartService = chartService;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.chart = yield this.chartService.getChart(this.section);
        });
    }
}
BasechartComponent.ɵfac = function BasechartComponent_Factory(t) { return new (t || BasechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
BasechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BasechartComponent, selectors: [["app-basechart"]], inputs: { type: "type", section: "section" }, decls: 2, vars: 1, consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "chartType", 4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "chartType"]], template: function BasechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BasechartComponent_canvas_1_Template, 1, 4, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Xpwd":
/*!***********************************!*\
  !*** ./src/app/errors.service.ts ***!
  \***********************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ErrorsService {
    constructor(snackBar, router) {
        this.snackBar = snackBar;
        this.router = router;
    }
    openSnackBar(message, action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.snackBar.open(message, action, {}).afterDismissed().toPromise();
            this.router.navigate(['/dealers/']);
        });
    }
}
ErrorsService.ɵfac = function ErrorsService_Factory(t) { return new (t || ErrorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ErrorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorsService, factory: ErrorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dealers/dealers.component */ "xJJK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dealer/dealer.component */ "Adw7");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _error_http_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error-http-interceptor */ "UP1J");
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./errors.service */ "Xpwd");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./t.pipe */ "NZj0");
/* harmony import */ var _dealer_info_dealer_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dealer-info/dealer-info.component */ "9dTU");
/* harmony import */ var _dealer_structures_dealer_structures_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dealer-structures/dealer-structures.component */ "mr8B");
/* harmony import */ var _dealer_mandates_dealer_mandates_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dealer-mandates/dealer-mandates.component */ "ynfy");
/* harmony import */ var _dealer_contracts_dealer_contracts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dealer-contracts/dealer-contracts.component */ "TzMg");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./documents/documents.component */ "8xJ0");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contracts/contracts.component */ "GncD");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _versions_versions_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./versions/versions.component */ "UhMv");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./boxes/boxes.component */ "/O6N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _box_box_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./box/box.component */ "VI8W");
/* harmony import */ var _add_cover_bottom_sheet_add_cover_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./add-cover-bottom-sheet/add-cover-bottom-sheet.component */ "/Lrn");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./cover/cover.component */ "z3xi");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _add_doc_type_bottom_sheet_add_doc_type_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component */ "SgpT");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");
/* harmony import */ var _limit_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./limit.pipe */ "zgbR");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _dashboard_basechart_basechart_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dashboard/basechart/basechart.component */ "WYDs");
/* harmony import */ var _spinner_interceptor__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./spinner-interceptor */ "vs0W");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./spinner.service */ "2570");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/core */ "fXoL");






















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _error_http_interceptor__WEBPACK_IMPORTED_MODULE_25__["Interceptor"],
            multi: true
        },
        _spinner_service__WEBPACK_IMPORTED_MODULE_52__["SpinnerService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _spinner_interceptor__WEBPACK_IMPORTED_MODULE_50__["SpinnerInterceptor"],
            multi: true
        },
        _errors_service__WEBPACK_IMPORTED_MODULE_26__["ErrorsService"], _angular_common__WEBPACK_IMPORTED_MODULE_38__["DatePipe"], _t_pipe__WEBPACK_IMPORTED_MODULE_27__["TPipe"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorIntl"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_48__["ChartsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
        _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_19__["DealersComponent"],
        _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_23__["DealerComponent"],
        _t_pipe__WEBPACK_IMPORTED_MODULE_27__["TPipe"],
        _dealer_info_dealer_info_component__WEBPACK_IMPORTED_MODULE_28__["DealerInfoComponent"],
        _dealer_structures_dealer_structures_component__WEBPACK_IMPORTED_MODULE_29__["DealerStructuresComponent"],
        _dealer_mandates_dealer_mandates_component__WEBPACK_IMPORTED_MODULE_30__["DealerMandatesComponent"],
        _dealer_contracts_dealer_contracts_component__WEBPACK_IMPORTED_MODULE_31__["DealerContractsComponent"],
        _documents_documents_component__WEBPACK_IMPORTED_MODULE_33__["DocumentsComponent"],
        _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_34__["ContractsComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_35__["SearchComponent"],
        _versions_versions_component__WEBPACK_IMPORTED_MODULE_36__["VersionsComponent"],
        _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_37__["BoxesComponent"],
        _box_box_component__WEBPACK_IMPORTED_MODULE_39__["BoxComponent"],
        _add_cover_bottom_sheet_add_cover_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_40__["AddCoverBottomSheetComponent"],
        _cover_cover_component__WEBPACK_IMPORTED_MODULE_41__["CoverComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_42__["SidenavComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_44__["DashboardComponent"],
        _add_doc_type_bottom_sheet_add_doc_type_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_45__["AddDocTypeBottomSheetComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_46__["FilterPipe"],
        _limit_pipe__WEBPACK_IMPORTED_MODULE_47__["LimitPipe"],
        _dashboard_basechart_basechart_component__WEBPACK_IMPORTED_MODULE_49__["BasechartComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_51__["SpinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_48__["ChartsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]] }); })();


/***/ }),

/***/ "aPik":
/*!*************************************!*\
  !*** ./src/app/contract.service.ts ***!
  \*************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net.service */ "qm4y");


class ContractService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return this.net.list('contracts', params);
    }
    get(id) {
        return this.net.get('contracts', id);
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_1__["NetService"])); };
ContractService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(list, x, fields) {
        if (x == null || x.length == 0) {
            return list;
        }
        return list.filter(e => this.match(e, x, fields));
    }
    match(e, x, fields) {
        return fields.filter(f => e[f].toLowerCase().indexOf(x.toLowerCase()) != -1).length > 0;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ "kPP+":
/*!********************************!*\
  !*** ./src/app/bus.service.ts ***!
  \********************************/
/*! exports provided: RELOAD_EVENT, BusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOAD_EVENT", function() { return RELOAD_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusService", function() { return BusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const RELOAD_EVENT = "reloadEvent";
class BusService {
    constructor() {
        // evento: lista callback
        this.map = new Map();
    }
    publish(event, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let list = this.map.get(event) || [];
            list.forEach((callback) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield callback(event, params);
            }));
        });
    }
    subscribe(event, callback) {
        let list = this.map.get(event) || [];
        list.push(callback);
        this.map.set(event, list);
    }
}
BusService.ɵfac = function BusService_Factory(t) { return new (t || BusService)(); };
BusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BusService, factory: BusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mr8B":
/*!******************************************************************!*\
  !*** ./src/app/dealer-structures/dealer-structures.component.ts ***!
  \******************************************************************/
/*! exports provided: DealerStructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerStructuresComponent", function() { return DealerStructuresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../t.pipe */ "NZj0");



function DealerStructuresComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "type"), " ");
} }
function DealerStructuresComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.type, " ");
} }
function DealerStructuresComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "network"), " ");
} }
function DealerStructuresComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "network_" + element_r13.network_id), " ");
} }
function DealerStructuresComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "region"), " ");
} }
function DealerStructuresComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "region_" + element_r14.region.id), " ");
} }
function DealerStructuresComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "zone"), " ");
} }
function DealerStructuresComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.zone.description, " ");
} }
function DealerStructuresComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "field_manager"), " ");
} }
function DealerStructuresComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.field_manager.description, " ");
} }
function DealerStructuresComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function DealerStructuresComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
const _c0 = function () { return ["type", "network", "region", "zone", "field_manager"]; };
class DealerStructuresComponent {
    constructor() { }
    ngOnInit() {
    }
}
DealerStructuresComponent.ɵfac = function DealerStructuresComponent_Factory(t) { return new (t || DealerStructuresComponent)(); };
DealerStructuresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealerStructuresComponent, selectors: [["app-dealer-structures"]], inputs: { dealer: "dealer" }, decls: 18, vars: 5, consts: [["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "type"], ["mat-header-cell", "", "style", "width: 1%;", "class", "format", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "network"], ["matColumnDef", "region"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "zone"], ["matColumnDef", "field_manager"], ["mat-header-cell", "", "class", "xs", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "xs", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "format", 2, "width", "1%"], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "xs"], ["mat-cell", "", 1, "xs"], ["mat-header-row", ""], ["mat-row", ""]], template: function DealerStructuresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DealerStructuresComponent_th_2_Template, 3, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DealerStructuresComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DealerStructuresComponent_th_5_Template, 3, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DealerStructuresComponent_td_6_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DealerStructuresComponent_th_8_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DealerStructuresComponent_td_9_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DealerStructuresComponent_th_11_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DealerStructuresComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DealerStructuresComponent_th_14_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DealerStructuresComponent_td_15_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DealerStructuresComponent_tr_16_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DealerStructuresComponent_tr_17_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dealer.structures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_2__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFsZXItc3RydWN0dXJlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "qm4y":
/*!********************************!*\
  !*** ./src/app/net.service.ts ***!
  \********************************/
/*! exports provided: NetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetService", function() { return NetService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const base_url = "http://localhost:8071";
function is_set(x) {
    if (x == null) {
        return false;
    }
    if (x == undefined) {
        return false;
    }
    if (x.toString().trim().length == 0) {
        return false;
    }
    return true;
}
function clean(o) {
    let result = {};
    Object.keys(o).forEach(e => { if (is_set(o[e]))
        result[e] = o[e]; });
    return result;
}
class NetService {
    constructor(http) {
        this.http = http;
    }
    list(url, params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("x-authorization", localStorage.getItem("access_token"));
        return this.http.get(base_url + '/' + url, { params: clean(params), headers: headers }).toPromise();
    }
    get(url, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("x-authorization", localStorage.getItem("access_token"));
        return this.http.get(base_url + '/' + url + '/' + id, { headers: headers }).toPromise();
    }
    put(url, id, body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("x-authorization", localStorage.getItem("access_token"));
        return this.http.put(base_url + '/' + url + '/' + id, body, { headers: headers }).toPromise();
    }
    post(url, body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("x-authorization", localStorage.getItem("access_token"));
        return this.http.post(base_url + '/' + url, body, { headers: headers }).toPromise();
    }
}
NetService.ɵfac = function NetService_Factory(t) { return new (t || NetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
NetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NetService, factory: NetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s4ME":
/*!*******************************************!*\
  !*** ./src/app/document-types.service.ts ***!
  \*******************************************/
/*! exports provided: DocumentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypesService", function() { return DocumentTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _net_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net.service */ "qm4y");


class DocumentTypesService {
    constructor(net) {
        this.net = net;
    }
    list(params) {
        return this.net.list('doctypes', params);
    }
    get(id) {
        return this.net.get('doctypes', id);
    }
    put(cover_id, box_id) {
        return this.net.put('doctypes', cover_id, { 'box_id': box_id });
    }
    post(body) {
        return this.net.post('doctypes', body);
    }
}
DocumentTypesService.ɵfac = function DocumentTypesService_Factory(t) { return new (t || DocumentTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_net_service__WEBPACK_IMPORTED_MODULE_1__["NetService"])); };
DocumentTypesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentTypesService, factory: DocumentTypesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bus.service */ "kPP+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../t.pipe */ "NZj0");














function SearchComponent_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_mat_form_field_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const e_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r8.params[e_r7.field] = $event); })("ngModelChange", function SearchComponent_mat_form_field_0_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.resetOffset(); })("keyup.enter", function SearchComponent_mat_form_field_0_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.load_list(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, e_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.params[e_r7.field]);
} }
function SearchComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.load_list(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "search"));
} }
function SearchComponent_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("format ", e_r14.classes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !e_r14.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, e_r14.label), " ");
} }
function SearchComponent_ng_container_4_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const e_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](e_r14.render ? e_r14.render(element_r18) : element_r18[e_r14.field]);
} }
function SearchComponent_ng_container_4_td_2_span_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_ng_container_4_td_2_span_2_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const action_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return action_r23.action(element_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](action_r23.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, action_r23.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", action_r23.icon, " ");
} }
function SearchComponent_ng_container_4_td_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_ng_container_4_td_2_span_2_mat_icon_1_Template, 3, 7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r23 = ctx.$implicit;
    const element_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", action_r23.condition(element_r18));
} }
function SearchComponent_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_ng_container_4_td_2_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchComponent_ng_container_4_td_2_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("format ", e_r14.classes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !e_r14.actions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", e_r14.actions);
} }
function SearchComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_ng_container_4_th_1_Template, 3, 7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchComponent_ng_container_4_td_2_Template, 3, 5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matColumnDef", e_r14.label);
} }
function SearchComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
} }
function SearchComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_tr_6_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const row_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.navigate(row_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "no_data_found"));
} }
const _c0 = function () { return [10, 20, 50]; };
function SearchComponent_mat_paginator_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-paginator", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function SearchComponent_mat_paginator_8_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx_r6.list[0] == null ? null : ctx_r6.list[0].record_count)("pageSize", ctx_r6.common_params.limit)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("pageIndex", ctx_r6.common_params.offset / ctx_r6.common_params.limit)("itemsPerPageLabel", ctx_r6.pippo);
} }
class SearchComponent {
    constructor(bus) {
        this.bus = bus;
        this.list = [];
        this.common_params = {
            offset: 0,
            limit: 10,
            sort: 'id',
            direction: 'asc'
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bus.subscribe(src_app_bus_service__WEBPACK_IMPORTED_MODULE_1__["RELOAD_EVENT"], () => this.load_list());
            yield this.load_list();
        });
    }
    pageChanged(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.common_params.offset = e.pageIndex * e.pageSize;
            this.common_params.limit = e.pageSize;
            yield this.load_list();
        });
    }
    resetOffset() {
        this.common_params.offset = 0;
    }
    sort(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.common_params.sort = e.active;
            this.common_params.direction = e.direction;
            this.resetOffset();
            yield this.load_list();
        });
    }
    table_fields() {
        return this.config.table_fields.map(e => e.label);
    }
    load_list() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.list = yield this.load(Object.assign(this.common_params, this.params));
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_bus_service__WEBPACK_IMPORTED_MODULE_1__["BusService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { config: "config", params: "params", load: "load", navigate: "navigate" }, decls: 9, vars: 7, consts: [["style", "width: 100%", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "style", "width: 100%", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource", "matSortChange"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "style", "cursor: pointer;", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "length", "pageSize", "pageSizeOptions", "pageIndex", "itemsPerPageLabel", "page", 4, "ngIf"], [2, "width", "100%"], ["matInput", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["mat-flat-button", "", "color", "primary", 2, "width", "100%", 3, "click"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "disabled", "class", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "disabled"], ["mat-cell", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "cursor: pointer;", 3, "title", "class", "click", 4, "ngIf"], [2, "cursor", "pointer", 3, "title", "click"], ["mat-header-row", ""], ["mat-row", "", 2, "cursor", "pointer", 3, "click"], [1, "mat-row"], ["colspan", "20", 1, "mat-cell", 2, "text-align", "center"], [3, "length", "pageSize", "pageSizeOptions", "pageIndex", "itemsPerPageLabel", "page"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SearchComponent_mat_form_field_0_Template, 5, 4, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_button_1_Template, 3, 3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matSortChange", function SearchComponent_Template_table_matSortChange_3_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_ng_container_4_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchComponent_tr_5_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchComponent_tr_6_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SearchComponent_tr_7_Template, 4, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchComponent_mat_paginator_8_Template, 1, 6, "mat-paginator", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.config.search_params);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.search_params.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.config.table_fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.table_fields());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.table_fields());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.list && (ctx.list[0] == null ? null : ctx.list[0].record_count) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_12__["TPipe"]], styles: [".red[_ngcontent-%COMP%] {\r\n    color: red !important;\r\n}\r\n\r\n.orange[_ngcontent-%COMP%]{\r\n    color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWQge1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3Jhbmdle1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _box_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box/box.component */ "VI8W");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxes/boxes.component */ "/O6N");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contracts/contracts.component */ "GncD");
/* harmony import */ var _cover_cover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cover/cover.component */ "z3xi");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer/dealer.component */ "Adw7");
/* harmony import */ var _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dealers/dealers.component */ "xJJK");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documents/documents.component */ "8xJ0");
/* harmony import */ var _versions_versions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./versions/versions.component */ "UhMv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'dealers', component: _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_7__["DealersComponent"] },
    { path: 'dealers/:id', component: _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_6__["DealerComponent"] },
    { path: 'contracts', component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__["ContractsComponent"] },
    { path: 'contracts/:id', component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__["ContractsComponent"] },
    { path: 'dealers/:id/contracts/:contract_id/documents', component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_8__["DocumentsComponent"] },
    { path: 'dealers/:id/contracts/:contract_id/documents/:document_id/versions', component: _versions_versions_component__WEBPACK_IMPORTED_MODULE_9__["VersionsComponent"] },
    { path: 'boxes', component: _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_2__["BoxesComponent"] },
    { path: 'boxes/:id', component: _box_box_component__WEBPACK_IMPORTED_MODULE_1__["BoxComponent"] },
    { path: 'covers/:id', component: _cover_cover_component__WEBPACK_IMPORTED_MODULE_4__["CoverComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dealers', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vs0W":
/*!****************************************!*\
  !*** ./src/app/spinner-interceptor.ts ***!
  \****************************************/
/*! exports provided: SpinnerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerInterceptor", function() { return SpinnerInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.service */ "2570");



// import { SpinnerOverlayComponent } from '@app/core/spinner-overlay/spinner-overlay.component';
class SpinnerInterceptor {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
    }
    intercept(req, next) {
        this.spinnerService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(() => this.spinnerService.hide()));
    }
}
SpinnerInterceptor.ɵfac = function SpinnerInterceptor_Factory(t) { return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"])); };
SpinnerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SpinnerInterceptor, factory: SpinnerInterceptor.ɵfac });


/***/ }),

/***/ "xJJK":
/*!**********************************************!*\
  !*** ./src/app/dealers/dealers.component.ts ***!
  \**********************************************/
/*! exports provided: DealersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealersComponent", function() { return DealersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dealer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dealer.service */ "45bl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../t.pipe */ "NZj0");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.component */ "tq2C");






class DealersComponent {
    constructor(d, router, t) {
        this.d = d;
        this.router = router;
        this.t = t;
        this.config = {
            search_params: [{
                    label: "dealer",
                    field: "id"
                }, {
                    label: "description",
                    field: "description_like"
                }],
            table_fields: [{
                    label: "id",
                    field: "id",
                    classes: ""
                }, {
                    label: "description",
                    field: "description",
                    classes: ""
                }, {
                    label: "status",
                    render: (row) => this.t.transform("dealer_status_" + row.status),
                    classes: "xs"
                }]
        };
        this.params = {
            id: "",
            description_like: ""
        };
    }
    ngOnInit() { }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.d.list(params);
        });
    }
    navigate(row) {
        this.router.navigate(['/dealers/' + row.id]);
    }
}
DealersComponent.ɵfac = function DealersComponent_Factory(t) { return new (t || DealersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dealer_service__WEBPACK_IMPORTED_MODULE_2__["DealerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_t_pipe__WEBPACK_IMPORTED_MODULE_4__["TPipe"])); };
DealersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DealersComponent, selectors: [["app-dealers"]], decls: 4, vars: 7, consts: [[3, "config", "params", "load", "navigate"]], template: function DealersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-search", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, "dealer_list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config)("params", ctx.params)("load", ctx.load.bind(ctx))("navigate", ctx.navigate.bind(ctx));
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_4__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFsZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ynfy":
/*!**************************************************************!*\
  !*** ./src/app/dealer-mandates/dealer-mandates.component.ts ***!
  \**************************************************************/
/*! exports provided: DealerMandatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerMandatesComponent", function() { return DealerMandatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../t.pipe */ "NZj0");






function DealerMandatesComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "id"), " ");
} }
function DealerMandatesComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.id, " ");
} }
function DealerMandatesComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "brand"), " ");
} }
function DealerMandatesComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.brand_id, " ");
} }
function DealerMandatesComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "services"), " ");
} }
const _c0 = function (a0, a1, a2, a3) { return { dealer_id: a0, market: a1, brand_id: a2, service_id: a3 }; };
function DealerMandatesComponent_td_9_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r12 = ctx.$implicit;
    const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c0, ctx_r11.dealer.id, ctx_r11.dealer.market, element_r10.brand_id, e_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "service_" + e_r12), " ");
} }
function DealerMandatesComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DealerMandatesComponent_td_9_mat_chip_2_Template, 3, 9, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", element_r10.services);
} }
function DealerMandatesComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function DealerMandatesComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
const _c1 = function () { return ["id", "brand", "services"]; };
class DealerMandatesComponent {
    constructor() { }
    ngOnInit() {
    }
}
DealerMandatesComponent.ɵfac = function DealerMandatesComponent_Factory(t) { return new (t || DealerMandatesComponent)(); };
DealerMandatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealerMandatesComponent, selectors: [["app-dealer-mandates"]], inputs: { dealer: "dealer" }, decls: 12, vars: 5, consts: [["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "style", "width: 1%;", "class", "format", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "brand"], ["matColumnDef", "services"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "format", 2, "width", "1%"], ["mat-cell", ""], ["mat-header-cell", ""], ["routerLink", "/covers/_new", 3, "queryParams", 4, "ngFor", "ngForOf"], ["routerLink", "/covers/_new", 3, "queryParams"], ["mat-header-row", ""], ["mat-row", ""]], template: function DealerMandatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DealerMandatesComponent_th_2_Template, 3, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DealerMandatesComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DealerMandatesComponent_th_5_Template, 3, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DealerMandatesComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DealerMandatesComponent_th_8_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DealerMandatesComponent_td_9_Template, 3, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DealerMandatesComponent_tr_10_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DealerMandatesComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dealer.mandates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_5__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFsZXItbWFuZGF0ZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "z3xi":
/*!******************************************!*\
  !*** ./src/app/cover/cover.component.ts ***!
  \******************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/util */ "K8Gv");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bus.service */ "kPP+");
/* harmony import */ var _add_doc_type_bottom_sheet_add_doc_type_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component */ "SgpT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cover_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cover.service */ "+WLb");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.component */ "tq2C");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../t.pipe */ "NZj0");














function CoverComponent_app_search_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-search", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx_r0.config)("params", ctx_r0.params)("load", ctx_r0.load_document_types.bind(ctx_r0))("navigate", ctx_r0.navigate.bind(ctx_r0));
} }
class CoverComponent {
    constructor(a, c, router, bs, bus) {
        this.a = a;
        this.c = c;
        this.router = router;
        this.bs = bs;
        this.bus = bus;
        this.cover = { id: "_new" };
        this.document_types = [];
        this.config = {
            search_params: [],
            table_fields: [{
                    label: "id",
                    field: "id",
                    classes: ""
                }, {
                    label: "description",
                    field: "description",
                    classes: ""
                }, {
                    label: "category",
                    field: "category",
                    classes: ""
                }, {
                    label: "sort",
                    field: "sort",
                    classes: ""
                }, {
                    label: "mandatory",
                    field: "mandatory",
                    classes: ""
                }, {
                    label: "action",
                    actions: [{ action: (row) => this.remove_doc_type(row.id), icon: "delete", class: "red" }
                    ],
                    classes: ""
                }]
        };
        this.params = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.a.snapshot.params.id == "_new") {
                this.new_cover();
            }
            else {
                this.load();
            }
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cover = yield this.c.get(this.a.snapshot.params.id);
        });
    }
    new_cover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = {
                dealer_id: this.a.snapshot.queryParams.dealer_id,
                brand_id: this.a.snapshot.queryParams.brand_id,
                service_id: this.a.snapshot.queryParams.service_id,
                market: this.a.snapshot.queryParams.market,
                username: Object(src_app_util__WEBPACK_IMPORTED_MODULE_1__["user"])()['name'],
                limit: 1000,
                available: true
            };
            let covers = yield this.c.list(params);
            this.cover = covers.length >= 1 ? covers[0] : yield this.c.post(params);
            ;
            this.router.navigate(['/covers/' + this.cover.id]);
        });
    }
    navigate() { }
    load_document_types() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.document_types = (yield this.c.get(this.a.snapshot.params.id)).document_types;
            return this.document_types;
        });
    }
    openBottomSheet() {
        this.bs.open(_add_doc_type_bottom_sheet_add_doc_type_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_3__["AddDocTypeBottomSheetComponent"], {
            panelClass: 'width-doc-type-bottom-sheet',
            data: { "id": this.a.snapshot.params.id, "doc_types": this.document_types }
        });
    }
    remove_doc_type(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.document_types = this.document_types.filter(d => d.id != id);
            yield this.c.put(this.a.snapshot.params.id, { "document_types": this.document_types });
            yield this.bus.publish(_bus_service__WEBPACK_IMPORTED_MODULE_2__["RELOAD_EVENT"]);
        });
    }
}
CoverComponent.ɵfac = function CoverComponent_Factory(t) { return new (t || CoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_cover_service__WEBPACK_IMPORTED_MODULE_6__["CoverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"])); };
CoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CoverComponent, selectors: [["app-cover"]], decls: 7, vars: 4, consts: [[3, "config", "params", "load", "navigate", 4, "ngIf"], ["mat-fab", "", "color", "primary", 2, "position", "fixed", "right", "5em", "bottom", "5em", 3, "click"], [3, "config", "params", "load", "navigate"]], template: function CoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CoverComponent_app_search_3_Template, 1, 4, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CoverComponent_Template_button_click_4_listener() { return ctx.openBottomSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "cover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cover.id != "_new");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]], pipes: [_t_pipe__WEBPACK_IMPORTED_MODULE_12__["TPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zgbR":
/*!*******************************!*\
  !*** ./src/app/limit.pipe.ts ***!
  \*******************************/
/*! exports provided: LimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitPipe", function() { return LimitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LimitPipe {
    transform(list, x) {
        if (!list) {
            return list;
        }
        return list.slice(0, x);
    }
}
LimitPipe.ɵfac = function LimitPipe_Factory(t) { return new (t || LimitPipe)(); };
LimitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "limit", type: LimitPipe, pure: true });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map