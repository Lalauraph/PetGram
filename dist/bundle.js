(()=>{"use strict";var e={799:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(601),r=i.n(n),o=i(314),c=i.n(o)()(r());c.push([e.id,"* {\n\tbackground-color: orange;\n}\n",""]);const a=c},826:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(601),r=i.n(n),o=i(314),c=i.n(o)()(r());c.push([e.id,"",""]);const a=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);n&&c[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},601:e=>{e.exports=function(e){return e[1]}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const n=[{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127},{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127},{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127},{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127}],r=[{profilePic:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",name:"Toby"}];var o,c=i(799);!function(e){e.profilePic="profilePic",e.name="name"}(o||(o={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({profilePic:null,name:null})}connectedCallback(){this.render()}attributeChangedCallback(e,t,i){switch(e){case o.profilePic:this.profilePic=i;break;case o.name:this.name=i}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <style>\n          ${c.A}\n        </style>\n        <section class="top-banner">\n          <div class="user">\n            <img class="Profile-Pic" src="${this.profilePic}" alt="Profile Pic">\n\t\t\t\t\t\t<h3>${this.name}</h3>\n          </div>\n        </section>\n      `)}}customElements.define("profile-banner",a);var s,l=i(826);!function(e){e.profilePicture="profilePicture",e.postPicture="postPicture",e.name="name",e.breed="breed",e.caption="caption",e.likes="likes"}(s||(s={}));class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({profilePicture:null,postPicture:null,name:null,breed:null,caption:null,likes:null})}connectedCallback(){this.render()}attributeChangedCallback(e,t,i){e===s.likes?this.likes=i?Number(i):void 0:this[e]=i,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t<style>\n          ${l.A}\n        </style>\n              <section class="post-card">\n\t\t\t\t\t\t\t<img class="Profile-Picture" src="${this.profilePicture}" alt="Profile Picture">\n              <img class="Post-Picture" src="${this.postPicture}" alt="Post Picture">\n              <h1>${this.name}</h1>\n              <h1>${this.breed}</h1>\n              <h1>${this.caption}</h1>\n              <h1>${this.likes}</h1>\n          `)}}customElements.define("post-card",p);class d extends HTMLElement{constructor(){super(),this.postCard=[],this.profileBanner=[],this.attachShadow({mode:"open"}),r.forEach((e=>{const t=document.createElement("profile-banner");t.profilePic=e.profilePic,t.name=e.name,this.profileBanner.push(t)})),n.forEach((e=>{const t=document.createElement("post-card");t.profilePicture=e.profilePicture,t.postPicture=e.postPicture,t.name=e.name,t.breed=e.breed,t.caption=e.caption,this.postCard.push(t)}))}connectedCallback(){this.renderizar()}renderizar(){this.shadowRoot&&(this.profileBanner.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})),this.postCard.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})))}}customElements.define("app-container",d)})();