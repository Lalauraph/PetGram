//crear reducer para cambiar color de fondo

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case 'CHANGEBACKGROUND': //accion
			return {
				...currentState, //hace una copia
				backgroundcolor: payload, //payload es el nuevo valor, lo que tiene que hacer con la acción
			};

		default:
			return currentState;
	}
};
