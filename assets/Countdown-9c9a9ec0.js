import{d as h,r as g,u as v,a as w,b as r,e as y,f as d,o as k,g as S,h as c,t as l,i as a,n as D,p as x,j as C}from"./index-5c26761d.js";const b=t=>(x("data-v-221fb425"),t=t(),C(),t),H=b(()=>c("p",{class:"remaining"}," Time Remaining ",-1)),I={class:"time"},Y={class:"until"},j=h({__name:"Countdown",props:{until:null},setup(t){const{until:o}=t,e=g(),{height:s}=v(),{height:n}=w(e),u=r(()=>`${s.value/2-n.value/2}px`),_=y(),i=d(o),p=i.format("YYYY/MM/DD"),m=r(()=>d.duration(i.diff(_.value)).format("DD[d] HH[h] mm[m] ss[s]"));return(f,B)=>(k(),S("div",{ref_key:"clock",ref:e,style:D({marginTop:a(u)})},[H,c("p",I,l(a(m)),1),c("p",Y," Until "+l(a(p)),1)],4))}});const z=(t,o)=>{const e=t.__vccOpts||t;for(const[s,n]of o)e[s]=n;return e},E=z(j,[["__scopeId","data-v-221fb425"]]);export{E as C};
