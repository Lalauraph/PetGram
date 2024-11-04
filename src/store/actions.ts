import { Actions } from '../types/types';
import { Screens } from '../types/types';

export const navigate = (screen: string) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};
