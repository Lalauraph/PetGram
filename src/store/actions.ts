import { Actions } from '../types/store';
import { Screens } from '../types/store';

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};
