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
                    ${require('./InputField.css').default}
                <div class="input-container">
                    <label>${this.label}</label>
                    <input type="${this.type}">
                </div>
            `;
        }
    }
}

customElements.define('input-field', InputField);
