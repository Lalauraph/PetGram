import { Actions, AppState, NavigationActions } from '../types/types';

//se crea un reducer para lo que le dije en el estado global: recibe dos cosas: accion y clon
export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction; //payload es el nuevo valor

	switch (action) {
		case NavigationActions.NAVIGATE:
			return {
				...currentState,
				screen: payload, //de lo que estaba en el estado actual editar el background color
			};

		default:
			return currentState;
	}
};
