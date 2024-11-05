// export type AppState = {
// 	screen: string;
// };

export type Observer = { render: () => void } & HTMLElement;

//crear acción de navegar
// export enum Actions {
// 	'NAVIGATE' = 'NAVIGATE',
// }

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
const get = <T>({ key, defaultValue }: { key: Screens; defaultValue: T }): T => {
	const value = localStorage.getItem(key) || sessionStorage.getItem(key);
	return value ? JSON.parse(value) : defaultValue;
};
const set = ({ key, value, session = false }: { key: Screens; value: unknown; session?: boolean }) => {
	const storage = session ? sessionStorage : localStorage;
	const parsed = JSON.stringify(value);
	storage.setItem(key, parsed);
};

export default {
	get,
	set,
};
export type AppState = {
	screen: Screens;
};

export enum NavigationActions {
	'NAVIGATE' = 'NAVIGATE',
}

export interface NavigateAction {
	action: NavigationActions.NAVIGATE;
	payload: Screens;
}

export type Actions = NavigateAction;
