import { Actions } from '../types/types';

//se crea un reducer para lo que le dije en el estado global: recibe dos cosas: accion y clon
export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction; //payload es el nuevo valor

	switch (action) {
		case Actions.NAVIGATE:
			return {
				...currentState,
				backgroundColor: payload, //de lo que estaba en el estado actual editar el background color
			};

		default:
			return currentState;
	}
};
