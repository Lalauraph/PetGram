export type AppState = {
	screen: string;
	backgroundColor: string;
	username: string;
	id: number;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
}

export enum Screens {
	'LOGIN' = 'LOGIN',
	'FEED' = 'FEED',
}
