import { reducer } from './reducer';
import { AppState, Observer } from '../types/types';

// 1. Crear el estado global appState: es un objeto con propiedades, estado actual
export let appState: AppState = {
	screen: 'LOGIN',
	backgroundColor: 'black',
	username: 'Juanes',
	id: 12345,
};

let observers: Observer[] = [];

//2. crear dispatch: metodo para lanzar las acciones
//se clona el estado global, luego con el reducer se da cuenta qué acción estoy lanzando
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
//3. agregar observadores para los subscritos (las screens) le notifica a observadores que cambió el store
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
