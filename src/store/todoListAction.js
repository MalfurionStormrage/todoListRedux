export const agregarTarea = (datos) => {
	return {
		type: '@tarea/add',
		payload: datos
	}
};

export const resetearTareas = {
	type: '@tarea/reset'
};
