export const todoListReducer = (state = { tareas : [] } , { type , payload}) => {

	switch (type) {

		case "@tarea/add":	return {...state , tareas : [...state.tareas , payload] };
		case "@tarea/reset": return { tareas : [] };
		default: return state;
	}

}