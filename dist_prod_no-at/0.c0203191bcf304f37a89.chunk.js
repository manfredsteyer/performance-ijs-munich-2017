webpackJsonp([0],{"+hen":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("eaRU"),o=n("/oeL"),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.flightService=t}return t.prototype.resolve=function(t,e){var n=t.params.id;return this.flightService.findById(n)},t=i([Object(o.Injectable)(),a("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}(),l=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=function(){function t(){}return t.prototype.canDeactivate=function(t,e,n){return t.CanExit()},t=l([Object(o.Injectable)()],t)}(),f=function(){function t(){}return t.validate=function(t){return function(e){return t.indexOf(e.value)>-1?{}:{city:!0}}},t.validateAsync=function(t){return function(e){return t.find(e.value,"").map(function(t){return t.length>0}).map(function(t){return t?{}:{asyncCity:!0}})}},t.validateRouteTrip=function(t){var e=t;return e.controls.from.value===e.controls.to.value?{roundTrip:!0}:{}},t}(),d=n("bm2B"),u=n("BkNc"),h=n("bKpL"),p=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(t,e,n){this.route=t,this.flightService=e,this.fb=n,this.dynamicMetaData=[{label:"Id",name:"id"},{label:"Date",name:"date"},{label:"Airport of Departure",name:"from"},{label:"Airport of Destination",name:"to"}],this.date=(new Date).toISOString(),this.warningDialog={show:!1,sender:null},this.form=this.fb.group({id:[""],from:["",[d.h.required,d.h.minLength(3),f.validate(["Graz","Hamburg","Berlin","Wien","Z\xfcrich","Kognito"])],[f.validateAsync(e)]],to:[""],date:[""]}),this.form.validator=d.h.compose([f.validateRouteTrip]),this.form.valueChanges.subscribe(function(t){console.debug("changes",t)})}return t.prototype.CanExit=function(){var t=this;return h.Observable.create(function(e){t.warningDialog.sender=e,t.warningDialog.show=!0})},t.prototype.decide=function(t){this.warningDialog.show=!1,this.warningDialog.sender.next(t),this.warningDialog.sender.complete()},t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){t.id=e.id,t.showDetails=e.showDetails}),this.route.data.subscribe(function(e){t.flight=e.flight,t.form.patchValue(t.flight)})},t.prototype.save=function(){var t=this.form.value;console.debug("changedFlight",t)},t=p([Object(o.Component)({selector:"app-flight-edit",template:n("htyn"),styles:[n("GiTV")]}),g("design:paramtypes",["function"==typeof(e=void 0!==u.a&&u.a)&&e||Object,"function"==typeof(i=void 0!==r.a&&r.a)&&i||Object,"function"==typeof(a=void 0!==d.a&&d.a)&&a||Object])],t);var e,i,a}(),m=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(){}return t.prototype.ngOnInit=function(){},t=m([Object(o.Component)({selector:"flight-booking",template:n("XTe7")}),b("design:paramtypes",[])],t)}(),j=n("dYiD"),O=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},D=function(){function t(t){this.authService=t,this.passenger=this.authService.userName}return t.prototype.ngOnInit=function(){},t=O([Object(o.Component)({selector:"passenger-search",template:'\n        \n        <div class="card">\n            <div class="header">\n                <h1 class="title">Passenger Search</h1>\n            </div>\n            <div class="content">\n                <form>\n                    <div class="form-group">\n                        <label>Passenger:</label>\n                        <input name="from" [(ngModel)]="passenger" class="form-control">\n                    </div>\n                    <div class="form-group">\n                        <button class="btn btn-default">Search</button>\n                    </div>\n                    <div>\n                        This is just a dummy page!\n                    </div>\n\n                </form>\n            </div>\n        </div>\n    '}),R("design:paramtypes",["function"==typeof(e=void 0!==j.a&&j.a)&&e||Object])],t);var e}(),x=n("qGBs"),w=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},I=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(){function t(t,e){this.flightEventService=t,this.flightService=e,this.from="Hamburg",this.to="Graz",this.basket={3:!0,5:!0}}return Object.defineProperty(t.prototype,"flights",{get:function(){return this.flightService.flights},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flights$",{get:function(){return this.flightService.flights$},enumerable:!0,configurable:!0}),t.prototype.search=function(){this.from&&this.to&&this.flightService.load(this.from,this.to)},t.prototype.select=function(t){this.selectedFlight=t,this.flightEventService.flightSelected.next(t)},t.prototype.delay=function(){this.flightService.delay()},t=w([Object(o.Component)({selector:"flight-search",template:n("I0OW"),styles:[n("8l9J")],providers:[r.a]}),I("design:paramtypes",["function"==typeof(e=void 0!==x.a&&x.a)&&e||Object,"function"==typeof(i=void 0!==r.a&&r.a)&&i||Object])],t);var e,i}(),C=[{path:"",component:y,children:[{path:"flight-search",component:_},{path:"passenger-search",component:D},{path:"flight-edit/:id",component:v,canDeactivate:[s],resolve:{flight:c}}]}],S=n("qbdv"),P=n("T2Au"),k=n("y5KD"),F=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},E=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},T=function(){function t(t,e){this.element=t,this.zone=e,this.selectedChange=new o.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.select=function(){this.selected=!0,this.selectedChange.next(!0)},t.prototype.deselect=function(){this.selected=!1,this.selectedChange.next(!1)},t.prototype.blink=function(){var t=this;return this.element.nativeElement.firstChild.style.backgroundColor="crimson",this.zone.runOutsideAngular(function(){setTimeout(function(){t.element.nativeElement.firstChild.style.backgroundColor="white"},1e3)}),null},F([Object(o.Input)(),E("design:type","function"==typeof(e=void 0!==k.Flight&&k.Flight)&&e||Object)],t.prototype,"item",void 0),F([Object(o.Input)(),E("design:type",Boolean)],t.prototype,"selected",void 0),F([Object(o.Output)(),E("design:type",Object)],t.prototype,"selectedChange",void 0),t=F([Object(o.Component)({selector:"flight-card",template:n("eo8G"),styles:[n("LhXt")]}),E("design:paramtypes",["function"==typeof(r=void 0!==o.ElementRef&&o.ElementRef)&&r||Object,"function"==typeof(i=void 0!==o.NgZone&&o.NgZone)&&i||Object])],t);var e,r,i}();n.d(e,"FlightBookingModule",function(){return N});var M=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},N=function(){function t(){}return t=M([Object(o.NgModule)({imports:[S.CommonModule,d.b,u.i.forChild(C),P.a,d.g],declarations:[D,_,v,y,T],providers:[c,s,r.a],exports:[_]})],t)}()},"8l9J":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"input.ng-invalid{border-left:5px solid #b22222}input.ng-valid{border-left:5px solid green}",""]),t.exports=t.exports.toString()},GiTV:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},I0OW:function(t,e){t.exports='\r\n\r\n\r\n<div class="card">\r\n\r\n<div class="header">\r\n    <h2 class="title">Flight Search</h2>\r\n</div>\r\n<div class="content">\r\n\r\n<form #f="ngForm" roundTrip>\r\n\r\n    <div class="form-group">\r\n        <label>From:</label>\r\n        <input \r\n            name="from" \r\n            [(ngModel)]="from" \r\n            class="form-control"\r\n            required\r\n            minlength="3"\r\n            maxlength="30"\r\n            asyncCity\r\n            city="Graz,Hamburg,Berlin,Z\xfcrich,Frankfurt,Wien,Flagranti"\r\n            pattern="[\\w\xf6\xe4\xfc\xdf\xd6\xc4\xdc]*">\r\n\r\n\r\n        <div *ngIf="f?.hasError(\'roundTrip\')">... RoundTrip ...</div>\r\n\r\n        <div *ngIf="!f?.controls[\'from\']?.valid">... Error ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'required\')">... Required ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'minlength\')">... MinLength ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'maxlength\')">... MaxLenth ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'pattern\')">... Pattern ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'city\')">... City ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'asyncCity\')">... asyncCity ...</div>\r\n        <div *ngIf="f?.controls[\'from\']?.pending">\r\n            <marquee>Validiere ...</marquee>\r\n        </div>\r\n        \r\n        \x3c!-- email, requiresTrue, min, max --\x3e\r\n    </div>\r\n    <div class="form-group">\r\n        <label>To:</label>\r\n        <input name="to" [(ngModel)]="to" class="form-control">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <button \r\n            class="btn btn-default"\r\n            (click)="search()" \r\n            [disabled]="!f?.valid">Search</button>\r\n\r\n        <button \r\n            class="btn btn-default"\r\n            (click)="delay()" \r\n            [disabled]="flights.length === 0">Delay</button>\r\n\r\n\r\n        </div>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n\r\n<div  class="row">\r\n\r\n    <div *ngFor="let f of flights$ | async" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\r\n            <flight-card \r\n                [item]="f" \r\n                [selected]="basket[f.id]"\r\n                (selectedChange)="basket[f.id] = $event"></flight-card>\r\n    </div>\r\n</div>\r\n\r\n\x3c!--\r\n<div class="card">\r\n\r\n    <table class="table table-contensed" *ngIf="flights.length > 0">\r\n        <thead>\r\n        <tr>\r\n            <th>Id</th>\r\n            <th>From</th>\r\n            <th>To</th>\r\n            <th>Date</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tr *ngFor="let f of flights" [class.active]="f === selectedFlight">\r\n            <td>{{f.id}}</td>\r\n            <td>{{f.from}}</td>\r\n            <td>{{f.to }}</td>\r\n            <td>{{f.date | date:\'dd.MM.yyyy HH:mm\'}}</td>\r\n            <td>\r\n                <a (click)="select(f)">Select</a> |\r\n                <a [routerLink]="[\'../flight-edit\', f.id]">Edit</a>\r\n            \r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n--\x3e\r\n\r\n<div class="card">\r\n    <div class="content">\r\n        <pre>{{ basket | json }}</pre>\r\n    </div>\r\n</div>\r\n\r\n\r\n'},LhXt:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},XTe7:function(t,e){t.exports='\r\n\x3c!-- Menu --\x3e\r\n<div class="card">\r\n    <div class="content">\r\n        <ul class="nav nav-pills">\r\n            <li><a [routerLink]="[\'./flight-search\']">Flight Search</a></li>\r\n            <li><a [routerLink]="[\'./passenger-search\']">Passenger Search</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n'},eo8G:function(t,e){t.exports='<div \n   class="card"\n   [ngStyle]="{\'background-color\': (selected) ?  \'rgb(204, 197, 185)\' : \'white\' }">\n\n<div class="header">\n    <h2 class="title">{{item.from}} - {{item.to}}</h2>\n</div>\n<div class="content">\n        <p>Flight-No.: #{{item.id}}</p>\n        <p>Date: {{item.date | date:\'dd.MM.yyyy HH:mm\'}}</p>\n            <p>\n            <button\n                class="btn btn-default"\n                *ngIf="!selected"\n                (click)="select()"\n            >Select</button>\n            <button\n                class="btn btn-default"\n                *ngIf="selected" \n                (click)="deselect()"\n            >Remove</button>   \n    \n            <a class="btn btn-default" [routerLink]="[\'../flight-edit\', item.id, {showDetails: true}]">Edit</a>\n        </p>\n    \n</div>\n</div>\n\n{{ blink() }}'},htyn:function(t,e){t.exports='\n\n\n<div class="card">\n    <div class="header">\n        <h1 class="title">Flight Edit</h1>\n    </div>\n    <div class="content">\n\n    <div *ngIf="warningDialog.show" class="alert alert-warning" >\n            <div>\n                Unsaved data. Do you really want to leave?\n            </div>\n            <p>&nbsp;</p>\n            <div>\n                <a href="javascript:void(0)" (click)="decide(true)" class="btn btn-danger">Yes</a>\n                <a href="javascript:void(0)" (click)="decide(false)" class="btn btn-default">No</a>\n            </div>\n        </div>\n\n        <p>Id: {{id}}</p>\n        <p>ShowDetails: {{showDetails}}</p>\n\n        <form [formGroup]="form">\n\n\n            <h2>Dynamic Form</h2>\n\n            <div class="form-group" *ngFor="let entry of dynamicMetaData">\n                    <label>{{entry.label}}</label>\n                    <input [formControlName]="entry.name" name="id" class="form-control">\n            </div>\n    \n\n\n            <h2>Static Form</h2>\n\n            <div *ngIf="!form.valid"><pre>{{form.errors | json}}</pre></div>\n\n            <div class="form-group">\n                <label>Id:</label>\n                <input formControlName="id" name="id" class="form-control">\n            </div>\n            <div class="form-group">\n                <label>From:</label>\n                <input formControlName="from" class="form-control">\n\n                <div *ngIf="!form.controls[\'from\'].valid">... Fehler ... </div>\n                <div *ngIf="!form.controls[\'from\'].valid"><pre>{{ form.controls[\'from\'].errors | json }}</pre> </div>\n\n            </div>\n            <div class="form-group">\n                <label>To:</label>\n                <input formControlName="to" name="to" class="form-control">\n            </div>\n            <div class="form-group">\n                <label>Date:</label>\n                <date-control formControlName="date" name="date"></date-control>\n            </div>\n\n        </form>\n        <pre>{{ flight | json }}</pre>\n    </div>\n\n</div>\n\n'},y5KD:function(t,e){}});