import{S as p,i as g,s as _,k as y,l as $,m as w,h as f,p as l,n as i,V as d,b,L as v,D as m,o as x,aa as I,y as N,z as F,A as D,g as E,d as H,B as S}from"../chunks/index.3d994e0d.js";import{b as h}from"../chunks/paths.f6cc6891.js";function q(s){let e,r,t,a;return{c(){e=y("iframe"),this.h()},l(n){e=$(n,"IFRAME",{style:!0,title:!0,id:!0,src:!0,width:!0,frameborder:!0,scrolling:!0}),w(e).forEach(f),this.h()},h(){l(e,"min-height","calc(100vh - 71.99px)"),l(e,"opacity",s[1]?1:0),l(e,"transition","opacity 0.5s ease-in-out}"),i(e,"title","doc"),i(e,"id","doc"),d(e.src,r=`${h}/docs/${s[0]}/index.html`)||i(e,"src",r),i(e,"width","100%"),i(e,"frameborder","0"),i(e,"scrolling","no")},m(n,o){b(n,e,o),t||(a=v(window,"resize",s[2]),t=!0)},p(n,[o]){o&2&&l(e,"opacity",n[1]?1:0),o&1&&!d(e.src,r=`${h}/docs/${n[0]}/index.html`)&&i(e,"src",r)},i:m,o:m,d(n){n&&f(e),t=!1,a()}}}function z(){return document.getElementById("doc")}function A(s,e,r){let{repoName:t=""}=e,a,n=!1;function o(){const c=z();if(c.contentWindow){try{const u=c.contentWindow.document.body.scrollHeight;c.style.height=`${u+80}px`}catch{console.error("Failed to set iframe's height");return}r(1,n=!0)}}return x(()=>{o(),a=setInterval(()=>{o()},1e3)}),I(()=>{clearInterval(a)}),s.$$set=c=>{"repoName"in c&&r(0,t=c.repoName)},[t,n,o]}class B extends p{constructor(e){super(),g(this,e,A,q,_,{repoName:0})}}function M(s){let e,r;return e=new B({props:{repoName:"svelte-entity-store"}}),{c(){N(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){D(e,t,a),r=!0},p:m,i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){H(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}class C extends p{constructor(e){super(),g(this,e,null,M,_,{})}}export{C as component};