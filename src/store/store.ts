import { reducer } from './reducer';
import { Observer } from '../types/types';

// 1. Crear el estado global appState: es un objeto con propiedades, estado actual
export let appState = {
	backgroundColor: 'black',
	username: 'juanes',
	id: 12345,
	screen: 'LOGIN',
};

let observers: any[] = []; // arreglo de observadores

// 2. Crear dispatch: método para lanzar las acciones
// Se clona el estado global, luego con el reducer se da cuenta qué acción estoy lanzando
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState)); // crea una copia del estado actual
	appState = reducer(action, clone);
	observers.forEach((o) => {
		if (typeof o.render === 'function') {
			o.render(); // llama al método render de cada observador
		}
	});
};

// 3. Agregar observadores para los subscritos (las screens), notificando que el store ha cambiado
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
