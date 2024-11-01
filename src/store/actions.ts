//creo las acciones

export const changeBackground = (payload: any) => {
	return {
		action: 'CHANGEBACKGROUND',
		payload,
	};
};
