// petgramBanner.ts
export class PetgramBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    .banner {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #a64ca6; /* Fondo morado */
                        color: white;
                        font-size: 1.5em;
                        font-weight: bold;
                        padding: 10px 0;
                        font-family: Raspberie, serif;
                    }
                    .logo {
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                        background-image: (./logo horizontal.png);
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                </style>
                <div class="banner">
                    <div class="logo"></div>
                    <span>PetGram</span>
                </div>
            `;
        }
    }
}

// Define el componente personalizado
customElements.define('petgram-banner', PetgramBanner);

export default PetgramBanner;
