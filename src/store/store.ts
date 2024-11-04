import { reducer } from './reducer';
import { AppState, Observer } from '../types/types';

// 1. Crear el estado global appState: es un objeto con propiedades, estado actual
export let appState: AppState = {
	screen: 'LOGIN',
	backgroundColor: 'black',
	username: 'Juanes',
	id: 12345,
	screen: 'LOGIN',
};

let observers: any[] = []; //arreglo de observadores

// 2. Crear dispatch: método para lanzar las acciones
// Se clona el estado global, luego con el reducer se da cuenta qué acción estoy lanzando
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState)); // esta linea vuelve un string el appState y luego un json, le crea una copia
	appState = reducer(action, clone);
	observers.forEach((o) => o.render); //donde haya un observador se ejecuta el render, la pantalla se debe volver a renderizar
};

//3. agregar observadores para los subscritos (las screens) le notifica a observadores que cambió el store
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
