import{o as d,c as _,a as s,t,b as f,u as y,r as v,d as p,e as n,f as l,N as w,g as x,w as r,F as g,h as N,Y as C,i as k,j as D}from"./index.1a1c0c2e.js";const V={key:0,class:"card",style:{width:"70%"}},j={class:"row"},B={class:"col-sm"},E=["src"],S={class:"col"},$={class:"card-body"},F={class:"form-group row"},O=s("label",{class:"col-sm-3 col-label text-end"},"Compa\xF1ia:",-1),R={class:"col-sm-8"},Y={class:"card-title",style:{"font-family":"'Courier New'"}},I={class:"form-group row"},M=s("label",{class:"col-sm-3 col-label text-end"},"Obra:",-1),T={class:"col-sm-8"},q={class:"card-title",style:{"font-family":"'Courier New'"}},z={class:"form-group row"},A=s("label",{class:"col-sm-3 col-label text-end"},"Duraci\xF3n:",-1),G={class:"col-sm-8"},H={class:"card-title",style:{"font-family":"'Courier New'"}},J={class:"form-group row"},K=s("label",{class:"col-sm-3 col-label text-end"},"Director:",-1),L={class:"col-sm-8"},P={class:"card-title",style:{"font-family":"'Courier New'"}},Q={class:"form-group row"},U=s("label",{class:"col-sm-3 col-label text-end"},"Elenco:",-1),W={class:"col-sm-8"},X={class:"card-title",style:{"font-family":"'Courier New'"}},Z={class:"form-group row"},ss=s("label",{class:"col-sm-3 col-label text-end"},"Enlace:",-1),os={class:"col-sm-8"},ts={class:"card-title",style:{"font-family":"'Courier New'"}},es=s("br",null,null,-1),cs=s("div",{class:"text-center"},[s("label",{class:"fw-bold"},"Sinpose:")],-1),ls=s("br",null,null,-1),as={class:"card-title",style:{"font-family":"'Courier New'"}},is={props:{obra:{type:Object}},setup(o){return(m,a)=>o.obra?(d(),_("div",V,[s("div",j,[s("div",B,[s("img",{src:o.obra.photo,class:"card-img-top",alt:""},null,8,E)]),s("div",S,[s("div",$,[s("div",F,[O,s("div",R,[s("p",Y,t(o.obra.company),1)])]),s("div",I,[M,s("div",T,[s("p",q,t(o.obra.title),1)])]),s("div",z,[A,s("div",G,[s("p",H,t(o.obra.time),1)])]),s("div",J,[K,s("div",L,[s("p",P,t(o.obra.director),1)])]),s("div",Q,[U,s("div",W,[s("p",X,t(o.obra.cast),1)])]),s("div",Z,[ss,s("div",os,[s("p",ts,t(o.obra.link),1)])]),es,cs,ls,s("p",as,t(o.obra.synopsis),1)])])])])):f("",!0)}},ns={class:"row justify-content-center"},rs=k("Volver"),_s={setup(o){const a=y().params.id,e=v({obra:null});async function u(){const i=N(D,"obras",a),c=await C(i);c.exists()?(e.obra=c.data(),e.obra.id=c.id,console.log(e.obra)):console.log("\xA1No existe el documento!")}return p(()=>{u()}),(i,c)=>{const b=n("router-link"),h=n("dir");return d(),_(g,null,[l(w),s("div",ns,[l(is,{obra:x(e).obra},null,8,["obra"])]),l(h,{class:"text-center"},{default:r(()=>[l(b,{class:"btn btn-primary",to:"/"},{default:r(()=>[rs]),_:1})]),_:1})],64)}}};export{_s as default};
