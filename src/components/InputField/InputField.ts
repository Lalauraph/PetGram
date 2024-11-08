export class InputField extends HTMLElement {
    label: string = '';
    type: string = 'text';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.label = this.getAttribute('label') || '';
        this.type = this.getAttribute('type') || 'text';
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    .input-container {
                        margin: 10px 0;
                    }
                    label {
                        color: white;
                        display: block;
                        font-size: 0.9em;
                        margin-bottom: 5px;
                    }

                </style>
                <div class="input-container">
                    <label>${this.label}</label>
                    <input type="${this.type}">
                </div>
            `;
        }
    }
}

customElements.define('input-field', InputField);
