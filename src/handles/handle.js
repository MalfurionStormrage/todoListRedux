import { todoListRedux } from '../store/todoListRedux';
import { agregarTarea, resetearTareas } from '../store/todoListAction';

/* agregar nueva tarea */
export const handleAgregar = (e) => {
	try {

		e.preventDefault();

		if (document.getElementById('title').value === "" || document.getElementById('descriocion').value === "") {
			setError(true);
			setTimeout(() => setError(false), 3000);
			return
		}

		const datos = {
			id: Date.now(),
			title: document.getElementById('title').value,
			descriocion: document.getElementById('descriocion').value,
			completado: false
		}

		todoListRedux.store.dispatch(agregarTarea(datos));

		document.getElementById('title').value = "";
		document.getElementById('descriocion').value = "";

	} catch (err) {

		console.log(err);
	}
}

/* vaciar las tareas registradas */
export const handleResetear = (e) => {
	try {

		e.preventDefault();
		todoListRedux.store.dispatch(resetearTareas);

	} catch (err) {

		console.log(err);
	}
}