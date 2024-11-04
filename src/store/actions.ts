import { Actions } from '../types/types';
import { Screens } from '../types/types';

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};
