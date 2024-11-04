import { reducer } from './reducer';
import { AppState, Observer } from '../types/types';

// 1. Crear el estado global appState: es un objeto con propiedades, estado actual: inicia en pantalla de landing
export let appState: AppState = {
	screen: 'LANDING',
};

let observers: Observer[] = []; //arreglo de observadores

// 2. Crear dispatch: método para lanzar las acciones
// Se clona el estado global, luego con el reducer se da cuenta qué acción estoy lanzando
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState)); // esta linea vuelve un string el appState y luego un json, le crea una copia
	appState = reducer(action, clone);
	observers.forEach((o) => o.render); //donde haya un observador se ejecuta el render, la pantalla se debe volver a renderizar
};

//3. agregar observadores para los interesados (las screens o los componentes) le notifica a observadores que cambió el store
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
