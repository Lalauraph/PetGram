import { Actions } from '../types/types';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.NAVIGATE: //acción
			return {
				...currentState, //hace una copia
				screen: payload, //payload es el nuevo valor, lo que debe hacer con la acción
			};

		default:
			return currentState;
	}
};
