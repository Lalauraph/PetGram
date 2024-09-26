import styles from './post-card.css';

export enum Attribute7 {
	'profilePicture' = 'profilePicture',
	'postPicture' = 'postPicture',
	'name' = 'name',
	'breed' = 'breed',
	'caption' = 'caption',
	'likes' = 'likes',
}

export class postCard extends HTMLElement {
	profilePicture?: string;
	postPicture?: string;
	name?: string;
	breed?: string;
	caption?: string;
	likes?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute7, null> = {
			profilePicture: null,
			postPicture: null,
			name: null,
			breed: null,
			caption: null,
			likes: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute7, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute7.likes:
				this.likes = newValue ? Number(newValue) : undefined;
				break;
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<style>
          ${styles}
        </style>
              <section class="post-card">
							<img class="Profile-Picture" src="${this.profilePicture}" alt="Profile Picture">
              <img class="Post-Picture" src="${this.postPicture}" alt="Post Picture">
              <h1>${this.name}</h1>
              <h1>${this.breed}</h1>
              <h1>${this.caption}</h1>
              <h1>${this.likes}</h1>
          `;
		}
	}
}
customElements.define('post-card', postCard);
