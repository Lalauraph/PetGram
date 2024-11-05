import { NavigateAction, NavigationActions, Screens } from '../types/types';

export const navigate = (screen: Screens): NavigateAction => {
	return {
		action: NavigationActions.NAVIGATE,
		payload: screen,
	};
};
