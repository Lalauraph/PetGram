(()=>{"use strict";var n={999:(n,t,e)=>{e.d(t,{A:()=>a});var i=e(601),o=e.n(i),r=e(314),s=e.n(r)()(o());s.push([n.id,".welcome-message {\n    text-align: center; /* Centra todo el contenido */\n    padding: 20px 0; /* Espaciado superior e inferior */\n    font-family: 'Poppins', sans-serif; /* Tipografía */\n  }\n\n  .messageuser {\n    text-align: center; \n    padding: 5px 0; \n    font-family: 'Raspberie', serif; \n  }\n  \n  .message__user h2 {\n    font-size: 36px; /* Tamaño de la fuente */\n    font-weight: bold; /* Negrita */\n    color: #FF9C00; /* Color del texto naranja */\n    margin: 0;\n  }\n  \n  .message__user h2 span {\n    color: #48C0E0; /* Color del texto azul para el nombre */\n  }\n  \n  .message__user p {\n    font-size: 18px; /* Tamaño de la fuente */\n    font-weight: normal;\n    color: #333333; /* Color del texto */\n    margin-top: 5px; /* Margen entre el título y el texto secundario */\n  }\n  ",""]);const a=s},799:(n,t,e)=>{e.d(t,{A:()=>a});var i=e(601),o=e.n(i),r=e(314),s=e.n(r)()(o());s.push([n.id,".top-banner {\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: #AC6BC5; \n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0 20px; \n\tbox-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */\n  }\n  \n  .user {\n\tdisplay: flex;\n\talign-items: center;\n  }\n  \n  .Profile-Pic {\n\twidth: 60px; \n\theight: 60px;\n\tborder-radius: 50%;\n\tobject-fit: cover;\n\tborder: 7px solid #FFBB33; \n\tmargin-right: 15px; \n  }\n  \n  .user h3 {\n\tfont-size: 35px; \n\tcolor: white; \n\tfont-weight: 600;\n\tmargin: 0;\n  }\n  \n  .search-container {\n\tdisplay: flex;\n\talign-items: center;\n  }\n  \n  .search-bar {\n\twidth: 150px;\n\theight: 40px;\n\tborder-radius: 20px;\n\tborder: none;\n\tpadding-left: 20px;\n\tfont-size: 16px;\n  }\n  \n  .search-button {\n\tbackground-color: white;\n\tborder: none;\n\twidth: 40px;\n\theight: 40px;\n\tmargin-left: 10px;\n\tborder-radius: 50%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n\tfont-size: 18px;\n  }\n  ",""]);const a=s},875:(n,t,e)=>{e.d(t,{A:()=>a});var i=e(601),o=e.n(i),r=e(314),s=e.n(r)()(o());s.push([n.id,"\n#button-container {\n    width: 100%; \n    position: relative;\n    display: flex;\n    justify-content: center; \n    align-items: center; \n    padding: 20px 0; \n  }\n  \n  \n  .raya {\n    width: 100%; \n    height: 6px; \n    background-color: #F9B107; \n    position: absolute;\n    z-index: 0; \n  }\n  \n  \n  #addPostBtn {\n    background-color: #F9B107; \n    color: white; \n    font-family: 'Poppins', sans-serif; \n    font-size: 18px; \n    font-weight: bold; \n    padding: 15px 30px; \n    border: none; \n    border-radius: 50px; \n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); \n    cursor: pointer; \n    position: relative; \n    z-index: 1; \n    transition: background-color 0.3s ease; \n  }\n  \n  #addPostBtn:hover {\n    background-color: #4BACD7; \n  }\n  \n  #addPostBtn:active {\n    transform: scale(0.98); \n  }\n  ",""]);const a=s},826:(n,t,e)=>{e.d(t,{A:()=>a});var i=e(601),o=e.n(i),r=e(314),s=e.n(r)()(o());s.push([n.id,".post-card {\n  width: 880px; \n  height: auto; \n  border-radius: 10px;\n  overflow: hidden;\n  margin: 20px; \n  font-family: 'Arial', sans-serif;\n  background-color: #4BACD7;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); \n}\n\nheader {\n  width: 100%;\n  background-color: #4BACD7; \n  padding: 25px 35px; \n  display: flex;\n  justify-content: space-between; \n  align-items: center;\n}\n\n.user-info {\n  display: flex; \n  align-items: center;\n}\n\n.Profile-Picture {\n  width: 100px; \n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 10px solid #F9B107;\n}\n\n.nombre {\n  margin-left: 20px; \n  font-size: 26px; \n  color: white;\n}\n\n.raza {\n  font-size: 24px; \n  color: white;\n  margin-right: 50px; \n}\n\n.image-container {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.Post-Picture {\n  width: 100%; \n  height: 700px; \n  object-fit: cover; \n}\n\n.caption-container {\n  width: 100%;\n  background-color: #4BACD7;\n  padding: 25px 35px; \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n}\n\n.caption {\n  font-size: 24px; \n  color: white;\n  flex-grow: 1; \n}\n\n.likes {\n  display: flex;\n  align-items: center;\n  margin-left: 20px; \n  margin-right: 30px; \n}\n\n.likes img {\n  width: 30px; \n  margin-right: 12px;\n}\n\n.likes span {\n  font-size: 24px; \n  color: white;\n}\n\n.like-button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 45px; \n  color: white;\n  margin-left: 15px;\n}",""]);const a=s},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return n[i](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);const i=[{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127},{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127},{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127},{profilePicture:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",postPicture:"https://i.pinimg.com/564x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg",name:"Luna",breed:"Golden Retriever",caption:"Cute flowers for my mom",likes:127}],o=[{profilePic:"https://i.pinimg.com/564x/22/53/2a/22532a47c18040e966419fd3b4b8c761.jpg",name:"Toby"}];var r,s=e(799);!function(n){n.profilePic="profilePic",n.name="name"}(r||(r={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({profilePic:null,name:null})}connectedCallback(){this.render()}attributeChangedCallback(n,t,e){switch(n){case r.profilePic:this.profilePic=e;break;case r.name:this.name=e}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <style>\n          ${s.A}\n        </style>\n        <section class="top-banner">\n          <div class="user">\n            <img class="Profile-Pic" src="${this.profilePic}" alt="Profile Pic">\n\t\t\t\t\t\t<h3>${this.name}</h3>\n          </div>\n          <div class="search-container">\n            <input class="search-bar" type="text" placeholder="Search">\n            <button class="search-button">🔍</button>\n          </div>\n        </section>\n      `)}}customElements.define("profile-banner",a);var c,d=e(826);!function(n){n.profilePicture="profilePicture",n.postPicture="postPicture",n.name="name",n.breed="breed",n.caption="caption",n.likes="likes"}(c||(c={}));class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.likes=0}static get observedAttributes(){return Object.keys({profilePicture:null,postPicture:null,name:null,breed:null,caption:null,likes:null})}connectedCallback(){this.render(),this.addLikeButtonListener()}attributeChangedCallback(n,t,e){n===c.likes?this.likes=e?Number(e):0:this[n]=e,this.render()}addLikeButtonListener(){var n;const t=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".like-button");null==t||t.addEventListener("click",(()=>{this.likes+=1,this.updateLikes()}))}updateLikes(){var n;const t=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".likes-count");t&&(t.textContent=String(this.likes))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <style>\n        ${d.A}\n      </style>\n\t  <section class="cards-container">\n      <section class="post-card">\n        <header>\n          <div class="user-info">\n            <img class="Profile-Picture" src="${this.profilePicture}" alt="Profile Picture">\n            <div class="nombre"><h1>${this.name}</h1></div>\n          </div>\n          <div class="raza"><h1>${this.breed}</h1></div>\n        </header>\n        <div class="image-container">\n          <img class="Post-Picture" src="${this.postPicture}" alt="Post Picture">\n        </div>\n        <div class="caption-container">\n          <div class="caption"><h1>${this.caption}</h1></div>\n          <div class="likes">\n            <h1 class="likes-count">${void 0!==this.likes?this.likes:0}</h1>\n            <button class="like-button">👍</button>\n          </div>\n        </div>\n      </section>\n\t</section>\n      `)}}customElements.define("post-card",l);var p,h=e(999);!function(n){n.name="name"}(p||(p={}));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({name:null})}connectedCallback(){this.render()}attributeChangedCallback(n,t,e){n===p.name&&(this.name=e),this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t  <style>\n\t\t\t  ${h.A}\n\t\t\t  </style>\n\t\t\t  <section class="welcome-message">\n\t\t\t\t<div class="message__user">\n\t\t\t\t<div class="messageuser">\n\t\t\t\t  <h2>Welcome back <span>${this.name}</span>.</h2>\n\t\t\t\t</div>\n\t\t\t\t  <p>Here’s what your PetGram friends have been doing...</p>\n\t\t\t\t</div>\n\t\t\t  </section>\n\t\t\t`)}}customElements.define("welcome-message",u);var m=e(875);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t  <style>\n\t\t\t\t${m.A}\n\t\t\t  </style>\n\t\t\t  <div id="button-container"> \x3c!-- Contenedor principal --\x3e\n\t\t\t\t<div class="raya"></div> \x3c!-- La raya --\x3e\n\t\t\t\t<button id="addPostBtn">Add Post</button> \x3c!-- El botón --\x3e\n\t\t\t  </div>\n\t\t\t`)}}customElements.define("add-post-button",f);class g extends HTMLElement{constructor(){super(),this.postCard=[],this.profileBanner=[],this.welcomeMessage=[],this.attachShadow({mode:"open"}),o.forEach((n=>{const t=document.createElement("profile-banner");t.profilePic=n.profilePic,t.name=n.name,this.profileBanner.push(t)})),i.forEach((n=>{const t=document.createElement("post-card");t.profilePicture=n.profilePicture,t.postPicture=n.postPicture,t.name=n.name,t.breed=n.breed,t.caption=n.caption,this.postCard.push(t)})),o.forEach((n=>{const t=document.createElement("welcome-message");t.name=n.name,this.welcomeMessage.push(t)})),this.addPostButton=document.createElement("add-post-button")}connectedCallback(){this.renderizar()}renderizar(){var n;this.shadowRoot&&(this.profileBanner.forEach((n=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)})),this.welcomeMessage.forEach((n=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)})),null===(n=this.shadowRoot)||void 0===n||n.appendChild(this.addPostButton),this.postCard.forEach((n=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)})))}}customElements.define("app-container",g)})();