import{u as f}from"./vue-router.d2191ded.js";import{k as d,q as _,y as o,z as t,I as p,a as y,E as v,x as r,A as l,u as w,B as n,F as x,J as N}from"./@vue.40bd5dcf.js";import{N as g,d as C}from"./index.b3e3cc53.js";import{b as k,Y as D}from"./@firebase.80835a34.js";import"./pinia.1e922daa.js";import"./firebase.32384bd0.js";import"./bootstrap.f0de601a.js";import"./@popperjs.2eb7191b.js";import"./tslib.285d8b56.js";const V={key:0,class:"card",style:{width:"70%"}},B={class:"row"},E={class:"col-sm"},S=["src"],$={class:"col"},j={class:"card-body"},F={class:"form-group row"},I=o("label",{class:"col-sm-3 col-label text-end"},"Compa\xF1ia:",-1),O={class:"col-sm-8"},R={class:"card-title",style:{"font-family":"'Courier New'"}},Y={class:"form-group row"},q=o("label",{class:"col-sm-3 col-label text-end"},"Obra:",-1),z={class:"col-sm-8"},A={class:"card-title",style:{"font-family":"'Courier New'"}},J={class:"form-group row"},M=o("label",{class:"col-sm-3 col-label text-end"},"Duraci\xF3n:",-1),T={class:"col-sm-8"},G={class:"card-title",style:{"font-family":"'Courier New'"}},H={class:"form-group row"},K=o("label",{class:"col-sm-3 col-label text-end"},"Director:",-1),L={class:"col-sm-8"},P={class:"card-title",style:{"font-family":"'Courier New'"}},Q={class:"form-group row"},U=o("label",{class:"col-sm-3 col-label text-end"},"Elenco:",-1),W={class:"col-sm-8"},X={class:"card-title",style:{"font-family":"'Courier New'"}},Z={class:"form-group row"},oo=o("label",{class:"col-sm-3 col-label text-end"},"Enlace:",-1),so={class:"col-sm-8"},to={class:"card-title",style:{"font-family":"'Courier New'"}},eo=o("br",null,null,-1),co=o("div",{class:"text-center"},[o("label",{class:"fw-bold"},"Sinpose:")],-1),lo=o("br",null,null,-1),ao={class:"card-title",style:{"font-family":"'Courier New'"}},io={props:{obra:{type:Object}},setup(s){return(m,a)=>s.obra?(d(),_("div",V,[o("div",B,[o("div",E,[o("img",{src:s.obra.photo,class:"card-img-top",alt:""},null,8,S)]),o("div",$,[o("div",j,[o("div",F,[I,o("div",O,[o("p",R,t(s.obra.company),1)])]),o("div",Y,[q,o("div",z,[o("p",A,t(s.obra.title),1)])]),o("div",J,[M,o("div",T,[o("p",G,t(s.obra.time),1)])]),o("div",H,[K,o("div",L,[o("p",P,t(s.obra.director),1)])]),o("div",Q,[U,o("div",W,[o("p",X,t(s.obra.cast),1)])]),o("div",Z,[oo,o("div",so,[o("p",to,t(s.obra.link),1)])]),eo,co,lo,o("p",ao,t(s.obra.synopsis),1)])])])])):p("",!0)}},ro={class:"row justify-content-center"},no=N("Volver"),wo={setup(s){const a=f().params.id,e=y({obra:null});async function u(){const i=k(C,"obras",a),c=await D(i);c.exists()?(e.obra=c.data(),e.obra.id=c.id,console.log(e.obra)):console.log("\xA1No existe el documento!")}return v(()=>{u()}),(i,c)=>{const b=r("router-link"),h=r("dir");return d(),_(x,null,[l(g),o("div",ro,[l(io,{obra:w(e).obra},null,8,["obra"])]),l(h,{class:"text-center"},{default:n(()=>[l(b,{class:"btn btn-primary",to:"/"},{default:n(()=>[no]),_:1})]),_:1})],64)}}};export{wo as default};