export class CheckboxField extends HTMLElement {
    label: string = '';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.label = this.getAttribute('label') || '';
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    ${require('./CheckboxField.css').default}
                <div class="checkbox-container">
                    <input type="checkbox">
                    <label>${this.label}</label>
                </div>
            `;
        }
    }
}

customElements.define('checkbox-field', CheckboxField);
