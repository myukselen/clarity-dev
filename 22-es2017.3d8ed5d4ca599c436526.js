(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Py4D:function(c,t,e){"use strict";e.r(t),e.d(t,"DatalistDemoModule",function(){return g});var o=e("ofXK"),l=e("3Pt+"),n=e("d+P8"),i=e("tyNb"),r=e("fXoL");function a(c,t){1&c&&r.ac(0,"option",18),2&c&&r.xc("value",t.$implicit+" dl 1")}function d(c,t){1&c&&r.ac(0,"option",18),2&c&&r.xc("value",t.$implicit+" dl 2")}function s(c,t){1&c&&r.ac(0,"option",18),2&c&&r.xc("value",t.$implicit+" dl 3")}function f(c,t){1&c&&(r.fc(0,"clr-control-error"),r.Rc(1,"This is required"),r.ec())}function u(c,t){1&c&&(r.fc(0,"clr-control-error"),r.Rc(1,"Must be at least 8 characters"),r.ec())}function p(c,t){1&c&&r.ac(0,"option",18),2&c&&r.xc("value",t.$implicit+" dl 4")}function m(c,t){1&c&&r.ac(0,"option",18),2&c&&r.xc("value",t.$implicit+" dl 5")}const b=i.c.forChild([{path:"",component:(()=>{class c{constructor(){this.disabled=!0,this.items=["Item1","Item2","Item3"],this.model=new l.g({item:new l.e("")}),this.vertical={one:"",two:"",three:"",four:""}}logIt(){console.log(this)}submit(){console.log(this.model)}}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=r.Sb({type:c,selectors:[["clr-datalist-demo"]],decls:75,vars:14,consts:[["list","pasta"],["id","pasta"],["clrForm","","clrLayout","vertical",3,"formGroup","submit"],["clrDatalistInput","","placeholder","Option","name","Option","autocomplete","off","formControlName","item"],["id","clr-custom-datalistid-1"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-sm","btn-primary",3,"click"],["clrForm","","clrLayout","horizontal"],["clrDatalistInput","","placeholder","No label, wrapper","name","Option2",3,"ngModel","ngModelChange"],["id","clr-custom-datalistid-2"],["clrDatalistInput","","placeholder","Full example","required","","name","Option3","minlength","8",3,"ngModel","ngModelChange"],["id","clr-custom-datalistid-3"],[4,"clrIfError"],["clrDatalistInput","","list","clr-custom-datalistid-4","placeholder","Full example","name","Option4","required","",3,"ngModel","disabled","ngModelChange"],["id","clr-custom-datalistid-4"],["clrForm",""],["clrDatalistInput","","placeholder","custom datalist id","name","Option5",3,"ngModel","ngModelChange"],[3,"value"]],template:function(c,t){1&c&&(r.fc(0,"h2"),r.Rc(1,"Native Datalist (non Clarity)"),r.ec(),r.ac(2,"input",0),r.fc(3,"datalist",1),r.fc(4,"option"),r.Rc(5,"Bavette"),r.ec(),r.fc(6,"option"),r.Rc(7,"Cannelloni"),r.ec(),r.fc(8,"option"),r.Rc(9,"Fiorentine"),r.ec(),r.fc(10,"option"),r.Rc(11,"Gnocchi"),r.ec(),r.fc(12,"option"),r.Rc(13,"Pappardelle"),r.ec(),r.fc(14,"option"),r.Rc(15,"Penne lisce"),r.ec(),r.fc(16,"option"),r.Rc(17,"Pici"),r.ec(),r.fc(18,"option"),r.Rc(19,"Rigatoni"),r.ec(),r.fc(20,"option"),r.Rc(21,"Spaghetti"),r.ec(),r.fc(22,"option"),r.Rc(23,"Tagliatelle"),r.ec(),r.ec(),r.fc(24,"h2"),r.Rc(25,"Vertical"),r.ec(),r.fc(26,"form",2),r.nc("submit",function(){return t.submit()}),r.fc(27,"clr-datalist-container"),r.fc(28,"label"),r.Rc(29,"Datalist - Reactive Form"),r.ec(),r.ac(30,"input",3),r.fc(31,"datalist",4),r.Pc(32,a,1,1,"option",5),r.ec(),r.ec(),r.fc(33,"button",6),r.nc("click",function(){return t.logIt()}),r.Rc(34,"Submit"),r.ec(),r.ec(),r.fc(35,"h2"),r.Rc(36,"Horizontal "),r.fc(37,"button",7),r.nc("click",function(){return t.disabled=!t.disabled}),r.Rc(38,"Toggle Disabled"),r.ec(),r.ec(),r.fc(39,"form",8),r.fc(40,"clr-datalist-container"),r.fc(41,"input",9),r.nc("ngModelChange",function(c){return t.vertical.one=c}),r.ec(),r.fc(42,"datalist",10),r.Pc(43,d,1,1,"option",5),r.ec(),r.ec(),r.fc(44,"clr-datalist-container"),r.fc(45,"label"),r.Rc(46,"Full example"),r.ec(),r.fc(47,"input",11),r.nc("ngModelChange",function(c){return t.vertical.two=c}),r.ec(),r.fc(48,"datalist",12),r.Pc(49,s,1,1,"option",5),r.ec(),r.fc(50,"clr-control-helper"),r.Rc(51,"Helper text"),r.ec(),r.Pc(52,f,2,0,"clr-control-error",13),r.Pc(53,u,2,0,"clr-control-error",13),r.ec(),r.fc(54,"clr-datalist-container"),r.fc(55,"label"),r.Rc(56,"Disabled"),r.ec(),r.fc(57,"input",14),r.nc("ngModelChange",function(c){return t.vertical.three=c}),r.ec(),r.fc(58,"datalist",15),r.Pc(59,p,1,1,"option",5),r.ec(),r.fc(60,"clr-control-helper"),r.Rc(61,"Helper text"),r.ec(),r.fc(62,"clr-control-error"),r.Rc(63,"There was an error"),r.ec(),r.ec(),r.ec(),r.fc(64,"h2"),r.Rc(65,"Uniq/default datalist id"),r.ec(),r.fc(66,"form",16),r.fc(67,"clr-datalist-container"),r.fc(68,"label"),r.Rc(69,"Custom datalist id"),r.ec(),r.fc(70,"input",17),r.nc("ngModelChange",function(c){return t.vertical.four=c}),r.ec(),r.fc(71,"datalist"),r.Pc(72,m,1,1,"option",5),r.ec(),r.fc(73,"clr-control-helper"),r.Rc(74,"Helper text"),r.ec(),r.ec(),r.ec()),2&c&&(r.Mb(26),r.xc("formGroup",t.model),r.Mb(6),r.xc("ngForOf",t.items),r.Mb(1),r.xc("disabled",t.model.invalid),r.Mb(8),r.xc("ngModel",t.vertical.one),r.Mb(2),r.xc("ngForOf",t.items),r.Mb(4),r.xc("ngModel",t.vertical.two),r.Mb(2),r.xc("ngForOf",t.items),r.Mb(3),r.xc("clrIfError","required"),r.Mb(1),r.xc("clrIfError","minlength"),r.Mb(4),r.xc("ngModel",t.vertical.three)("disabled",t.disabled),r.Mb(2),r.xc("ngForOf",t.items),r.Mb(11),r.xc("ngModel",t.vertical.four),r.Mb(2),r.xc("ngForOf",t.items))},directives:[n.W,l.r,l.B,l.C,l.n,n.kb,n.wb,l.h,n.X,n.vb,l.c,n.Y,l.m,l.f,o.n,l.o,l.p,l.x,l.k,n.y,n.pb,n.x],encapsulation:2}),c})()}]);let g=(()=>{class c{}return c.\u0275mod=r.Wb({type:c}),c.\u0275inj=r.Vb({factory:function(t){return new(t||c)},imports:[[o.c,l.j,l.w,n.c,b]]}),c})()}}]);