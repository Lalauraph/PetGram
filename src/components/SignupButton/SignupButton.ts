export class SignupButton extends HTMLElement {
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
                    ${require('./RegisterForm.css').default}
                </style>
                <button type="button">SIGN UP</button>
            `;
        }
    }
}

customElements.define('signup-button', SignupButton);