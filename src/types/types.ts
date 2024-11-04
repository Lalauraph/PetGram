export type AppState = {
	screen: string;
};

export type Observer = { render: () => void } & HTMLElement;

//crear acción de navegar
export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
}

//crear tipados de las pantallas
export enum Screens {
	'ADDPOST' = 'ADDPOST',
	'CREATEACCOUNT' = 'CREATEACCOUNT',
	'EDITPROFILE' = 'EDITPROFILE',
	'EDITPROFILEPICTURE' = 'EDITPROFILEPICTURE',
	'FEED' = 'FEED',
	'LANDING' = 'LANDING',
	'LOGIN' = 'LOGIN',
	'MYPOSTVIEW' = 'MYPOSTVIEW',
	'MYPROFILE' = 'MYPROFILE',
	'PROFILESETUP' = 'PROFILESETUP',
	'REGISTER' = 'REGISTER',
	'SINGLEPOST' = 'SINGLEPOST',
	'USERPROFILE' = 'USERPROFILE',
}
