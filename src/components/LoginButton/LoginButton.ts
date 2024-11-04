export class LoginButton extends HTMLElement {
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
                <button type="submit">Log in!</button>
            `;
        }
    }
}

customElements.define('login-button', LoginButton);