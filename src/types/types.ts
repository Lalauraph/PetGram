export type AppState = {
	screen: string;
	backgroundColor: string;
	username: string;
	id: number;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	'CHANGEBACKGROUND' = 'CHANGEBACKGROUND',
	'NAVIGATE' = 'NAVIGATE',
}

export enum Screens {
	'LOGIN' = 'LOGIN',
	'LANDING' = 'LANDING',
	'FEED' = 'FEED',
}
