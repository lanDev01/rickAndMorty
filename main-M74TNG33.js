import{e as H,f as E,g as N}from"./chunk-L2OJII6W.js";import{A as i,E as T,H as d,J as _,N as n,O as p,P as s,Q as b,R as f,S as u,W as l,ca as y,da as w,ja as M,ka as P,ma as S,na as O,o as C,oa as L,p as h,qa as k,sa as D,ta as A,v as x,w as v}from"./chunk-KGPZSK6B.js";var F=[{path:"characters",loadComponent:()=>import("./chunk-HDN377DL.js").then(o=>o.CharacterListingComponent)},{path:"episodes",loadComponent:()=>import("./chunk-VMAMN2SH.js").then(o=>o.EpisodeListingComponent)},{path:"locations",loadComponent:()=>import("./chunk-7HRKATBE.js").then(o=>o.LocationListingComponent)},{path:"**",redirectTo:"characters"}];var R={providers:[w({eventCoalescing:!0}),A(F),S(O())]};var a=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=i({type:o,selectors:[["app-header"]],decls:13,vars:0,consts:[["src","assets/logo.png","alt","Logo"],["routerLink","/characters"],["routerLink","/episodes"],["routerLink","/locations"]],template:function(e,r){e&1&&(n(0,"header"),s(1,"img",0),n(2,"nav")(3,"ul")(4,"li")(5,"a",1),l(6,"Characters"),p()(),n(7,"li")(8,"a",2),l(9,"Episodes"),p()(),n(10,"li")(11,"a",3),l(12,"Locations"),p()()()()())},dependencies:[D],styles:['header[_ngcontent-%COMP%]{height:72px;width:100%;display:flex;align-items:center;justify-content:space-between;padding:0 24px;position:fixed;top:0;left:0;background:var(--shape);z-index:10}header[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--border),var(--red) 70%,var(--green))}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:62px}nav[_ngcontent-%COMP%]{display:flex;align-items:center}ul[_ngcontent-%COMP%]{display:flex;gap:16px;list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-body);text-decoration:none;font-size:1rem;font-weight:500;transition:color .2s;cursor:pointer}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-title)}']})};var U=o=>({show:o});function V(o,t){if(o&1){let e=b();n(0,"button",1),f("click",function(){C(e);let g=u();return h(g.scrollToTop())}),s(1,"lucide-icon",2),p()}if(o&2){let e=u();d("ngClass",y(2,U,e.showScrollToTop)),v(),d("name",e.chevronsUp)}}var c=class o{chevronsUp=H;showScrollToTop=!1;onScroll(t){let e=window.pageYOffset||document.documentElement.scrollTop;this.showScrollToTop=e>200}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=i({type:o,selectors:[["app-scroll-to-top"]],hostBindings:function(e,r){e&1&&f("scroll",function(I){return r.onScroll(I)},!1,x)},decls:1,vars:1,consts:[[1,"scroll-to-top",3,"ngClass"],[1,"scroll-to-top",3,"click","ngClass"],[3,"name"]],template:function(e,r){e&1&&T(0,V,2,4,"button",0),e&2&&_(r.showScrollToTop?0:-1)},dependencies:[P,M,N,E],styles:[".scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:56px;height:56px;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:8px;color:var(--text-title);background-color:var(--red);border:1px solid var(--border);-webkit-box-shadow:0px 6px 20px 0px rgba(37,37,41,.4);-moz-box-shadow:0px 6px 20px 0px rgba(37,37,41,.4);box-shadow:0 6px 20px #25252966;opacity:0;transform:scale(.8);transition:opacity .5s ease-in-out,transform .5s ease-in-out;z-index:1000}.scroll-to-top.show[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.scroll-to-top[_ngcontent-%COMP%]:hover{filter:brightness(.7);transform:scale(1.1)}"]})};var m=class o{title="rick-and-morty";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=i({type:o,selectors:[["app-root"]],decls:3,vars:0,template:function(e,r){e&1&&s(0,"app-header")(1,"router-outlet")(2,"app-scroll-to-top")},dependencies:[k,a,c],encapsulation:2})};L(m,R).catch(o=>console.error(o));
