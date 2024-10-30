import styles from './button-style.css';

export enum AttributeButton {
	'label' = 'label',
}

export class CustomButton extends HTMLElement {
	label?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	