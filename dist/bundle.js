(()=>{"use strict";let e={backgroundColor:"black",username:"juanes",id:12345},n=[];class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),n=[...n,this]}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML="<h1>Hola</h1>"),console.log(e);const o=this.ownerDocument.createElement("button");o.innerHTML="cambiar background",o.addEventListener("click",(()=>{(t=>{const o=JSON.parse(JSON.stringify(e));e=((e,n)=>{const{action:t,payload:o}=e;return"CHANGEBACKGROUND"===t?Object.assign(Object.assign({},n),{backgroundcolor:o}):n})(t,o),n.forEach((e=>e.render))})({action:"CHANGEBACKGROUND",payload:"red"})})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o)}}customElements.define("app-landing",t);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;const n=this.ownerDocument.createElement("app-landing");null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)}}customElements.define("app-container",o)})();