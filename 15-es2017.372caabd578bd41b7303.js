(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+2vy":function(t,c,n){"use strict";n.r(c),n.d(c,"ButtonsDemoModule",function(){return M});var e=n("ofXK"),b=n("d+P8"),o=n("tyNb"),s=n("fXoL");let a=(()=>{class t{constructor(){this.validateState=b.zb.DEFAULT,this.submitState=b.zb.DEFAULT,this.disabledState=b.zb.DEFAULT,this.enabledState=b.zb.DEFAULT,this.disabledStateDisabled=!1,this.enabledStateDisabled=!1,this.validateSmState=!1,this.submitSmState=b.zb.DEFAULT}disabledDemo(){this.disabledState=b.zb.LOADING,setTimeout(()=>{this.disabledState=b.zb.SUCCESS,this.disabledStateDisabled=!0},1500)}enabledDemo(){this.enabledState=b.zb.LOADING,setTimeout(()=>{this.enabledState=b.zb.SUCCESS,this.enabledStateDisabled=!1},1500)}validateDemo(){this.validateState=b.zb.LOADING,setTimeout(()=>{this.validateState=b.zb.SUCCESS},1500)}submitDemo(){this.submitState=b.zb.LOADING,setTimeout(()=>{this.submitState=b.zb.DEFAULT},1500)}validateSmDemo(){this.validateSmState=!0,setTimeout(()=>{this.validateSmState=!1},1500)}submitSmDemo(){this.submitSmState=b.zb.LOADING,setTimeout(()=>{this.submitSmState=b.zb.DEFAULT},1500)}validateFalsyDemo(){this.validateFalsyState=!0,setTimeout(()=>{this.validateFalsyState=null},1500)}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-button-loading"]],decls:20,vars:9,consts:[[1,"btn","btn-primary",3,"clrLoading","click"],["type","submit",1,"btn","btn-success-outline",3,"clrLoading","click"],["type","submit",1,"btn","btn-primary",3,"clrLoading","disabled","click"],[1,"btn","btn-sm","btn-info-outline",3,"clrLoading","click"],["type","submit",1,"btn","btn-sm","btn-success-outline",3,"clrLoading","click"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Loading Buttons"),s.ec(),s.fc(2,"button",0),s.nc("click",function(){return c.validateDemo()}),s.Rc(3,"Validate"),s.ec(),s.fc(4,"button",1),s.nc("click",function(){return c.submitDemo()}),s.Rc(5,"Submit"),s.ec(),s.fc(6,"h4"),s.Rc(7,"Loading Buttons with Disabled Input"),s.ec(),s.fc(8,"button",2),s.nc("click",function(){return c.disabledDemo()}),s.Rc(9," Disable After Success\n"),s.ec(),s.fc(10,"button",2),s.nc("click",function(){return c.enabledDemo()}),s.Rc(11," Enable After Success\n"),s.ec(),s.fc(12,"h4"),s.Rc(13,"Small Loading Buttons"),s.ec(),s.fc(14,"button",3),s.nc("click",function(){return c.validateSmDemo()}),s.Rc(15,"Validate"),s.ec(),s.fc(16,"button",4),s.nc("click",function(){return c.submitSmDemo()}),s.Rc(17," Submit\n"),s.ec(),s.fc(18,"button",3),s.nc("click",function(){return c.validateFalsyDemo()}),s.Rc(19," Validate\n"),s.ec()),2&t&&(s.Mb(2),s.xc("clrLoading",c.validateState),s.Mb(2),s.xc("clrLoading",c.submitState),s.Mb(4),s.xc("clrLoading",c.disabledState)("disabled",c.disabledStateDisabled),s.Mb(2),s.xc("clrLoading",c.enabledState)("disabled",c.enabledStateDisabled),s.Mb(4),s.xc("clrLoading",c.validateSmState),s.Mb(2),s.xc("clrLoading",c.submitSmState),s.Mb(2),s.xc("clrLoading",c.validateFalsyState))},directives:[b.yb,b.xb],styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),i=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-button-sizes"]],decls:38,vars:0,consts:[["type","submit",1,"btn"],["type","submit",1,"btn","btn-primary"],["type","submit",1,"btn","btn-success"],["type","submit",1,"btn","btn-info"],["type","submit",1,"btn","btn-warning"],["type","submit",1,"btn","btn-danger"],["type","submit","disabled","",1,"btn"],["type","submit",1,"btn","btn-sm"],["type","submit",1,"btn","btn-primary","btn-sm"],["type","submit",1,"btn","btn-success","btn-sm"],["type","submit",1,"btn","btn-info","btn-sm"],["type","submit",1,"btn","btn-warning","btn-sm"],["type","submit",1,"btn","btn-danger","btn-sm"],["type","submit","disabled","",1,"btn","btn-sm"],["type","submit",1,"btn","btn-primary","btn-block"],["type","submit",1,"btn","btn-success","btn-block"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Normal"),s.ec(),s.fc(2,"button",0),s.Rc(3,"Regular"),s.ec(),s.fc(4,"button",1),s.Rc(5,"Primary"),s.ec(),s.fc(6,"button",2),s.Rc(7,"Success"),s.ec(),s.fc(8,"button",3),s.Rc(9,"Info"),s.ec(),s.fc(10,"button",4),s.Rc(11,"Warning"),s.ec(),s.fc(12,"button",5),s.Rc(13,"Danger"),s.ec(),s.fc(14,"button",6),s.Rc(15,"Disabled"),s.ec(),s.fc(16,"h4"),s.Rc(17,"Small"),s.ec(),s.fc(18,"button",7),s.Rc(19,"Regular"),s.ec(),s.fc(20,"button",8),s.Rc(21,"Primary"),s.ec(),s.fc(22,"button",9),s.Rc(23,"Success"),s.ec(),s.fc(24,"button",10),s.Rc(25,"Info"),s.ec(),s.fc(26,"button",11),s.Rc(27,"Warning"),s.ec(),s.fc(28,"button",12),s.Rc(29,"Danger"),s.ec(),s.fc(30,"button",13),s.Rc(31,"Disabled"),s.ec(),s.fc(32,"h4"),s.Rc(33,"Block"),s.ec(),s.fc(34,"button",14),s.Rc(35,"Primary"),s.ec(),s.fc(36,"button",15),s.Rc(37,"Success"),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),r=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-button-states"]],decls:14,vars:0,consts:[[1,"btn","btn-info-outline"],["type","submit",1,"btn","btn-success-outline"],[1,"btn","btn-danger-outline"],["type","submit",1,"btn","btn-success"],[1,"btn","btn-danger"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Info, Success and Danger Outline Buttons"),s.ec(),s.fc(2,"button",0),s.Rc(3,"Info"),s.ec(),s.fc(4,"button",1),s.Rc(5,"Success"),s.ec(),s.fc(6,"button",2),s.Rc(7,"Danger"),s.ec(),s.fc(8,"h4"),s.Rc(9,"Success and Danger Solid Buttons"),s.ec(),s.fc(10,"button",3),s.Rc(11,"Success"),s.ec(),s.fc(12,"button",4),s.Rc(13,"Danger"),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-button-icons"]],decls:9,vars:0,consts:[[1,"btn","btn-primary"],["shape","home"],["shape","folder"],["shape","cog"]],template:function(t,c){1&t&&(s.fc(0,"button",0),s.ac(1,"cds-icon",1),s.Rc(2," Home\n"),s.ec(),s.fc(3,"button",0),s.ac(4,"cds-icon",2),s.Rc(5," Directory\n"),s.ec(),s.fc(6,"button",0),s.ac(7,"cds-icon",3),s.Rc(8," Settings\n"),s.ec())},directives:[b.b],styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-buttons-test"]],decls:164,vars:0,consts:[[1,"alert","alert-warning"],[1,"alert-items"],[1,"alert-item","static"],[1,"alert-icon-wrapper"],["shape","exclamation-triangle",1,"alert-icon"],[1,"alert-text"],[1,"btn"],[1,"btn","btn-primary"],[1,"btn","btn-secondary"],[1,"btn","btn-warning"],[1,"btn","btn-danger"],[1,"btn","btn-success"],[1,"btn","btn-primary-outline"],[1,"btn","btn-secondary-outline"],[1,"btn","btn-warning-outline"],[1,"btn","btn-danger-outline"],[1,"btn","btn-success-outline"],[1,"btn","btn-outline-primary"],[1,"btn","btn-outline-secondary"],[1,"btn","btn-outline-warning"],[1,"btn","btn-outline-danger"],[1,"btn","btn-outline-success"],[1,"btn","btn-link"],[2,"background","#313131","padding","24px"],[1,"btn","btn-inverse"],["href","javascript://",1,"btn","btn-block"],[1,"btn","btn-sm","btn-primary"],[1,"btn","btn-sm","btn-secondary"],[1,"btn","btn-sm","btn-warning"],[1,"btn","btn-sm","btn-danger"],[1,"btn","btn-sm","btn-success"],[1,"btn","btn-sm","btn-primary-outline"],[1,"btn","btn-sm","btn-secondary-outline"],[1,"btn","btn-sm","btn-warning-outline"],[1,"btn","btn-sm","btn-danger-outline"],[1,"btn","btn-sm","btn-success-outline"],["href","javascript://",1,"btn"],["href","javascript://",1,"btn","btn-primary"],["href","javascript://",1,"btn","btn-secondary"],["href","javascript://",1,"btn","btn-warning"],["href","javascript://",1,"btn","btn-danger"],["href","javascript://",1,"btn","btn-success"],["href","javascript://",1,"btn","btn-primary-outline"],["href","javascript://",1,"btn","btn-secondary-outline"],["href","javascript://",1,"btn","btn-warning-outline"],["href","javascript://",1,"btn","btn-danger-outline"],["href","javascript://",1,"btn","btn-success-outline"],["href","javascript://",1,"btn","btn-outline-primary"],["href","javascript://",1,"btn","btn-outline-secondary"],["href","javascript://",1,"btn","btn-outline-warning"],["href","javascript://",1,"btn","btn-outline-danger"],["href","javascript://",1,"btn","btn-outline-success"],["href","javascript://",1,"btn","btn-link"],["href","javascript://",1,"btn","btn-inverse"],["href","https://www.google.com/","target","_block",1,"btn","btn-primary"],["href","https://www.google.com/","target","_block",1,"btn","btn-secondary"],["href","https://www.google.com/","target","_block",1,"btn","btn-warning"],["href","https://www.google.com/","target","_block",1,"btn","btn-danger"],["href","https://www.google.com/","target","_block",1,"btn","btn-success"],["href","https://www.google.com/","target","_block",1,"btn","btn-outline-primary"],["href","https://www.google.com/","target","_block",1,"btn","btn-outline-secondary"],["href","https://www.google.com/","target","_block",1,"btn","btn-outline-warning"],["href","https://www.google.com/","target","_block",1,"btn","btn-outline-danger"],["href","https://www.google.com/","target","_block",1,"btn","btn-outline-success"],["href","https://www.google.com/","target","_block",1,"btn","btn-link"],["href","https://www.google.com/","target","_block",1,"btn","btn-inverse"]],template:function(t,c){1&t&&(s.fc(0,"div",0),s.fc(1,"div",1),s.fc(2,"div",2),s.fc(3,"div",3),s.ac(4,"cds-icon",4),s.ec(),s.fc(5,"div",5),s.Rc(6," This page is for testing all button styles and anchor links styled as buttons. This page should not be published on the website. "),s.ec(),s.ec(),s.ec(),s.ec(),s.fc(7,"h6"),s.Rc(8,"Default Button"),s.ec(),s.fc(9,"button",6),s.Rc(10,"Default"),s.ec(),s.fc(11,"h6"),s.Rc(12,"Primary Buttons"),s.ec(),s.fc(13,"button",7),s.Rc(14,"Primary"),s.ec(),s.fc(15,"button",8),s.Rc(16,"Secondary"),s.ec(),s.fc(17,"button",9),s.Rc(18,"Warning"),s.ec(),s.fc(19,"button",10),s.Rc(20,"Danger"),s.ec(),s.fc(21,"button",11),s.Rc(22,"Success"),s.ec(),s.fc(23,"h6"),s.Rc(24,"Old Outline Buttons"),s.ec(),s.fc(25,"button",12),s.Rc(26,"Primary"),s.ec(),s.fc(27,"button",13),s.Rc(28,"Secondary"),s.ec(),s.fc(29,"button",14),s.Rc(30,"Warning"),s.ec(),s.fc(31,"button",15),s.Rc(32,"Danger"),s.ec(),s.fc(33,"button",16),s.Rc(34,"Success"),s.ec(),s.fc(35,"h6"),s.Rc(36,"New Outline Buttons"),s.ec(),s.fc(37,"button",17),s.Rc(38,"Primary"),s.ec(),s.fc(39,"button",18),s.Rc(40,"Secondary"),s.ec(),s.fc(41,"button",19),s.Rc(42,"Warning"),s.ec(),s.fc(43,"button",20),s.Rc(44,"Danger"),s.ec(),s.fc(45,"button",21),s.Rc(46,"Success"),s.ec(),s.fc(47,"h6"),s.Rc(48,"Link Buttons"),s.ec(),s.fc(49,"button",22),s.Rc(50,"Link Button"),s.ec(),s.fc(51,"h6"),s.Rc(52,"Inverse Buttons"),s.ec(),s.fc(53,"div",23),s.fc(54,"button",24),s.Rc(55,"Inverse"),s.ec(),s.ec(),s.fc(56,"h6"),s.Rc(57,"Block Buttons"),s.ec(),s.fc(58,"button",25),s.Rc(59,"Block Button"),s.ec(),s.fc(60,"h6"),s.Rc(61,"Small Primary Buttons"),s.ec(),s.fc(62,"button",26),s.Rc(63,"Primary"),s.ec(),s.fc(64,"button",27),s.Rc(65,"Secondary"),s.ec(),s.fc(66,"button",28),s.Rc(67,"Warning"),s.ec(),s.fc(68,"button",29),s.Rc(69,"Danger"),s.ec(),s.fc(70,"button",30),s.Rc(71,"Success"),s.ec(),s.fc(72,"h6"),s.Rc(73,"Small Outline Buttons"),s.ec(),s.fc(74,"button",31),s.Rc(75,"Primary"),s.ec(),s.fc(76,"button",32),s.Rc(77,"Secondary"),s.ec(),s.fc(78,"button",33),s.Rc(79,"Warning"),s.ec(),s.fc(80,"button",34),s.Rc(81,"Danger"),s.ec(),s.fc(82,"button",35),s.Rc(83,"Success"),s.ec(),s.fc(84,"h6"),s.Rc(85,"Default Link"),s.ec(),s.fc(86,"a",36),s.Rc(87,"Default"),s.ec(),s.fc(88,"h6"),s.Rc(89,"Primary Links"),s.ec(),s.fc(90,"a",37),s.Rc(91,"Primary"),s.ec(),s.fc(92,"a",38),s.Rc(93,"Secondary"),s.ec(),s.fc(94,"a",39),s.Rc(95,"Warning"),s.ec(),s.fc(96,"a",40),s.Rc(97,"Danger"),s.ec(),s.fc(98,"a",41),s.Rc(99,"Success"),s.ec(),s.fc(100,"h6"),s.Rc(101,"Old Outline Links"),s.ec(),s.fc(102,"a",42),s.Rc(103,"Primary"),s.ec(),s.fc(104,"a",43),s.Rc(105,"Secondary"),s.ec(),s.fc(106,"a",44),s.Rc(107,"Warning"),s.ec(),s.fc(108,"a",45),s.Rc(109,"Danger"),s.ec(),s.fc(110,"a",46),s.Rc(111,"Success"),s.ec(),s.fc(112,"h6"),s.Rc(113,"New Outline Links"),s.ec(),s.fc(114,"a",47),s.Rc(115,"Primary"),s.ec(),s.fc(116,"a",48),s.Rc(117,"Secondary"),s.ec(),s.fc(118,"a",49),s.Rc(119,"Warning"),s.ec(),s.fc(120,"a",50),s.Rc(121,"Danger"),s.ec(),s.fc(122,"a",51),s.Rc(123,"Success"),s.ec(),s.fc(124,"h6"),s.Rc(125,"Link Links"),s.ec(),s.fc(126,"a",52),s.Rc(127,"Link"),s.ec(),s.fc(128,"h6"),s.Rc(129,"Inverse Links"),s.ec(),s.fc(130,"div",23),s.fc(131,"a",53),s.Rc(132,"Inverse"),s.ec(),s.ec(),s.fc(133,"h6"),s.Rc(134,"Block Links"),s.ec(),s.fc(135,"a",25),s.Rc(136,"Block"),s.ec(),s.fc(137,"h6"),s.Rc(138,"Navigate to other websites"),s.ec(),s.fc(139,"a",54),s.Rc(140,"Google"),s.ec(),s.fc(141,"a",55),s.Rc(142,"Google"),s.ec(),s.fc(143,"a",56),s.Rc(144,"Google"),s.ec(),s.fc(145,"a",57),s.Rc(146,"Google"),s.ec(),s.fc(147,"a",58),s.Rc(148,"Google"),s.ec(),s.fc(149,"a",59),s.Rc(150,"Google"),s.ec(),s.fc(151,"a",60),s.Rc(152,"Google"),s.ec(),s.fc(153,"a",61),s.Rc(154,"Google"),s.ec(),s.fc(155,"a",62),s.Rc(156,"Google"),s.ec(),s.fc(157,"a",63),s.Rc(158,"Google"),s.ec(),s.fc(159,"a",64),s.Rc(160,"Google"),s.ec(),s.fc(161,"div",23),s.fc(162,"a",65),s.Rc(163,"Google"),s.ec(),s.ec())},directives:[b.b,b.l],styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})();const f=function(){return["./real-button"]},d=function(){return["./primary-button"]},m=function(){return["./secondary-button"]},p=function(){return["./tertiary-button"]},g=function(){return["./inverse-button"]},R=function(){return["./button-states"]},y=function(){return["./button-loading"]},h=function(){return["./button-sizes"]},S=function(){return["./icons"]},k=function(){return["./icon-buttons"]},v=function(){return["./buttons-test"]};let w=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo"]],decls:37,vars:22,consts:[[3,"routerLink"]],template:function(t,c){1&t&&(s.fc(0,"h2"),s.Rc(1,"Buttons"),s.ec(),s.fc(2,"ul"),s.fc(3,"li"),s.fc(4,"a",0),s.Rc(5,"Buttons"),s.ec(),s.ec(),s.fc(6,"li"),s.fc(7,"a",0),s.Rc(8,"Primary Buttons"),s.ec(),s.ec(),s.fc(9,"li"),s.fc(10,"a",0),s.Rc(11,"Secondary Buttons"),s.ec(),s.ec(),s.fc(12,"li"),s.fc(13,"a",0),s.Rc(14,"Tertiary Buttons"),s.ec(),s.ec(),s.fc(15,"li"),s.fc(16,"a",0),s.Rc(17,"Inverse Buttons"),s.ec(),s.ec(),s.fc(18,"li"),s.fc(19,"a",0),s.Rc(20,"Button States"),s.ec(),s.ec(),s.fc(21,"li"),s.fc(22,"a",0),s.Rc(23,"Loading Buttons"),s.ec(),s.ec(),s.fc(24,"li"),s.fc(25,"a",0),s.Rc(26,"Button Sizes"),s.ec(),s.ec(),s.fc(27,"li"),s.fc(28,"a",0),s.Rc(29,"Icons in Buttons"),s.ec(),s.ec(),s.fc(30,"li"),s.fc(31,"a",0),s.Rc(32,"Icon Buttons"),s.ec(),s.ec(),s.fc(33,"li"),s.fc(34,"a",0),s.Rc(35,"Buttons Test"),s.ec(),s.ec(),s.ec(),s.ac(36,"router-outlet")),2&t&&(s.Mb(4),s.xc("routerLink",s.Ac(11,f)),s.Mb(3),s.xc("routerLink",s.Ac(12,d)),s.Mb(3),s.xc("routerLink",s.Ac(13,m)),s.Mb(3),s.xc("routerLink",s.Ac(14,p)),s.Mb(3),s.xc("routerLink",s.Ac(15,g)),s.Mb(3),s.xc("routerLink",s.Ac(16,R)),s.Mb(3),s.xc("routerLink",s.Ac(17,y)),s.Mb(3),s.xc("routerLink",s.Ac(18,h)),s.Mb(3),s.xc("routerLink",s.Ac(19,S)),s.Mb(3),s.xc("routerLink",s.Ac(20,k)),s.Mb(3),s.xc("routerLink",s.Ac(21,v)))},directives:[o.b,o.d],styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-icon-buttons-demo"]],decls:41,vars:0,consts:[[1,"clr-example"],[1,"btn","btn-icon"],["shape","home"],[1,"btn","btn-primary","btn-icon"],[1,"btn","btn-success","btn-icon"],[1,"btn","btn-info","btn-icon"],[1,"btn","btn-warning","btn-icon"],[1,"btn","btn-danger","btn-icon"],["disabled","",1,"btn","btn-icon"],[1,"btn","btn-sm","btn-icon"],[1,"btn","btn-sm","btn-primary","btn-icon"],[1,"btn","btn-sm","btn-success","btn-icon"],[1,"btn","btn-sm","btn-info","btn-icon"],[1,"btn","btn-sm","btn-warning","btn-icon"],[1,"btn","btn-sm","btn-danger","btn-icon"],["disabled","",1,"btn","btn-sm","btn-icon"],[1,"btn","btn-link","btn-icon"],[1,"btn","btn-sm","btn-link","btn-icon"]],template:function(t,c){1&t&&(s.fc(0,"div",0),s.fc(1,"h4"),s.Rc(2,"Normal"),s.ec(),s.fc(3,"button",1),s.ac(4,"cds-icon",2),s.ec(),s.fc(5,"button",3),s.ac(6,"cds-icon",2),s.ec(),s.fc(7,"button",4),s.ac(8,"cds-icon",2),s.ec(),s.fc(9,"button",5),s.ac(10,"cds-icon",2),s.ec(),s.fc(11,"button",6),s.ac(12,"cds-icon",2),s.ec(),s.fc(13,"button",7),s.ac(14,"cds-icon",2),s.ec(),s.fc(15,"button",8),s.ac(16,"cds-icon",2),s.ec(),s.fc(17,"h4"),s.Rc(18,"Small"),s.ec(),s.fc(19,"button",9),s.ac(20,"cds-icon",2),s.ec(),s.fc(21,"button",10),s.ac(22,"cds-icon",2),s.ec(),s.fc(23,"button",11),s.ac(24,"cds-icon",2),s.ec(),s.fc(25,"button",12),s.ac(26,"cds-icon",2),s.ec(),s.fc(27,"button",13),s.ac(28,"cds-icon",2),s.ec(),s.fc(29,"button",14),s.ac(30,"cds-icon",2),s.ec(),s.fc(31,"button",15),s.ac(32,"cds-icon",2),s.ec(),s.fc(33,"h4"),s.Rc(34,"Link Normal"),s.ec(),s.fc(35,"button",16),s.ac(36,"cds-icon",2),s.ec(),s.fc(37,"h4"),s.Rc(38,"Link Small"),s.ec(),s.fc(39,"button",17),s.ac(40,"cds-icon",2),s.ec(),s.ec())},directives:[b.b],styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-inverse-button"]],decls:7,vars:0,consts:[[1,"btn-example"],["type","submit",1,"btn","btn-inverse"],["type","submit","disabled","",1,"btn","btn-inverse"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Inverse Button"),s.ec(),s.fc(2,"div",0),s.fc(3,"button",1),s.Rc(4,"Inverse"),s.ec(),s.fc(5,"button",2),s.Rc(6,"Disabled Inverse"),s.ec(),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-primary-button"]],decls:4,vars:0,consts:[["type","submit",1,"btn","btn-primary"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Primary Button"),s.ec(),s.fc(2,"button",0),s.Rc(3,"Primary"),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})();const x=o.c.forChild([{path:"",component:w,children:[{path:"",redirectTo:"real-button",pathMatch:"full"},{path:"real-button",component:(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-real-button"]],decls:36,vars:0,consts:[["type","submit",1,"btn","btn-primary"],["type","submit",1,"btn","btn-success"],["type","submit",1,"btn","btn-warning"],["type","submit",1,"btn","btn-danger"],["type","submit","disabled","",1,"btn","btn-danger"],["type","submit",1,"btn","btn-outline"],["type","submit",1,"btn","btn-success-outline"],["type","submit",1,"btn","btn-info-outline"],["type","submit",1,"btn","btn-warning-outline"],["type","submit",1,"btn","btn-danger-outline"],["type","submit","disabled","",1,"btn","btn-outline"],["type","submit",1,"btn","btn-link"],["type","submit","disabled","",1,"btn","btn-link"],["type","submit",1,"btn","btn-sm","btn-link"],["type","submit","disabled","",1,"btn","btn-sm","btn-link"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Solid Buttons"),s.ec(),s.fc(2,"button",0),s.Rc(3,"Primary"),s.ec(),s.fc(4,"button",1),s.Rc(5,"Success"),s.ec(),s.fc(6,"button",2),s.Rc(7,"Warning"),s.ec(),s.fc(8,"button",3),s.Rc(9,"Danger"),s.ec(),s.fc(10,"button",4),s.Rc(11,"Disabled"),s.ec(),s.fc(12,"h4"),s.Rc(13,"Outline Buttons"),s.ec(),s.fc(14,"button",5),s.Rc(15,"Regular"),s.ec(),s.fc(16,"button",6),s.Rc(17,"Success-Outline"),s.ec(),s.fc(18,"button",7),s.Rc(19,"Info"),s.ec(),s.fc(20,"button",8),s.Rc(21,"Warning"),s.ec(),s.fc(22,"button",9),s.Rc(23,"Danger"),s.ec(),s.fc(24,"button",10),s.Rc(25,"Disabled"),s.ec(),s.fc(26,"h4"),s.Rc(27,"Flat Buttons"),s.ec(),s.fc(28,"button",11),s.Rc(29,"Regular"),s.ec(),s.fc(30,"button",12),s.Rc(31,"Disabled"),s.ec(),s.fc(32,"button",13),s.Rc(33,"Regular"),s.ec(),s.fc(34,"button",14),s.Rc(35,"Disabled"),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})()},{path:"primary-button",component:B},{path:"secondary-button",component:(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-secondary-button"]],decls:4,vars:0,consts:[[1,"btn"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Secondary Button"),s.ec(),s.fc(2,"button",0),s.Rc(3,"Secondary"),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})()},{path:"tertiary-button",component:(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=s.Sb({type:t,selectors:[["clr-buttons-demo-tertiary-button"]],decls:6,vars:0,consts:[[1,"btn","btn-link"],["disabled","",1,"btn","btn-link"]],template:function(t,c){1&t&&(s.fc(0,"h4"),s.Rc(1,"Tertiary Button"),s.ec(),s.fc(2,"button",0),s.Rc(3,"Tertiary"),s.ec(),s.fc(4,"button",1),s.Rc(5,"Disabled"),s.ec())},styles:[".btn-example[_ngcontent-%COMP%]{background:#303030;padding:1.2rem}"]}),t})()},{path:"inverse-button",component:L},{path:"button-states",component:r},{path:"button-loading",component:a},{path:"button-sizes",component:i},{path:"buttons-test",component:l},{path:"icons",component:u},{path:"icon-buttons",component:D}]}]);let M=(()=>{class t{}return t.\u0275mod=s.Wb({type:t}),t.\u0275inj=s.Vb({factory:function(c){return new(c||t)},imports:[[e.c,b.c,x]]}),t})()}}]);