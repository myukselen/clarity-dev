!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{M7kc:function(t,l,c){"use strict";c.r(l),c.d(l,"ColorDemoModule",function(){return P});var h=c("ofXK"),s=c("tyNb"),a=c("fXoL"),o=c("d+P8");function n(e,t){if(1&e&&(a.dc(0),a.fc(1,"p",9),a.fc(2,"span"),a.Rc(3),a.ec(),a.ec(),a.cc()),2&e){var l=t.$implicit,c=a.qc().$implicit;a.Mb(1),a.Mc("background",l.hsl),a.Mb(1),a.Mc("color",l.on),a.Mb(1),a.Uc(" $clr-color-",c.name,"-",l.weight," ")}}function r(e,t){if(1&e&&(a.dc(0),a.fc(1,"p",9),a.fc(2,"span"),a.Rc(3),a.ec(),a.ec(),a.cc()),2&e){var l=t.$implicit,c=a.qc().$implicit;a.Mb(1),a.Mc("background",l.on),a.Mb(1),a.Mc("color",l.hsl),a.Mb(1),a.Uc(" $clr-color-",c.name,"-",l.weight," ")}}function i(e,t){if(1&e&&(a.fc(0,"div",6),a.fc(1,"div",7),a.fc(2,"h4"),a.Rc(3),a.ec(),a.Pc(4,n,4,6,"ng-container",8),a.fc(5,"h4"),a.Rc(6),a.ec(),a.Pc(7,r,4,6,"ng-container",8),a.ec(),a.ec()),2&e){var l=t.$implicit;a.Mb(3),a.Tc("",l.name," color"),a.Mb(1),a.xc("ngForOf",l.weights),a.Mb(2),a.Tc("",l.name," color ON"),a.Mb(1),a.xc("ngForOf",l.weights)}}function d(e,t){if(1&e&&(a.fc(0,"clr-tab-content"),a.fc(1,"div",4),a.Pc(2,i,8,4,"div",5),a.ec(),a.ec()),2&e){var l=a.qc();a.Mb(2),a.xc("ngForOf",l.clarityPalettes)}}function g(e,t){1&e&&a.ac(0,"div",15)}function f(e,t){1&e&&(a.fc(0,"span"),a.Rc(1,"A"),a.ec())}function u(e,t){if(1&e&&(a.dc(0),a.fc(1,"p",9),a.fc(2,"span",16),a.Rc(3,"A"),a.Pc(4,f,2,0,"span",14),a.ec(),a.fc(5,"span",17),a.Rc(6),a.rc(7,"uppercase"),a.ec(),a.ec(),a.cc()),2&e){var l=a.qc().$implicit;a.Mb(1),a.Mc("background-color",l.value),a.Qb("dark-text","dark"===l.text)("upsize",!!l.corePalette),a.Mb(3),a.xc("ngIf","mid"===l.text),a.Mb(2),a.Sc(a.sc(7,8,l.value))}}function v(e,t){if(1&e&&(a.dc(0),a.Pc(1,g,1,0,"div",13),a.Pc(2,u,8,10,"ng-container",14),a.cc()),2&e){var l=t.$implicit;a.Mb(1),a.xc("ngIf","divider"===l.value),a.Mb(1),a.xc("ngIf","divider"!==l.value)}}function w(e,t){if(1&e&&(a.fc(0,"div",12),a.fc(1,"div",7),a.Pc(2,v,3,2,"ng-container",8),a.ec(),a.ec()),2&e){var l=t.$implicit;a.Mb(2),a.xc("ngForOf",l.colors)}}function b(e,t){if(1&e&&(a.fc(0,"clr-tab-content",10),a.fc(1,"p"),a.Rc(2,"Colors that are twice as tall are part of the base color palette."),a.ec(),a.fc(3,"div",4),a.Pc(4,w,3,1,"div",11),a.ec(),a.ec()),2&e){var l=a.qc();a.Mb(4),a.xc("ngForOf",l.oldPalettes)}}var x,p,k,C=((x=function t(){e(this,t),this.oldPalettes=[{type:"purple",colors:[{value:"#390256",text:"light"},{value:"#50266b",text:"light"},{value:"#660092",text:"light"},{value:"#7620a3",text:"light"},{value:"#853fb3",text:"light"},{value:"#a065c6",text:"dark"},{value:"#bb8cd9",text:"dark"},{value:"#d5b3ec",text:"dark"},{value:"#f0d9ff",text:"dark"}]},{type:"actionBlue",colors:[{value:"#003666",text:"light"},{value:"#004981",text:"light"},{value:"#005c9b",text:"light"},{value:"#0079B8",text:"light",corePalette:!0},{value:"#0094d2",text:"dark"},{value:"#49afd9",text:"dark"},{value:"#89cbdf",text:"dark"},{value:"#a6d8e7",text:"dark"},{value:"#c5e5ef",text:"dark"},{value:"#e1f1f6",text:"dark"}]},{type:"darkBlue",colors:[{value:"#002538",text:"light"},{value:"#004a70",text:"light"},{value:"#006a91",text:"light"},{value:"divider"},{value:"#d9e4ea",text:"dark",corePalette:!0}]},{type:"jewelGreen",colors:[{value:"#013d32",text:"light"},{value:"#00594a",text:"light"},{value:"#05866f",text:"mid"},{value:"#00a98c",text:"dark"},{value:"#00c0a2",text:"dark"},{value:"#00d4b8",text:"dark"},{value:"#50e3cd",text:"dark"},{value:"#85eddd",text:"dark"},{value:"#bcf4ec",text:"dark"},{value:"#e0faf6",text:"dark"}]},{type:"green",colors:[{value:"#173a00",text:"light"},{value:"#1d5100",text:"light"},{value:"#266900",text:"light"},{value:"#2F8400",text:"light",corePalette:!0},{value:"#62a420",text:"mid"},{value:"#60b515",text:"dark"},{value:"#92cf5b",text:"dark"},{value:"#b7df94",text:"dark"},{value:"#dff0d0",text:"dark"}]},{type:"yellowsAndOranges",colors:[{value:"#fac400",text:"dark"},{value:"#ffdc0B",text:"dark"},{value:"#ffe967",text:"dark"},{value:"#fff899",text:"dark"},{value:"#fffadc",text:"dark"},{value:"divider"},{value:"#a34200",text:"light"},{value:"#c25400",text:"mid"},{value:"#eb8d00",text:"dark"},{value:"#feecb5",text:"dark"}]},{type:"moreOranges",colors:[{value:"#e64120",text:"dark"},{value:"#ff5500",text:"dark"},{value:"#ff6f01",text:"dark"},{value:"#ff9552",text:"dark"},{value:"#ffb688",text:"dark"},{value:"#ffd5ba",text:"dark"}]},{type:"reds",colors:[{value:"#a32100",text:"light"},{value:"#c92100",text:"light",corePalette:!0},{value:"#e12200",text:"light"},{value:"#ebafa6",text:"dark"},{value:"#f5dbd9",text:"dark"}]},{type:"neutrals",colors:[{value:"#000000",text:"light"},{value:"#313131",text:"light"},{value:"#565656",text:"light",corePalette:!0},{value:"#737373",text:"light"},{value:"#9a9a9a",text:"dark"},{value:"#cccccc",text:"dark"},{value:"#dddddd",text:"dark"},{value:"#eeeeee",text:"dark"},{value:"#fafafa",text:"dark",corePalette:!0},{value:"#ffffff",text:"dark"}]}],this.clarityPalettes=[{name:"neutral",weights:[{weight:0,hsl:"hsl(198, 0%, 100%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:50,hsl:"hsl(198, 0%, 98%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:100,hsl:"hsl(198, 0%, 95%)",on:"hsl(198, 0%, 0%)"},{weight:200,hsl:"hsl(198, 0%, 91%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:300,hsl:"hsl(198, 0%, 87%)",on:"hsl(198, 0%, 0%)"},{weight:400,hsl:"hsl(198, 0%, 80%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:500,hsl:"hsl(198, 0%, 70%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:600,hsl:"hsl(198, 0%, 55%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:700,hsl:"hsl(198, 0%, 40%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:800,hsl:"hsl(198, 0%, 27%)",on:"hsl(198, 0%, 100%)"},{weight:900,hsl:"hsl(198, 0%, 20%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:1e3,hsl:"hsl(198, 0%, 0%)",on:"hsl(198, 0%, 100%)",baseColor:!0}]},{name:"action",weights:[{weight:50,hsl:"hsl(198, 83%, 94%)",on:"hsl(198, 0%, 0%)"},{weight:100,hsl:"hsl(198, 81%, 88%)",on:"hsl(198, 0%, 0%)"},{weight:200,hsl:"hsl(198, 78%, 78%)",on:"hsl(198, 0%, 0%)"},{weight:300,hsl:"hsl(198, 69%, 69%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:400,hsl:"hsl(198, 66%, 57%)",on:"hsl(198, 0%, 0%)"},{weight:500,hsl:"hsl(198, 80%, 46%)",on:"hsl(198, 0%, 0%)"},{weight:600,hsl:"hsl(198, 100%, 32%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:700,hsl:"hsl(198, 100%, 28%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:800,hsl:"hsl(198, 100%, 24%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:900,hsl:"hsl(198, 100%, 21%)",on:"hsl(198, 0%, 100%)"},{weight:1e3,hsl:"hsl(198, 100%, 15%)",on:"hsl(198, 0%, 100%)",baseColor:!0}]},{name:"secondary-action",weights:[{weight:50,hsl:"hsl(282, 100%, 95%)",on:"hsl(198, 0%, 0%)"},{weight:100,hsl:"hsl(282, 59%, 87%)",on:"hsl(198, 0%, 0%)"},{weight:200,hsl:"hsl(282, 51%, 78%)",on:"hsl(198, 0%, 0%)"},{weight:300,hsl:"hsl(282, 45%, 70%)",on:"hsl(198, 0%, 0%)"},{weight:400,hsl:"hsl(282, 44%, 62%)",on:"hsl(198, 0%, 0%)"},{weight:500,hsl:"hsl(282, 43%, 54%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:600,hsl:"hsl(282, 50%, 45%)",on:"hsl(198, 0%, 100%)"},{weight:700,hsl:"hsl(282, 69%, 37%)",on:"hsl(198, 0%, 100%)"},{weight:800,hsl:"hsl(282, 100%, 29%)",on:"hsl(198, 0%, 100%)"},{weight:900,hsl:"hsl(282, 100%, 22%)",on:"hsl(198, 0%, 100%)"},{weight:1e3,hsl:"hsl(282, 100%, 14%)",on:"hsl(198, 0%, 100%)",baseColor:!0}]},{name:"danger",weights:[{weight:50,hsl:"hsl(9, 100%, 97%)",on:"hsl(198, 0%, 0%)"},{weight:100,hsl:"hsl(9, 95%, 92%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:200,hsl:"hsl(9, 91%, 86%)",on:"hsl(198, 0%, 0%)"},{weight:300,hsl:"hsl(9, 83%, 76%)",on:"hsl(198, 0%, 0%)"},{weight:400,hsl:"hsl(9, 85%, 67%)",on:"hsl(198, 0%, 0%)"},{weight:500,hsl:"hsl(9, 88%, 61%)",on:"hsl(198, 0%, 0%)"},{weight:600,hsl:"hsl(9, 92%, 50%)",on:"hsl(198, 0%, 0%)"},{weight:700,hsl:"hsl(9, 100%, 43%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:800,hsl:"hsl(9, 100%, 38%)",on:"hsl(198, 0%, 100%)"},{weight:900,hsl:"hsl(9, 100%, 30%)",on:"hsl(198, 0%, 100%)"},{weight:1e3,hsl:"hsl(9, 100%, 20%)",on:"hsl(198, 0%, 100%)"}]},{name:"warning",weights:[{weight:50,hsl:"hsl(48, 100%, 95%)",on:"hsl(198, 0%, 0%)"},{weight:100,hsl:"hsl(48, 100%, 89%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:200,hsl:"hsl(48, 100%, 83%)",on:"hsl(198, 0%, 0%)"},{weight:300,hsl:"hsl(48, 98%, 72%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:400,hsl:"hsl(48, 94%, 57%)",on:"hsl(198, 0%, 0%)"},{weight:500,hsl:"hsl(48, 95%, 48%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:600,hsl:"hsl(46, 100%, 45%)",on:"hsl(198, 0%, 0%)"},{weight:700,hsl:"hsl(43, 100%, 42%)",on:"hsl(198, 0%, 100%)"},{weight:800,hsl:"hsl(41, 100%, 36%)",on:"hsl(198, 0%, 100%)"},{weight:900,hsl:"hsl(38, 100%, 28%)",on:"hsl(198, 0%, 100%)"},{weight:1e3,hsl:"hsl(31, 100%, 19%)",on:"hsl(198, 0%, 100%)"}]},{name:"success",weights:[{weight:50,hsl:"hsl(93, 52%, 88%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:100,hsl:"hsl(93, 58%, 75%)",on:"hsl(198, 0%, 0%)"},{weight:200,hsl:"hsl(93, 76%, 49%)",on:"hsl(198, 0%, 0%)"},{weight:300,hsl:"hsl(93, 77%, 44%)",on:"hsl(198, 0%, 0%)"},{weight:400,hsl:"hsl(93, 79%, 40%)",on:"hsl(198, 0%, 0%)"},{weight:500,hsl:"hsl(93, 67%, 38%)",on:"hsl(198, 0%, 0%)",baseColor:!0},{weight:600,hsl:"hsl(93, 85%, 32%)",on:"hsl(198, 0%, 0%)"},{weight:700,hsl:"hsl(93, 100%, 26%)",on:"hsl(198, 0%, 100%)",baseColor:!0},{weight:800,hsl:"hsl(93, 100%, 21%)",on:"hsl(198, 0%, 100%)"},{weight:900,hsl:"hsl(93, 100%, 16%)",on:"hsl(198, 0%, 100%)"},{weight:1e3,hsl:"hsl(93, 100%, 13%)",on:"hsl(198, 0%, 100%)"}]}]}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=a.Sb({type:x,selectors:[["clr-color-palette"]],decls:9,vars:0,consts:[["clrTabLink",""],[4,"clrIfActive"],["clrTabLink","","id","link1"],["id","content1",4,"clrIfActive"],[1,"clr-row"],["class","clr-col-sm-6 clr-col-12",4,"ngFor","ngForOf"],[1,"clr-col-sm-6","clr-col-12"],[1,"card","card-block","card-swatch-block"],[4,"ngFor","ngForOf"],[1,"card-swatch"],["id","content1"],["class","clr-col-sm-6 clr-col-md-4 clr-col-12",4,"ngFor","ngForOf"],[1,"clr-col-sm-6","clr-col-md-4","clr-col-12"],["class","card-swatch-divider",4,"ngIf"],[4,"ngIf"],[1,"card-swatch-divider"],[1,"hex-contrast"],[1,"rgb-value"]],template:function(e,t){1&e&&(a.fc(0,"clr-tabs"),a.fc(1,"clr-tab"),a.fc(2,"button",0),a.Rc(3,"Clarity Colors (@3.0+)"),a.ec(),a.Pc(4,d,3,1,"clr-tab-content",1),a.ec(),a.fc(5,"clr-tab"),a.fc(6,"button",2),a.Rc(7,"Legacy Colors (@2.0 deprecated)"),a.ec(),a.Pc(8,b,5,1,"clr-tab-content",3),a.ec(),a.ec())},directives:[o.jc,o.hd,o.gc,o.ic,o.Wc,o.mb,o.hc,h.n,h.o],pipes:[h.x],styles:['.card-block[_ngcontent-%COMP%]{padding-bottom:0;overflow:hidden;padding-left:0;padding-right:0}.card-swatch[_ngcontent-%COMP%]{background:#ccc;color:#000;margin:0;font-size:.8rem}.card-swatch.upsize[_ngcontent-%COMP%]{padding-top:2.4rem}.card-swatch[_ngcontent-%COMP%]:after, .card-swatch[_ngcontent-%COMP%]:before{clear:both;display:table;content:""}.card-swatch[_ngcontent-%COMP%]   .hex-contrast[_ngcontent-%COMP%]{display:block;float:left}.card-swatch[_ngcontent-%COMP%]   .hex-contrast[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#000;padding-left:.15rem}.card-swatch[_ngcontent-%COMP%]   .rgb-value[_ngcontent-%COMP%]{display:block;float:right;font-size:.9em}.card-swatch[_ngcontent-%COMP%]:not(.dark-text){color:#fff}.card-swatch-block[_ngcontent-%COMP%]{padding:0;box-shadow:none;border:none}.card-swatch-divider[_ngcontent-%COMP%]{height:.6rem}']}),x),m=function(){return["./color-palette"]},M=s.c.forChild([{path:"",component:(p=function t(){e(this,t)},p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=a.Sb({type:p,selectors:[["clr-color-demo"]],decls:7,vars:2,consts:[[3,"routerLink"]],template:function(e,t){1&e&&(a.fc(0,"h2"),a.Rc(1,"Color"),a.ec(),a.fc(2,"ul"),a.fc(3,"li"),a.fc(4,"a",0),a.Rc(5,"Color Palette"),a.ec(),a.ec(),a.ec(),a.ac(6,"router-outlet")),2&e&&(a.Mb(4),a.xc("routerLink",a.Ac(1,m)))},directives:[s.b,s.d],encapsulation:2}),p),children:[{path:"",redirectTo:"color-palette",pathMatch:"full"},{path:"color-palette",component:C}]}]),P=((k=function t(){e(this,t)}).\u0275mod=a.Wb({type:k}),k.\u0275inj=a.Vb({factory:function(e){return new(e||k)},imports:[[h.c,M,o.c]]}),k)}}])}();